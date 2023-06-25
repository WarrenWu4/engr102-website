import { useEffect, useState, Suspense } from "react";
import { NavLink, useParams } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

export default function LearnPage() {

    const [uCards, setUCards] = useState([]);    

    // fetch data from firestore
    useEffect(() => {
        const getData = async () => {
            // await firebase get docs method
            const querySnapshot = await getDocs(collection(db, "units"));
            
            // display all units
            querySnapshot.docs.map((doc, index) => setUCards([...uCards, <UnitCard key={index} thumbnail={doc.data()["thumbnail"]} title={doc.data()["title"]} desc={doc.data()["desc"]} link={doc.data()["link"]}/>]))
        }
        
        getData()

    }, [])

    return(
        <div className="max-w-[128rem] w-full px-[1.6rem] flex flex-col items-center sm:px-[6.4rem] lg:px-[12.8rem] ">

            <div className="w-full mt-[2.4rem] font-bold text-[3.6rem] md:mt-[5.6rem] xl:mt-[6.4rem] ">UNITS</div>

            <div className="w-full mt-[2rem] gap-x-[2rem] gap-y-[2rem] grid grid-cols-1 place-items-center mb-[6.4rem] md:gap-y-[3.2rem] lg:gap-y-[6.4rem] md:mb-[12.8rem] md:grid-cols-2 xl:grid-cols-3">
        
                {uCards}

            </div>

        </div>
    );
}


export const LearnView = () => {

    // based on the route, get the lesson documents
    const unitNum = useParams()["id"];
    const lessonNum = useParams()["lesson_id"];

    const [vid, setVid] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // get data from lesson number
        const getData = async () => {
            const lessonInfo = await getDoc(doc(db, "units", unitNum, "lessons", lessonNum));
            setVid(lessonInfo.data()["video"]);
            setLoading(false);
        }

        getData();

    }, [unitNum, lessonNum])

    return (
        <div className="max-w-[128rem] w-full px-[1.6rem] flex flex-col items-center sm:px-[6.4rem] lg:px-[12.8rem]">

            {!loading && <iframe className="w-full aspect-video rounded-[0.8rem] bg-neutral-800 mt-[2.4rem]" allowFullScreen 
            src={vid}></iframe>}

            <div className="w-full h-[4.8rem] bg-neutral-700 rounded-[0.8rem] my-[1.6rem] flex text-h7 justify-center items-center [&>svg]:cursor-pointer [&>svg]:ml-[1.6rem]">
                <FaLongArrowAltLeft/>
                <FaLongArrowAltRight/>
            </div>

            <LessonSideBar />

        </div>
    )
}

const LessonSideBar = () => {

    const unitNum = useParams()["id"];
    const [data, setData] = useState();
    const [title, setTitle] = useState();
    const [loading, setLoading] = useState(true);

    // get all lessons from unit
    useEffect(() => {
        const getData = async () => {
            const unitInfo = await getDoc(doc(db, "units", unitNum));
            setTitle(unitInfo.data()["title"]);
            getDocs(collection(db, "units", unitNum, "lessons")).then((dat) => {
                setData(dat);
                setLoading(false);
            });
        }

        getData()
        
    }, [])
    return (
        <div className="w-full p-[1.6rem] bg-neutral-800 rounded-[0.8rem] mb-[6.4rem]">
                    
            <div className="font-medium text-h7">{title}</div>

            <div className="w-full h-[0.2rem] bg-neutral-700 mt-[0.8rem]"></div>

            {!loading && data.docs.map((doc, index) => <LessonCard key={index} link={"/learn/"+unitNum+"/lesson"+(index+1)} title={doc.data()["title"]} complete={false} />)}

        </div>
    )
}

const LessonCard = ({title, complete, link}) => {

    const completion = (complete) ? "bg-green-100":"border-[0.2rem]"

    return (
        <NavLink to={link} className="w-full py-[0.8rem] px-[1.6rem] flex items-center rounded-[0.8rem] my-[1.6rem] bg-neutral-700">
            
            <div className={"w-[1.6rem] aspect-square rounded-[50%] mr-[0.8rem] " + completion}></div>

            <div className="text-h9 leading-[1.5]">{title}</div>

        </NavLink>
    )
}

const UnitCard = ({thumbnail, title, desc, link}) => {
    return (
        <div className="w-[28.8rem] h-[38.6rem] bg-neutral-800 rounded-[0.8rem] flex flex-col">

            <img src={thumbnail} alt="thumbanil" className="w-full aspect-video rounded-t-[0.8rem]" />

            <div className="w-full px-[1.6rem] flex flex-col">

                <div className="font-medium text-[2.4rem] mt-[2.4rem]">{title}</div>

                <div className="text-[1.6rem] leading-[1.5] mt-[1.2rem]">{desc}</div>

                <NavLink to={link} className="w-full h-[4.7rem] my-[2rem] rounded-[0.8rem] font-medium text-[1.6rem] bg-primary-600 hover:bg-primary-500 flex justify-center items-center">START</NavLink>
            
            </div>

        </div>
    )
}