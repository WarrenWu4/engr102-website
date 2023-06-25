import { NavLink } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { getDocs, collection, doc, getDoc } from "firebase/firestore";

export default function ReviewPage() {

    const [isLoading, setIsLoading] = useState(true);
    const [reviewData, setReviewData] = useState()

    useEffect(() => {

        const getReviews = async() => {

            const querySnapshot = await getDocs(collection(db, "reviews"))

            setReviewData(querySnapshot);
            setIsLoading(false);

        }

        getReviews();

    }, [])
    

    return(
        <div className="max-w-[128rem] w-full px-[1.6rem] flex flex-col items-center sm:px-[6.4rem] lg:px-[12.8rem]">

            <div className="w-full mt-[2.4rem] font-bold text-[3.6rem] md:mt-[5.6rem] xl:mt-[6.4rem]">REVIEW</div>

            <div className="w-full mt-[2rem] gap-x-[2rem] gap-y-[2rem] grid grid-cols-1 place-items-center mb-[6.4rem] md:gap-y-[3.2rem] lg:gap-y-[6.4rem] md:mb-[12.8rem] md:grid-cols-2 xl:grid-cols-3">

                {!isLoading && reviewData.docs.map((doc, index) => <ReviewCard key={index} thumbanil={doc.data()["thumbnail"]} title={doc.data()["title"]} author={doc.data()["author"]} type={doc.data()["type"]}  stars={doc.data()["stars"]} link={doc.data()["source"]} />)}

            </div>

        </div>
    );
}

const ReviewCard = ({thumbnail, title, author, type, stars, link}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [authorInfo, setAuthorInfo] = useState()
    const [reviewType, setReviewType] = useState({"color":"#000", "text":"unknown"})

    useEffect(() => {

        const getAuthorInfo = async() => {
            const querySnapshot = await getDoc(doc(db, "users", author));
            setAuthorInfo(querySnapshot);
            setIsLoading(false);
        }

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
        getAuthorInfo()

    }, [])
    

    return (
        <div className="w-[28.8rem] h-[38.6rem] bg-neutral-800 rounded-[0.8rem] flex flex-col">

            {!isLoading && <> <img src={thumbnail} alt="thumbanil" className="w-full aspect-video rounded-t-[0.8rem]" />

            <div className="w-full px-[1.6rem] flex flex-col">

                <div className="font-medium text-[2.4rem] mt-[2.4rem]">{title}</div>

                <div className="text-[1.6rem] text-neutral-200 leading-[1.5] mt-[0.8rem] flex items-center">
                    
                    by
                    <img className="ml-[0.8rem] mr-[0.4rem] w-[1.6rem] h-[1.6rem] rounded-[0.4rem]" src={authorInfo.data()["profile"]} alt="author profile" />
                    {authorInfo.data()["name"]}

                </div>

                <div className="w-full flex justify-between items-center mt-[1.2rem]">
                    
                    <div style={{background: reviewType["color"]}} className="px-[0.8rem] py-[0.5rem] flex justify-center items-center rounded-[0.4rem]">
                        <div className="bg-neutral-100 rounded-[50%] w-[0.8rem] h-[0.8rem] mr-[0.4rem]"></div>
                        <div className="text-h10 font-medium">{reviewType["text"]}</div>
                    </div>

                    <div className="flex items-end text-[1.6rem] text-neutral-200">{stars} <span className="cursor-pointer text-[2.4rem] ml-[0.2rem]"><FaRegStar/></span></div>

                </div>

                <NavLink to={link} className="w-full h-[4.7rem] my-[2rem] rounded-[0.8rem] font-medium text-[1.6rem] bg-primary-600 hover:bg-primary-500 flex justify-center items-center">START</NavLink>
            
            </div></>}

        </div>
    )
}