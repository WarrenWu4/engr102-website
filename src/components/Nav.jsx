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
        <div className='nav'>

            <div className='nav-main center'>

                <div className='logo-container center'>
                    <div className='logo bg-default-style'/>
                </div>

                <div className='nav-links center'>

                    <NavLink to="/">Home</NavLink>

                    <NavLink to="/learn">Learn</NavLink>

                    <NavLink to="/labs">Labs</NavLink>

                    <NavLink to="/review">Review</NavLink>

                    <NavLink to="/about">About</NavLink>

                    <div className='separator'></div>

                    <div className='nav-secondary-shrunk'>

                        <NavLink to="/donate">Donate</NavLink>
                        <a href="https://tx.ag/216server" target="_blank" rel="noopener noreferrer">Discord</a>

                    </div>

                </div>

                <div className='nav-ham'>
                    <GiHamburgerMenu onClick={toggleSide}/>
                </div>

            </div> 

            <div className='nav-secondary center'>

                <NavLink to="/donate" className={'center'}>
                    <FaDonate/>
                </NavLink>
            
                <a href="https://tx.ag/216server" target="_blank" rel="noopener noreferrer" className='center'>
                    <FaDiscord/>
                </a>

            </div>

        </div>
    )
}