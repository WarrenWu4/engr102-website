import '../styles/home.css';
import { BiBookOpen, BiVideo, BiWrench } from "react-icons/bi";
import { BsInstagram, BsFillEnvelopeFill } from "react-icons/bs";
import {FaDiscord} from "react-icons/fa"
import { useState } from 'react';
import Nav from '../components/Nav'
import FaqCard from '../components/homePageComponents/FaqCard';
import { NavLink } from 'react-router-dom'

export default function Home() {

    const [show, setShow] = useState("none");

    const showAns = (() => {
        if (show === "none") {
            setShow("flex");
        }
        else {
            setShow("none");
        }
    })

    return(
        <div className='home'>
            <Nav/>
            <div className='home-container'>
                <div className='home-hero-header'><span>Welcome</span> to the one-stop shop for all your engr102 needs.</div>
                <div className='home-hero-subheader'>Take the next step towards becoming a better engineering student</div>
                <a className='home-hero-btn' href="https://tx.ag/216server" target="_blank" rel="noopener noreferrer">Discord</a>
                <div className='home-hero-blob'></div>
            </div>

            <div className='home-divider'></div>

            <div className='home-container'>
                <div className='home-title'>Resources</div>
                <div className='res-cards'>
                    <div className='res-card'>
                        <div className='res-title'>
                            <BiBookOpen/>
                            Learn Topics
                        </div>
                        <div className='res-divider'></div>
                        <ul className='res-points'>
                            <li>Covers all 12 units</li>
                            <li>To-the-point style</li>
                            <li>Extra hints for exams</li>
                            <li>Memes if your into that</li>
                        </ul>
                        <NavLink className='res-btn' to={"/learn"}>Start</NavLink>
                    </div>
                    <div className='res-card'>
                        <div className='res-title'>
                            <BiWrench/>
                            Lab Help
                        </div>
                        <div className='res-divider'></div>
                        <ul className='res-points'>
                            <li>Valuable hints for all labs</li>
                            <li>Step-by-step solutions</li>
                            <li>Think through problems</li>
                            <li>Student led walkthroughs</li>
                        </ul>
                        <NavLink className='res-btn' to={"/labs"}>Start</NavLink>
                    </div>
                    <div className='res-card'>
                        <div className='res-title'>
                            <BiVideo/>
                            Review Videos
                        </div>
                        <div className='res-divider'></div>
                        <ul className='res-points'>
                            <li>Covers a variety of topics</li>
                            <li>Led by TAs and PTs</li>
                            <li>Theory and exam focused</li>
                            <li>Accessible all year</li>
                        </ul>
                        <NavLink className='res-btn' to={"/review"}>Start</NavLink>
                    </div>
                </div>
            </div>

            <div className='home-divider' style={{marginTop: "0.8rem"}}></div>

            <div className='home-container'>
                <div className='home-title'>FAQs</div>
                <div className='faq-cards'>
                    <FaqCard question="How is the course strucutred?" answer="Check the syllabus bruh"/>
                    <FaqCard question="How do I fix my grade ;-;?" answer="Use this website :D"/>
                    <FaqCard question="Are the exams hard?" answer="Not if you a CS major \_(ツ)_/¯. But fr as long as you study you'll be fine"/>
                    <FaqCard question="What is Python?" answer="Google it, that's what the internet is for"/>
                    <FaqCard question="Why do I have to take this class?" answer="Ask the department head"/>
                    <FaqCard question="Is coding fun?" answer="Coding is actually really fun because you can create some really cool applications with just your computer and a bit of knowledge."/>
                </div>
            </div>

            <div className='home-divider' style={{marginTop: "1.2rem"}}></div>

            <div className='footer'>
                <div className='footer-title'>ENGR 102</div>
                <div className='footer-links'>
                    <a className='privacy-policy' href="https://www.google.com" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                    <div className='vertical-divider'></div>
                    <a className='honor-code' href="https://student-rules.tamu.edu/aggiecode/" target="_blank" rel="noopener noreferrer">Honor Code</a>
                </div>
                <div className='footer-socials'>
                    <BsInstagram style={{cursor: "pointer"}}/>
                    <div className='vertical-divider'></div>
                    <FaDiscord style={{cursor: "pointer"}}/>
                    <div className='vertical-divider'></div>
                    <BsFillEnvelopeFill style={{cursor: "pointer"}}/>
                </div>
            </div>
        </div>
    );
}