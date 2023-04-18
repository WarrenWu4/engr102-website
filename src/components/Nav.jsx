import '../styles/nav.css';
import { FaDiscord } from 'react-icons/fa';
import { RiMoneyDollarCircleFill } from "react-icons/ri"
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import { useEffect, useRef } from "react";

export default function Nav() {

    const ref = useRef(null);
    const refBtn = useRef(null);

    const toggleSide = () => {
        const show = getComputedStyle(document.documentElement).getPropertyValue('--show-nav');
        if (show === ' flex') {
            document.documentElement.style.setProperty('--show-nav', ' none');
        }
        else {
            document.documentElement.style.setProperty('--show-nav', ' flex');
        }
    }

    const newPage = () => {
        document.documentElement.style.setProperty('--show-nav', ' none');
    }

    useEffect(() => {
        const checkExit = e => {
            if (getComputedStyle(document.documentElement).getPropertyValue('--show-nav') === ' flex' && ref.current && !ref.current.contains(e.target) && refBtn.current && !refBtn.current.contains(e.target)) {
                document.documentElement.style.setProperty('--show-nav', ' none');

            }
        }
        document.addEventListener("mousedown", checkExit);

        return () => {
            document.removeEventListener("mousedown", checkExit);
        }
    }, [getComputedStyle(document.documentElement).getPropertyValue('--show-nav')])

    return (
        <div className='nav'>

            <div className='nav-main center'>

                <div className='logo-container center'>
                    <div className='logo bg-default-style'/>
                </div>

                <div className='nav-links center' ref={ref}>

                    <NavLink to="/" onClick={newPage}>Home</NavLink>

                    <NavLink to="/learn" onClick={newPage}>Learn</NavLink>

                    <NavLink to="/labs" onClick={newPage}>Labs</NavLink>

                    <NavLink to="/review" onClick={newPage}>Review</NavLink>

                    <NavLink to="/about" onClick={newPage}>About</NavLink>

                    <div className='separator'></div>

                    <div className='nav-secondary-shrunk'>

                        <NavLink to="/donate" onClick={newPage}>Donate</NavLink>
                        <a  onClick={newPage} href="https://tx.ag/216server" target="_blank" rel="noopener noreferrer">Discord</a>

                    </div>

                </div>

                <div className='nav-ham' ref={refBtn} onClick={toggleSide}>
                    <GiHamburgerMenu/>
                </div>

            </div> 

            <div className='nav-secondary center'>

                <NavLink to="/donate" className={'center'}>
                    <RiMoneyDollarCircleFill/>
                </NavLink>
            
                <a href="https://tx.ag/216server" target="_blank" rel="noopener noreferrer" className='center'>
                    <FaDiscord/>
                </a>

            </div>

        </div>
    )
}