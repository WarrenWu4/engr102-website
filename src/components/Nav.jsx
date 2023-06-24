import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";
import logo from "/gear.png";

export default function Nav() {

    const { pathname } = useLocation();
    const [nav, setNav] = useState({"open":false, "sidebar":"none"});
    const signup = useRef();

    useEffect(() => {
        setNav({"open":false, "sidebar":"none"})
      }, [pathname]);

    const handleNav = () => {
        setNav((nav["open"]) ? 
            {"open":false, "sidebar":"none"}:
            {"open":true, "sidebar":"flex"});
    }

    const handleDialog = () => {
        if (signup.current.open) {
            signup.current.close();
        }
        else {
            signup.current.showModal()
        }
    }
    // ! MAKE SURE TO REMOVE LOCALHOST AS AUTHORIZED DOMAIN IN FIREBASE CONSOLE
    const handleSignIn = async () => {

        const provider = new GoogleAuthProvider();

        try {
            const result = await signInWithPopup(auth, provider)

            const { displayName, email, photoURL, uid } = result.user
            
            console.log(displayName, email, photoURL, uid);
        }
        catch (e) {
            console.log("error", e)
        }
    }

    const handleEmailSignIn = async (e) => {
        e.preventDefault();
        console.log("test")
    }


    return (
        <>
            <div className="w-full h-[5.6rem] px-[1.6rem] mt-[1.6rem] flex justify-between items-center">

                <img src={logo} alt="logo" className="w-[4rem] h-[4rem]"/>

                <CgMenuRight onClick={handleNav} className="cursor-pointer w-[4rem] h-[4rem]"/>

                <div style={{display: nav["sidebar"]}} className="fixed top-0 right-0 w-full h-screen z-[20] bg-neutral-900/60 backdrop-blur-[4rem]">

                    <div className="w-full mt-[2.4rem] flex flex-col items-center ">
                        <IoMdClose onClick={handleNav} className="w-[3.6rem] h-[3.6rem] my-[2.4rem] cursor-pointer"/>
                        <NavLink className="navlink" to="/">Home</NavLink>
                        <NavLink className="navlink" to="/learn">Learn</NavLink>
                        <NavLink className="navlink" to="/review">Review</NavLink>
                        <NavLink className="navlink" to="/about">About</NavLink>
                        <NavLink className="navlink" to="/merch">Merch</NavLink>
                        <button type="button" onClick={handleDialog} className="px-[1.6rem] py-[0.8rem] rounded-[0.4rem] bg-orange-600 font-medium text-h8 mt-[1.6rem]">Sign In</button>
                    </div>

                </div>

            </div>

            {/* signup dialog */}
            <dialog ref={signup} className="fixed top-0 left-0 w-full h-screen max-w-full max-h-screen bg-neutral-900/40 backdrop-blur-[4rem]">

                <div className="p-[1.6rem] bg-neutral-800 rounded-[0.4rem] m-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col">
                    <IoMdClose onClick={handleDialog} className="w-[3.6rem] h-[3.6rem] mb-[1.6rem] cursor-pointer"/>
                    
                    <form onSubmit={handleEmailSignIn}>

                        <button type="submit" className="w-[20rem] h-[4.8rem] bg-orange-900"></button>
                    </form>

                    <button type="button" onClick={handleSignIn} className="text-h8 flex justify-center items-center w-[24rem] h-[4.8rem] rounded-[0.4rem] bg-primary-600">
                        <FcGoogle className="mr-[1.2rem]"/>
                        Sign In With Google
                    </button>
                    <div className="font-semibold text-h8 text-red-300 mt-[1.2rem]">PLEASE USE TAMU EMAIL</div>
                </div>

            </dialog>
        </>
    )
}