import { NavLink } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";

export default function ReviewPage() {

    return(
        <div className="w-full px-[1.6rem] flex flex-col items-center">

            <div className="w-full mt-[2.4rem] font-bold text-[3.6rem]">REVIEW</div>

            <div className="w-full mt-[2rem] gap-[2rem] grid grid-cols-1 place-items-center">

                <ReviewCard thumbnail="/test.jpg" title="OMG EXAM 1 REVIEW" author={{"profile":"/ta_profile/lily_tang.png", "name":"taLily"}} type={{"color":"#C74B4B", "text":"review video"}} stars={20} link="/"/>

            </div>

        </div>
    );
}

const ReviewCard = ({thumbnail, title, author, type, stars, link}) => {
    return (
        <div className="w-[28.8rem] h-[38.6rem] bg-neutral-800 rounded-[0.8rem] flex flex-col">

            <img src={thumbnail} alt="thumbanil" className="w-full aspect-video rounded-t-[0.8rem]" />

            <div className="w-full px-[1.6rem] flex flex-col">

                <div className="font-medium text-[2.4rem] mt-[2.4rem]">{title}</div>

                <div className="text-[1.6rem] text-neutral-200 leading-[1.5] mt-[0.8rem] flex items-center">
                    
                    by
                    <img className="ml-[0.8rem] mr-[0.4rem] w-[1.6rem] h-[1.6rem] rounded-[0.4rem]" src={author["profile"]} alt="author profile" />
                    {author["name"]}

                </div>

                <div className="w-full flex justify-between items-center mt-[1.2rem]">
                    
                    <div style={{background: type["color"]}} className="px-[0.8rem] py-[0.5rem] flex justify-center items-center rounded-[0.4rem]">
                        <div className="bg-neutral-100 rounded-[50%] w-[0.8rem] h-[0.8rem] mr-[0.4rem]"></div>
                        <div className="text-h10 font-medium">{type["text"]}</div>
                    </div>

                    <div className="flex items-end text-[1.6rem] text-neutral-200">{stars} <span className="cursor-pointer text-[2.4rem] ml-[0.2rem]"><FaRegStar/></span></div>

                </div>

                <NavLink to={link} className="w-full h-[4.7rem] my-[2rem] rounded-[0.8rem] font-medium text-[1.6rem] bg-primary-600 hover:bg-primary-500 flex justify-center items-center">START</NavLink>
            
            </div>

        </div>
    )
}