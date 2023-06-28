import { useEffect, useState, useContext, useRef } from "react";
import { db } from "../firebase";
import { getDocs, collection, query, where, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { BiPlus } from "react-icons/bi";
import { AuthContext } from "../App";
import { IoMdClose } from "react-icons/io"
import { FaEllipsisV } from  "react-icons/fa";

export default function ProfilePage() {

    const {uid, userData} = useContext(AuthContext);
    const [upRev, setUpRev] = useState("none");
    const [logData, setLogData] = useState()
    const [isLoading, setIsLoading] = useState(true);
    const [success, setSuccess] = useState(0);
    const upTitle = useRef();
    const upLink = useRef();
    const upType = useRef();

    useEffect(() => {

        const getReviews = async() => {

            const querySnapshot = await getDocs(query(collection(db, "reviews"), where("author", "==", uid)))
            setLogData(querySnapshot);
            setIsLoading(false);
        }

        getReviews();

    }, [success])

    const addReview = async(e) => {
        e.preventDefault();

        await addDoc(collection(db, "reviews"), {
            author: uid,
            source: upLink.current.value,
            title: upTitle.current.value,
            type: upType.current.value
        })
        setSuccess(1);
        setUpRev("none");
        upTitle.current.value = ""
        upLink.current.value = "" 
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

            <div style={{display: upRev}} className="w-full h-screen z-10 bg-neutral-900/80 fixed top-0 left-0 justify-center items-center">

                <div className="p-[1.6rem] rounded-[0.8rem] bg-neutral-800">
                    
                    {/* link to source (text input), review type (dropdown), title */}
                    <form onSubmit={addReview}>
                        
                        <label className="min-w-[24rem] w-full justify-between flex items-center text-h8 font-medium">Review Title <IoMdClose className="text-h7 cursor-pointer" onClick={() => setUpRev("none")}/></label>
                        <br/>
                        <input ref={upTitle} className="rounded-[0.4rem] py-[0.8rem] px-[1.2rem] w-full bg-neutral-700 text-h9 placeholder:text-neutral-200" type="text" placeholder="title" required/>
                        <br/><br/>
                        <label className="min-w-[24rem] w-full justify-between flex items-center text-h8 font-medium">Link To Resource</label>
                        <br/>
                        <input ref={upLink} className="rounded-[0.4rem] py-[0.8rem] px-[1.2rem] w-full bg-neutral-700 text-h9 placeholder:text-neutral-200" type="text" placeholder="link" required/>
                        <br/><br/>
                        <label className="min-w-[24rem] w-full justify-between flex items-center text-h8 font-medium">Review Type</label>
                        <br/>
                        <div className="rounded-[0.4rem] py-[0.8rem] px-[1.2rem] w-full bg-neutral-700 text-h9 placeholder:text-neutral-200 appearance-none grid">
                            <select ref={upType} className="bg-neutral-700" type="text" required>
                                <option value={"video"}>Video</option>
                                <option value={"cheat_sheet"}>Cheat Sheet</option>
                                <option value={"practice_exam"}>Practice Exam</option>
                            </select>
                        </div>
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

                {!isLoading && logData.docs.map((doc, index) => <ReviewLog key={index} title={doc.data()["title"]} type={doc.data()["type"]} link={doc.data()["source"]} docID={doc.id}/>)}
            </div>

            <div className="min-w-[30rem] max-w-[40rem] px-[1.6rem] py-[0.8rem] rounded-[0.8rem] fixed left-[50%] translate-x-[-50%] bottom-[6.4rem] bg-green-400 font-medium text-h9 text-center opacity-0 z-[-2]" id="success" suc={success} onAnimationEnd={() => setSuccess(0)}>
                Success! You should see your review resource in the reviews page now.<br/>Thanks for contributing 😊.
            </div>

        </div>
    )
}

const ReviewLog = ({title, type, link, docID}) => {

    const [editMode, setEditMode] = useState("none")

    const upTitle = useRef();
    const upLink = useRef();
    const upType = useRef();

    const editReview = async (e) => {
        e.preventDefault();
        const newTitle = (upTitle.current.value !== "") ? upTitle.current.value : title
        const newLink = (upLink.current.value !== "") ? upLink.current.value : link
        const newType = (upType.current.value !== "") ? upType.current.value : type
        await updateDoc(doc(db, "reviews", docID), {
            title: newTitle,
            source: newLink,
            type: newType
        })

        window.location.reload(false);
    }

    const deleteReview = async () => {
        await deleteDoc(doc(db, "reviews", docID));
        window.location.reload(false);
    }

    return (
        <div className="w-full relative">
            <div className="w-full rounded-[0.8rem] p-[1.6rem] bg-neutral-700 grid grid-cols-3 place-items-center [&>*]:text-h9 mt-[2rem] [&>*]:text-ellipsis [&>*]:overflow-hidden [&>*]:line-clamp-1">

                <span>{title}</span>
                <span>{type}</span>
                <span>
                    "{link}" 
                </span>


            </div>
            
            <button className="absolute right-[1.6rem] text-h9 cursor-pointer top-[50%] translate-y-[-50%]" onClick={() => setEditMode("flex")}><FaEllipsisV/></button>

            <div style={{display: editMode}} className="w-full h-screen bg-neutral-900/80 fixed top-0 left-0 justify-center items-center z-20">

                <div className="p-[1.6rem] rounded-[0.8rem] bg-neutral-800">
                    
                    {/* link to source (text input), review type (dropdown), title */}
                    <form onSubmit={editReview}>
                        
                        <label className="min-w-[24rem] w-full justify-between flex items-center text-h8 font-medium">Review Title <IoMdClose className="text-h7 cursor-pointer" onClick={() => setEditMode("none")}/></label>
                        <br/>
                        <input ref={upTitle} className="rounded-[0.4rem] py-[0.8rem] px-[1.2rem] w-full bg-neutral-700 text-h9 placeholder:text-neutral-200" type="text" placeholder={title}/>
                        <br/><br/>
                        <label className="min-w-[24rem] w-full justify-between flex items-center text-h8 font-medium">Link To Resource</label>
                        <br/>
                        <input ref={upLink} className="rounded-[0.4rem] py-[0.8rem] px-[1.2rem] w-full bg-neutral-700 text-h9 placeholder:text-neutral-200" type="text" placeholder={link}/>
                        <br/><br/>
                        <label className="min-w-[24rem] w-full justify-between flex items-center text-h8 font-medium">Review Type</label>
                        <br/>
                        <div className="rounded-[0.4rem] py-[0.8rem] px-[1.2rem] w-full bg-neutral-700 text-h9 placeholder:text-neutral-200 appearance-none grid">
                            <select ref={upType} className="bg-neutral-700" type="text">
                                <option value={"video"}>Video</option>
                                <option value={"cheat_sheet"}>Cheat Sheet</option>
                                <option value={"practice_exam"}>Practice Exam</option>
                            </select>
                        </div>
                        <br/>

                        <div className="flex w-full justify-between">
                            <button type="submit" className="mt-[1.6rem] rounded-[0.4rem] bg-green-500 px-[1.2rem] py-[0.8rem] text-h10 font-bold">SAVE</button>
                            <button type="button" onClick={deleteReview} className="mt-[1.6rem] rounded-[0.4rem] bg-red-500 px-[1.2rem] py-[0.8rem] text-h10 font-bold">DELETE</button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    )
}