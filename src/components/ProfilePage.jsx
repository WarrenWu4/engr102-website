import { useEffect, useState, useContext } from "react";
import { db } from "../firebase";
import { getDocs, collection, query, where } from "firebase/firestore";
import { BiPlus } from "react-icons/bi";
import { AuthContext } from "../App";
import { IoMdClose } from "react-icons/io"


export default function ProfilePage() {

    const {uid, userData} = useContext(AuthContext);
    const [upRev, setUpRev] = useState("none");
    const [logData, setLogData] = useState()
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const getReviews = async() => {

            const querySnapshot = await getDocs(query(collection(db, "reviews"), where("author", "==", uid)))

            setLogData(querySnapshot);
            setIsLoading(false);

        }

        getReviews();

    }, [])

    const addReview = () => {
        setUpRev((upRev === "none") ? "flex" : "none")
    }

    return (
        <div className="max-w-[128rem] w-full px-[1.6rem] flex flex-col sm:px-[6.4rem] lg:px-[12.8rem]">

            <div className="w-full mt-[2.4rem] flex items-center font-bold text-[3.6rem] md:mt-[5.6rem] xl:mt-[6.4rem] justify-center md:justify-start">

                <img src={userData["profile"]} alt="ta profile" className="w-[4rem] h-[4rem] rounded-[0.4rem] mr-[1.2rem]"/>
                Profile

            </div>

            <button type="button" onClick={addReview} className="max-w-[76.8rem] w-full h-[4.8rem] rounded-[0.8rem] bg-green-600 font-medium text-h9 flex items-center justify-center mt-[2rem] md:w-fit md:px-[2.4rem]">
                <BiPlus className="text-h8"/>
                Upload Review Resource
            </button>

            <div style={{display: upRev}} className="w-full h-full bg-neutral-900/80 fixed top-0 left-0 flex justify-center items-center">

                <div className="p-[1.6rem] rounded-[0.8rem] bg-neutral-800">
                    
                    {/* link to source (text input), review type (dropdown), title */}
                    <form onSubmit={addReview}>
                        
                        <label className="flex items-center">Review Title <IoMdClose onClick={() => setUpRev("none")}/></label>
                        <br/>
                        <input type="text" />
                        <br/><br/>
                        <label>Link To Resource</label>
                        <br/>
                        <input type="text" />
                        <button type="submit"></button>

                    </form>

                </div>

            </div>

           {/*display review log */}
           <div className="w-full mt-[2.4rem] font-bold text-[3.6rem] md:mt-[5.6rem] xl:mt-[6.4rem] text-center md:text-left mb-[2.4rem]">Review Logs</div>

            {!isLoading && logData.docs.map((doc, index) => <ReviewLog key={index} title={doc.data()["title"]} type={doc.data()["type"]} link={doc.data()["source"]} />)}

        </div>
    )
}

const ReviewLog = ({title, type, link}) => {

    const [reviewType, setReviewType] = useState({"color":"#000", "text":"unknown"})

    useEffect(() => {

        const translateType = () => {
            switch (type) {
                case "video":
                    setReviewType({"color":"#C74B4B", "text":"review video"})
                    break;
                case "cheat_sheet":
                    setReviewType({"color":"#2B92E6", "text":"cheat sheet"})
                    break;
                case "practice_exam":
                    setReviewType({"color":"#E66F4C", "text":"practice exam"})
                    break;
            }
        }
        
        translateType()
    }, [])

    return (
        <div className="w-full bg-neutral-800 rounded-[0.8rem] flex items-center px-[1.6rem] min-h-[4.8rem] justify-between">

            <div className="">Title: {title} </div>
            
            <div className="flex items-center">
                Type: 
                        
                <div style={{background: reviewType["color"]}} className="px-[0.8rem] py-[0.4rem] flex justify-center items-center rounded-[0.4rem]">
                    <div className="bg-neutral-100 rounded-[50%] w-[0.8rem] h-[0.8rem] mr-[0.4rem]"></div>
                    <div className="text-h10 font-medium">{reviewType["text"]}</div>
                </div>

            </div>

            <div className="">Source: "{link}"</div>

        </div>
    )
}