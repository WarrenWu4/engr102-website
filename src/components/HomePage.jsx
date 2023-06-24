import { NavLink } from "react-router-dom";
import { useRef, useState } from "react";
import { GoLightBulb } from "react-icons/go";
import hero from "/hero-img.svg";



export default function HomePage() {

    return(
        <div className="w-full px-[1.6rem] flex flex-col items-center">

            <GoLightBulb className="absolute top-[12rem] left-[20rem] rotate-180 text-h6" id="light"/>

            <img src={hero} alt="hero-img" className="w-[28.8rem] h-[25.4rem] mt-[2.4rem]"/>

            <div className="w-full font-bold text-h3 leading-[105%] text-center mt-[2.4rem]">engr102 made <span className="text-primary-500">simple</span></div>

            <div className="w-full font-medium text-[1.6rem] text-neutral-200 leading-[1.5] text-center mt-[1.6rem]">Skip the fluff, save your time. <span className="font-bold text-primary-500">Improve your grade</span> with the resources we provide.</div>

            <NavLink to="/learn" className="w-full h-[4.8rem] flex justify-center items-center border-[0.3rem] text-primary-500 font-medium text-[1.6rem] mt-[2rem] border-primary-600 rounded-[0.8rem] shadow-get_start">Get Started</NavLink>

            <Terminal />

        </div>
    );
}

const Terminal = () => {

    const userIn = useRef();
    const [compOut, setCompOut] = useState("")

    const handleSubmit = (e) => {
        if (e.key === "Enter") {
            e.preventDefault()
            const command = userIn.current.value.toLowerCase();

            if (command === "help") {
                 setCompOut(<div>
                        [command] : [description]<br/>
                        clear : clears the terminal<br/>
                        still working on it...
                    </div>);
            }
            else if (command === "clear") {
                setCompOut("");
            }
            else {
                setCompOut("invalid command, please type help to see valid commands")
            }

            userIn.current.value = "";
        }
    }



    return (
        <div className="w-full min-h-[4.8rem] bg-[black] rounded-[0.8rem] p-[1.6rem] mt-[5.6rem]">
            <form className="w-full flex [&>*]:font-medium [&>*]:text-[1.6rem]">

                <label className="mr-[0.8rem]">&gt;_</label>
                <input type="text" onKeyDown={(e) => handleSubmit(e)} ref={userIn} placeholder="type help to see commands" className="w-full placeholder:italic placeholder:text-neutral-500 bg-[transparent]"/>

            </form>
        
            <output style={{display:(compOut === "") ? "none":"flex"}} className="w-full mt-[2rem] font-medium text-[1.6rem] text-wrap leading-[1.5]">
                {compOut}
            </output>

        </div>
    )
}