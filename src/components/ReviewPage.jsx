import { useState, useEffect } from "react";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";

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

            <div className="w-full mt-[2.4rem] font-bold text-[3.6rem] md:mt-[5.6rem] xl:mt-[6.4rem] text-center md:text-left">REVIEW</div>

            <div className="w-full mt-[2rem] gap-[3.2rem] grid place-items-center mb-[6.4rem] md:mb-[12.8rem] grid-cols-1 md:grid-cols-wwu">

                {!isLoading && reviewData.docs.map((doc, index) => <ReviewCard key={index} title={doc.data()["title"]} author={{"name":doc.data()["author_name"], "profile":doc.data()["author_profile"]}} type={doc.data()["type"]} link={doc.data()["source"]} />)}

            </div>

        </div>
    );
}

const ReviewCard = ({title, author, type, link}) => {

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
        <>
        <div className="w-[28.8rem] bg-neutral-800 rounded-[0.8rem] flex flex-col">

            <div className="w-full px-[1.6rem] flex flex-col">

                <div className="font-medium text-[2.4rem] mt-[2rem]">{title}</div>

                <div className="w-full flex justify-between items-center">

                    <div className="text-h9 text-neutral-200 leading-[1.5] mt-[0.8rem] flex items-center">
                        by
                        <img className="ml-[0.8rem] mr-[0.4rem] w-[1.6rem] h-[1.6rem] rounded-[0.4rem]" src={author["profile"]} alt="author profile" />
                        {author["name"]}
                    </div>

                    <div className="flex items-center mt-[1.2rem]">
                        
                        <div style={{background: reviewType["color"]}} className="px-[0.8rem] py-[0.4rem] flex justify-center items-center rounded-[0.4rem]">
                            <div className="bg-neutral-100 rounded-[50%] w-[0.8rem] h-[0.8rem] mr-[0.4rem]"></div>
                            <div className="text-h10 font-medium">{reviewType["text"]}</div>
                        </div>

                    </div>

                </div>

                <a href={link} target="_blank" className="w-full h-[4.7rem] my-[2rem] rounded-[0.8rem] font-medium text-[1.6rem] bg-primary-600 hover:bg-primary-400 flex justify-center items-center transition-all duration-[0.4s]">START</a>
            
            </div>

        </div>
        </>
    )
}