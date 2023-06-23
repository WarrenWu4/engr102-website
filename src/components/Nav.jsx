import { CgMenuRight } from "react-icons/cg";
import { NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import logo from "/gear.png";

export default function Nav() {

    return (
        <>
            <div className="w-full h-[5.6rem] px-[1.6rem] mt-[1.6rem] flex justify-between items-center">

                <img src={logo} alt="logo" className="w-[4rem] h-[4rem]"/>

                <HiOutlineMenuAlt3 className="cursor-pointer w-[4rem] h-[4rem]" />

            </div>

            {/* signup dialog */}
            {/* <dialog open className="absolute top-[50%] left-[50%] w-[20rem] h-[20rem] trasnlate-x-[50%] translate-y-[-50%] bg-[black] z-[100]">
            </dialog> */}
        </>
    )
}