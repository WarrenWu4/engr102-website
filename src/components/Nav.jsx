import '../styles/nav.css';
import { FaDonate, FaDiscord } from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from 'react-router-dom';

export default function Nav() {

    const toggleSide = () => {
        const show = getComputedStyle(document.documentElement).getPropertyValue('--show-nav');
        if (show === ' flex') {
            document.documentElement.style.setProperty('--show-nav', ' none')
        }
        else {
            document.documentElement.style.setProperty('--show-nav', ' flex')
        }
    }

    return (
        <div className='nav-container'>

            <div className='nav-main'>

                <div className='logo-container'>
                    <div className='logo'/>
                </div>

                <div className='nav-links'>
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

                    <div className='separator'></div>

                    <div className='nav-secondary-shrunk'>
                        <div className='nav-donate'>
                            <NavLink to="/donate">
                                Donate
                            </NavLink>
                        </div>
                        <div className='nav-discord'>
                            <a href="https://tx.ag/216server" target="_blank" rel="noopener noreferrer">
                                Discord
                            </a>
                        </div>
                    </div>

                </div>

                <div className='nav-ham'>
                    <GiHamburgerMenu onClick={toggleSide}/>
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

        </div>
    )
}