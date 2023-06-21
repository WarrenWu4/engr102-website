import { CgMenuRight } from "react-icons/cg";
import { NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from "react";

export default function Nav() {

    const ref = useRef(null);
    const refBtn = useRef(null);
    const [menu, setMenu] = useState((window.innerWidth > 767) ? "flex":"none");

    useEffect(() => {
        const checkExit = e => {
            if (menu === "flex" && ref.current && !ref.current.contains(e.target) && refBtn.current && !refBtn.current.contains(e.target) && window.innerWidth < 768) {
                setMenu("none");
            }
        }
        const checkSize = () => {
            if (window.innerWidth > 767) {
                setMenu("flex");
            }
            else {
                if (menu === "flex") {
                    setMenu("none");
                }
            }
        }

        window.addEventListener("resize", checkSize);
        document.addEventListener("mousedown", checkExit);

        return () => {
            window.removeEventListener("resize", checkSize);
            document.removeEventListener("mousedown", checkExit);
        }
    })

    return (
        <>
            <div className='max-w-[131.2] w-full h-[10rem] mt-[1.6rem] mb-[6.4rem] flex row justify-between items-center'>
                <img src="./gear.png" alt="logo" className='w-[4rem] h-[4rem] bg-cover animate-rotate' />

                <CgMenuRight className='text-h3 text-neutral-100 cursor-pointer z-[101] lg:hidden' ref={refBtn} onClick={() => setMenu((menu === "flex") ? "none":"flex")}/>

                <div ref={ref} style={{display: menu}} className='flex flex-col justify-start items-center fixed right-0 top-0 w-[40vw] h-screen bg-[rgba(45,45,45,0.8)] backdrop-blur-[2rem] z-[100] text-neutral-100 font-medium text-h8 py-[12rem] lg:w-[auto] lg:h-[auto] lg:flex lg:relative lg:bg-[transparent] lg:p-0 lg:flex-row lg:mr-[3rem] lg:backdrop-filter-none'>

                    <NavLink className={"navlink"} to="/">Home</NavLink>
                    <NavLink className={"navlink"} to="/learn">Learn</NavLink>
                    <NavLink className={"navlink"} to="/review">Review</NavLink>
                    <NavLink className={"navlink"} to="/about">About</NavLink>
                    <NavLink className={"navlink"} to="/merch">Merch</NavLink>

                </div>
            
            </div>
        
        </>
    )
}