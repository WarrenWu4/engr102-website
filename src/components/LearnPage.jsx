import { NavLink } from "react-router-dom";

export default function LearnPage() {

    return(
        <div className="w-full px-[1.6rem] flex flex-col items-center">

            <div className="w-full mt-[2.4rem] font-bold text-[3.6rem]">UNITS</div>

            <div className="w-full mt-[2rem] gap-[2rem] grid grid-cols-1 place-items-center">

                <UnitCard thumbnail="/thumbnail_test.png" title="1. Getting Started" desc="Download Visual Studio Code and Python to be able to code. It's more annoying then you think -_-" link="/"/>

            </div>

        </div>
    );
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