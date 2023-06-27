import { useEffect, useState, useContext, useRef } from "react";
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
    const upTitle = useRef();
    const upLink = useRef();

    useEffect(() => {

        const getReviews = async() => {

            const querySnapshot = await getDocs(query(collection(db, "reviews"), where("author", "==", uid)))

            setLogData(querySnapshot);
            setIsLoading(false);

        }

        getReviews();

    }, [])

    const addReview = (e) => {
        e.preventDefault();

    }

    return (
        <div className="max-w-[128rem] w-full px-[1.6rem] flex flex-col sm:px-[6.4rem] lg:px-[12.8rem]">

            <div className="w-full mt-[2.4rem] flex items-center font-bold text-[3.6rem] md:mt-[5.6rem] xl:mt-[6.4rem] justify-center md:justify-start">

                <img src={userData["profile"]} alt="ta profile" className="w-[4rem] h-[4rem] rounded-[0.4rem] mr-[1.2rem]"/>
                Profile

            </div>

            <button type="button" onClick={() => setUpRev("flex")} className="max-w-[76.8rem] w-full h-[4.8rem] rounded-[0.8rem] bg-green-600 font-medium text-h9 flex items-center justify-center mt-[2rem] md:w-fit md:px-[2.4rem]">
                <BiPlus className="text-h8"/>
                Upload Review Resource
            </button>

            <div style={{display: upRev}} className="w-full h-full bg-neutral-900/80 fixed top-0 left-0 justify-center items-center">

                <div className="p-[1.6rem] rounded-[0.8rem] bg-neutral-800">
                    
                    {/* link to source (text input), review type (dropdown), title */}
                    <form onSubmit={addReview}>
                        
                        <label className="min-w-[24rem] w-full justify-between flex items-center text-h8 font-medium">Review Title <IoMdClose className="text-h7 cursor-pointer" onClick={() => setUpRev("none")}/></label>
                        <br/>
                        <input className="rounded-[0.4rem] py-[0.8rem] px-[1.2rem] w-full bg-neutral-700 text-h9 placeholder:text-neutral-200" type="text" placeholder="title" required/>
                        <br/><br/>
                        <label className="min-w-[24rem] w-full justify-between flex items-center text-h8 font-medium">Link To Resource</label>
                        <br/>
                        <input className="rounded-[0.4rem] py-[0.8rem] px-[1.2rem] w-full bg-neutral-700 text-h9 placeholder:text-neutral-200" type="text" placeholder="link" required/>
                        <br/><br/>
                        <label className="min-w-[24rem] w-full justify-between flex items-center text-h8 font-medium">Review Type</label>
                        <br/>
                        <input className="rounded-[0.4rem] py-[0.8rem] px-[1.2rem] w-full bg-neutral-700 text-h9 placeholder:text-neutral-200" type="text" placeholder="link" required/>
                        <br/>
                        <button type="submit" className="mt-[1.6rem] rounded-[0.4rem] bg-primary-500 px-[1.2rem] py-[0.8rem] text-h10 font-bold">SUBMIT</button>

                    </form>

                </div>

            </div>

           {/*display review log */}
           <div className="w-full mt-[2.4rem] font-bold text-[3.6rem] md:mt-[5.6rem] xl:mt-[6.4rem] text-center md:text-left mb-[2.4rem]">Review Logs</div>

            <div className="w-full rounded-[0.8rem] p-[1.6rem] bg-neutral-800 mb-[6.4rem] md:mb-[25.6rem]">

                <div className="w-full rounded-[0.8rem] p-[1.6rem] bg-primary-600 grid grid-cols-3 place-items-center [&>*]:text-h9 [&>*]:font-bold">
                    <span>TITLE</span>
                    <span>TYPE</span>
                    <span>SOURCE</span>
                </div>

                {!isLoading && logData.docs.map((doc, index) => <ReviewLog key={index} title={doc.data()["title"]} type={doc.data()["type"]} link={doc.data()["source"]} />)}
            </div>

        </div>
    )
}

const ReviewLog = ({title, type, link}) => {

    return (
        <div className="w-full rounded-[0.8rem] p-[1.6rem] bg-neutral-700 grid grid-cols-3 place-items-center [&>*]:text-h9 mt-[2rem] [&>*]:text-ellipsis [&>*]:overflow-hidden [&>*]:line-clamp-1">

            <span>{title}</span>
            <span>{type}</span>
            <span>"{link}"</span>

        </div>
    )
}