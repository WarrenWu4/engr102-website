import { useEffect, useState, useContext } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { db, storage } from "../firebase";
import { ref, getDownloadURL } from "firebase/storage";
import { collection, getDocs, doc, getDoc, updateDoc } from "firebase/firestore";
import { FaLongArrowAltRight, FaLongArrowAltLeft, FaDiscord, FaLock } from "react-icons/fa";
import { AuthContext } from "../App";

export default function LearnPage() {

    const [lessonData, setLessonData] = useState([]);    
    const [isLoading, setIsLoading] = useState(true);

    // fetch data from firestore
    useEffect(() => {

        const getData = async () => {
            // await firebase get docs method to get all units
            const querySnapshot = await getDocs(collection(db, "units"));
            setLessonData(querySnapshot)
            setIsLoading(false);
        }
        
        getData()

    }, [])

    return(
        <>
        {!isLoading && 
        <div className="max-w-[128rem] w-full px-[1.6rem] flex flex-col items-center sm:px-[6.4rem] lg:px-[12.8rem] ">

                <div className="w-full mt-[2.4rem] font-bold text-[3.6rem] md:mt-[5.6rem] xl:mt-[6.4rem] text-center md:text-left">UNITS</div>

                <div className="w-full mt-[2rem] gap-[3.2rem] grid place-items-center mb-[6.4rem] md:mb-[12.8rem] grid-cols-1 md:grid-cols-wwu">
            
                    {lessonData.docs.map((doc, index) => <UnitCard key={index} thumbnail={doc.data()["thumbnail"]} title={doc.data()["title"]} desc={doc.data()["desc"]} link={doc.id} locked={doc.data()["locked"]} max={Object.keys(doc.data()["lessons"]).length}/>)}

                </div>

            </div>
        }
        </>
    );
}


export const LearnView = () => {

    // based on the route, get the associated lesson
    const unitNum = useParams()["unit_id"];
    const lessonNum = useParams()["lesson_id"];
    const nav = useNavigate();
    const [loading, setLoading] = useState(true);
    const [lessonData, setLessonData] = useState();
    const [pages, setPages] = useState({"curr":Number(lessonNum.split("of")[0]), "max":Number(lessonNum.split("of")[1])})

    useEffect(() => {

        // get data from lesson number
        const getData = async () => {
            try {
                // verify that the unit isn't locked and that it exists
                const querySnapshot =  await getDoc(doc(db, "units", unitNum));
                setLessonData(querySnapshot.data())
                setLoading(false);
            }
            catch (err) {
                console.log(err);
                nav("/error");
            }
        }

        if(isNaN(pages["curr"])) {
            nav("/error")
        }
        setPages({"curr":Number(lessonNum.split("of")[0]), "max":Number(lessonNum.split("of")[1])})
        getData();

    }, [unitNum, lessonNum])    

    const prevLesson = () => {
        if(pages["curr"] > 1) {
            nav("/learn/"+unitNum+"/"+(pages["curr"]-1)+"of"+pages["max"])
        }
    }

    const nextLesson = () => {
        if(pages["curr"] < pages["max"]) {
            nav("/learn/"+unitNum+"/"+(pages["curr"]+1)+"of"+pages["max"])
        }
    }

    return (
        <>
            {!loading &&
            <div className="max-w-[128rem] w-full px-[1.6rem] flex flex-col items-center sm:px-[6.4rem] lg:px-[12.8rem]">

                {!lessonData["locked"] &&
                    <iframe className="w-full aspect-video rounded-[0.8rem] bg-neutral-800 mt-[2.4rem]" allowFullScreen 
                    src={lessonData["lessons"][pages["curr"]]["video"]}></iframe>
                }

                <div className="w-full h-[4.8rem] bg-neutral-700 rounded-[0.8rem] my-[1.6rem] flex text-h7 px-[3.2rem] justify-end items-center [&>svg]:cursor-pointer [&>svg]:mx-[0.8rem]">
                    <FaLongArrowAltLeft onClick={prevLesson}/>
                    <FaLongArrowAltRight onClick={nextLesson}/>
                </div>

                <div className="w-full p-[1.6rem] bg-neutral-800 rounded-[0.8rem]">
                            
                    <div className="font-medium text-h7">{lessonData["title"]}</div>

                    <div className="w-full h-[0.2rem] bg-neutral-700 mt-[0.8rem]"></div>

                    {Object.keys(lessonData["lessons"]).map((lesson) => <LessonCard key={lesson} link={"/learn/"+unitNum+"/"+lesson+"of"+pages["max"]} active={Number(lesson) === pages["curr"]} title={lessonData["lessons"][lesson]["title"]}/>)}
                </div>

                <div className="flex flex-col items-center my-[6.4rem]">

                    <div className="font-bold text-h7">QUESTIONS?</div>

                    <a href="https://tx.ag/216server" target="_blank" className="flex bg-blue-600 px-[1.6rem] py-[0.8rem] my-[0.8rem] rounded-[0.4rem] font-bold text-h9">
                        <FaDiscord className="text-h7 mr-[0.8rem]"/>
                        DISCORD
                    </a>

                    <div className="font-medium text-h9">ping a TA/PT</div>

                </div>

                {lessonData["locked"] && <div className="w-full h-full absolute top-0 left-0 rounded-[0.8rem] backdrop-blur-[0.8rem] flex justify-center items-center flex-col"> 
                    <FaLock className="text-h7"/>
                    <div className="text-h7 font-bold mt-[1.6rem]">Lesson Locked</div>
                </div>}

            </div>
            }
        </>
    )
}

const LessonCard = ({title, link, active}) => {

    const [compClass, setCompClass] = useState("border-[0.2rem]");
    const [warning, setWarning] = useState(0)
    const on = (active) ? "bg-primary-600" : "hover:bg-neutral-600 bg-neutral-700"
    
    const {uid, userData} = useContext(AuthContext);

    useEffect(() => {
        // if user logged in, see if they completed this lesson by matching unit and lesson ids
        if (uid !== null) {
            const unitNum = link.split("/")[2].split("unit")[1]
            const lessonNum = link.split("/")[3].split("of")[0]
            if (userData["u_comp"][unitNum+"."+lessonNum]) {
                setCompClass("bg-green-100")
            }
        }
    }, [])

    const handleComp = async (e) => {
        e.preventDefault();
        // if user logged in and clicks complete --> update db
        if (uid !== null) {
            // toggle completion 1. if not complete -> set complete & vice versa
            if (compClass === "border-[0.2rem]") {
                setCompClass("bg-green-100")
                const unitNum = link.split("/")[2].split("unit")[1]
                const lessonNum = link.split("/")[3].split("of")[0]

                let prevComp = userData["u_comp"];
                prevComp[unitNum+"."+lessonNum] = true;
                await updateDoc(doc(db, "users", uid), {
                    u_comp: prevComp
                })
            }
            else {
                setCompClass("border-[0.2rem]")
                const unitNum = link.split("/")[2].split("unit")[1]
                const lessonNum = link.split("/")[3].split("of")[0]
                
                let prevComp = userData["u_comp"];
                prevComp[unitNum+"."+lessonNum] = false;
                await updateDoc(doc(db, "users", uid), {
                    u_comp: prevComp
                })
            }
        }
        // if user not logged in, send alert
        else {
            setWarning(1)
        }
    }

    return (
        <>
            <NavLink to={link} className={"w-full py-[0.8rem] px-[1.6rem] flex items-center rounded-[0.8rem] my-[1.6rem] transition-all duration-[0.5s] "+on}>
                
                <button type="button" className={"w-[1.6rem] aspect-square rounded-[50%] mr-[0.8rem] " + compClass} onClick={handleComp}></button>

                <div className="text-h9 leading-[1.5]">{title}</div>

            </NavLink>

            <div className={"w-[30rem] px-[1.6rem] py-[0.8rem] rounded-[0.8rem] fixed left-[50%] translate-x-[-50%] bottom-[6.4rem] bg-red-100 font-medium text-h9 text-center opacity-0 z-[-2]"} id="warning" warn={warning} onAnimationEnd={() => setWarning(0)}>SIGN IN TO TRACK PROGRESS</div>
        </>
    )
}

const UnitCard = ({thumbnail, title, desc, link, locked, max}) => {

    // ? might be worth it to just upload to images to public since it seems faster

    const [tImg, setTImg] = useState("")
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        
        try {
            getDownloadURL(ref(storage, thumbnail)).then((url) => {
                setTImg(url)
                setIsLoading(false);
            })
        }
        catch (err) {}


    })

    return (
        <div className="w-[28.8rem] h-[39.3rem] bg-neutral-800 rounded-[0.8rem] flex flex-col relative">

            {!isLoading && <img src={tImg} alt="thumbanil" className="w-full aspect-video rounded-t-[0.8rem]" />}

            {/* placeholder */}
            {isLoading && <div className="w-full aspect-video rounded-t-[0.8rem] bg-neutral-800" />}

            <div className="w-full px-[1.6rem] flex flex-col">

                <div className="font-medium text-h7 mt-[2.4rem] text-ellipsis overflow-hidden line-clamp-1">{title}</div>

                <div className="text-[1.6rem] leading-[1.5] mt-[1.2rem] text-ellipsis overflow-hidden line-clamp-3">{desc}</div>

                <NavLink to={"/learn/"+link+"/1of"+max} className="w-full h-[4.7rem] my-[2rem] rounded-[0.8rem] font-medium text-[1.6rem] bg-primary-600 hover:bg-primary-500 flex justify-center items-center">START</NavLink>
            
            </div>

            {locked && <div className="w-full h-full absolute top-0 left-0 rounded-[0.8rem] backdrop-blur-[0.8rem] flex justify-center items-center flex-col"> 
                <FaLock className="text-h7"/>
                <div className="text-h7 font-bold mt-[1.6rem]">Unit Locked</div>
            </div>}

        </div>
    )
}