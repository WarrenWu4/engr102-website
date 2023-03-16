import '../styles/home.css'
import Nav from '../components/Nav'
import { NavLink } from 'react-router-dom'
// import ScrollBar from '../components/ScrollBar';

export default function Home() {
    return(
        <div className="home-page">

            <Nav/> 

            <div className='hero-container'>
                <div className='hero-left'>
                    <div className='hero-left-wrapper'>
                        <div className='hero-header'>
                            <div className='hero-header-text'>Howdy Aggie Engineers!</div>
                        </div>
                        <div className='hero-subheader'>
                            Welcome to the 102 website, <br></br>
                            Your guide through the 102 course
                        </div>
                        <div className='start-btn'>
                            <NavLink to="/learn">
                                Get Started
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className='hero-right'>
                    <div className='hero-img'></div>
                </div>
            </div>

            {/* add mouse trail effect b/c too boring for big screens */}

        </div>
    );
}