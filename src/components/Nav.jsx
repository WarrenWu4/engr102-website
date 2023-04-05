import '../styles/nav.css';
import { FaDonate, FaDiscord } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useState} from "react";

export default function Nav() {

    const sideBar = () => {
        if (window.innerWidth <= 641) {
            //sidebar pops out
        }
    }

    return (
        <div className='nav-container'>

            <div className='nav-main'>

                <div className='logo-container' onClick={sideBar}>
                    <div className='logo'/>
                </div>

                <div className='nav-home'>
                    <NavLink to="/">Home</NavLink>
                </div>

                <div className='nav-learn'>
                    <NavLink to="/learn">Learn</NavLink>
                </div>

                <div className='nav-labs'>
                    <NavLink to="/labs">Labs</NavLink>
                </div>

                <div className='nav-review'>
                    <NavLink to="/review">Review</NavLink>
                </div>

                <div className='nav-about'>
                    <NavLink to="/about">About</NavLink>
                </div>

            </div> 

            <div className='nav-secondary'>
                <div className='nav-donate'>
                    <NavLink to="/donate">
                        <FaDonate/>
                    </NavLink>
                </div>
                
                <div className='nav-discord'>
                    <a href="https://tx.ag/216server" target="_blank" rel="noopener noreferrer">
                        <FaDiscord/>
                    </a>
                </div>
            </div>

            <div className='angle-out'>

            </div>

        </div>
    )
}