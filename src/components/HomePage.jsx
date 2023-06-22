import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";

export default function HomePage() {

    return(
        <div className="max-w-[1440px] w-full px-[1.6rem] md:px-[3.2rem] xl:px-[6.4rem] flex flex-col items-center pb-[10.8rem]">
            
            <div className="flex justify-between items-center w-full">

                <div className="flex flex-col">

                    <div className="text-neutral-100 text-h0 font-bold leading-[7.2rem]">engr102 made simple</div>

                    <div className="text-neutral-200 text-h5 font-medium w-[65.6rem] mt-[1.6rem] mb-[4rem] leading-[3.8rem]">Skip the fluff, save your time. Improve your grade with the resources we provide</div>

                    <div className="flex">

                        <NavLink to="/learn" className="px-[1rem] h-[4.4rem] rounded-[0.4rem] bg-blue-600 font-medium text-neutral-100 text-h8 flex items-center">Get Started</NavLink>
                        <a href="https://tx.ag/216server" className="ml-[3.2rem] px-[1rem] h-[4.4rem] rounded-[0.4rem] border-solid border-blue-600 border-[0.3rem] font-medium text-blue-600 text-h8 flex items-center">Discord</a>

                    </div>

                </div>

                <img className="w-[46.4rem] h-[40.8rem]" src="./hero-img.svg" alt="landing page image" />

            </div>

            <div className="w-full rounded-[0.8rem] bg-neutral-800 p-[3.2rem] mt-[12rem] grid grid-cols-2 gap-[4.8rem]">

                <FAQCard 
                    question="How is the course structured?" 
                    answer="Lorem ipsum dolor sit amet consectetur. Ultrices ipsum consectetur elit mauris commodo curabitur. Aliquam eleifend pellentesque mauris sed pretium magna. Orci tristique et sit condimentum condimentum tortor. Viverra ullamcorper"
                />

            </div>

        </div>
    );
}

const FAQCard = ({question, answer}) => {

    const [showAns, setShowAns] = useState("none");

    return (
        <button type="button" className="relative w-fit flex-col" onClick={() => setShowAns((showAns === "none")?"flex":"none")}>

            <div className="w-[1.6rem] h-[1.6rem] absolute top-0 left-0 border-solid border-neutral-100 border-t-[0.3rem] border-l-[0.3rem] rounded-tl-[0.4rem]"></div>
            <div className="w-[1.6rem] h-[1.6rem] absolute top-0 right-0 border-solid border-neutral-100 border-t-[0.3rem] border-r-[0.3rem] rounded-tr-[0.4rem]"></div>
            <div className="w-[1.6rem] h-[1.6rem] absolute bottom-0 left-0 border-solid border-neutral-100 border-b-[0.3rem] border-l-[0.3rem] rounded-bl-[0.4rem]"></div>
            <div className="w-[1.6rem] h-[1.6rem] absolute bottom-0 right-0 border-solid border-neutral-100 border-b-[0.3rem] border-r-[0.3rem] rounded-br-[0.4rem]"></div>

            <div className="flex flex-col px-[2.4rem] py-[2.6rem]">

                <div className="flex text-neutral-100 font-bold text-h8 items-center">
                    {question} <FaArrowDown className="text-green-100 text-h9 ml-[0.8rem]"/>
                </div>

                <div style={{display: showAns}} className="w-[31.8rem] mt-[1.2rem] text-left font-medium text-neutral-100 text-h9 flex">
                    <div className="rounded-[0.4rem] min-w-[0.3rem] bg-green-100 mr-[1.2rem]"/>
                    {answer}
                </div>

            </div>

        
        </button>
    )
}