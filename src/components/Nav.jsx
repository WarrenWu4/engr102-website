import './nav.css';
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from "react";

export default function Nav() {

    const ref = useRef(null);
    const refBtn = useRef(null);
    const [side, setSide] = useState((window.innerWidth > 767) ? "flex":"none");

    useEffect(() => {
        const checkExit = e => {
            if (side === "flex" && ref.current && !ref.current.contains(e.target) && refBtn.current && !refBtn.current.contains(e.target) && window.innerWidth < 768) {
                setSide("none");
            }
        }
        const checkSize = () => {
            if (window.innerWidth > 767) {
                setSide("flex");
            }
            else {
                if (side === "flex") {
                    setSide("none");
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
        <div className='nav'>
            <div className='logo'></div>
            <div className='menu-btn' ref={refBtn} onClick={() => setSide("flex")}><GiHamburgerMenu/> Menu</div>
            <div className="nav-links" style={{display: side}} ref={ref}>
                <div className='close-btn' onClick={() => setSide("none")}><ImCross/> Close</div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/learn">Learn</NavLink>
                <NavLink to="/labs">Labs</NavLink>
                <NavLink to="/review">Review</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
        </div>
    )
}