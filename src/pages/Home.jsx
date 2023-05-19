import '../styles/home.css';
import { BiBookOpen, BiVideo, BiWrench } from "react-icons/bi";
import { BsInstagram, BsFillEnvelopeFill } from "react-icons/bs";
import {FaDiscord} from "react-icons/fa"
import Nav from '../components/Nav'
import ResCard from '../components/homePageComponents/ResCard';
import FaqCard from '../components/homePageComponents/FaqCard';
import Footer from '../components/homePageComponents/Footer';

export default function Home() {

    // Future adjustments:
    // TODO - add more spacing between dividers as screen size increases
    // TODO - resource card spacing is off for 768px
    // TODO - increase height for footer
    // TODO - blend in footer color with gradient to it doesn't look as weird

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
                    <ResCard
                        icon={<BiBookOpen/>}
                        title="Learn Topics"
                        b1 = "Covers all 12 units"
                        b2 = "To-the-point style"
                        b3 = "Extra hints for exams"
                        b4 = "Memes if your into that"
                        path = "/learn"
                    />
                    <ResCard
                        icon={<BiWrench/>}
                        title="Lab Help"
                        b1 = "Valuable hints for all labs"
                        b2 = "Step-by-step solutions"
                        b3 = "Think through problems"
                        b4 = "Student led walkthroughs"
                        path = "/labs"
                    />
                    <ResCard 
                        icon={<BiVideo/>}
                        title="Review Videos"
                        b1 = "Covers a variety of topics"
                        b2 = "Led by TAs and PTs"
                        b3 = "Theory and exam focused"
                        b4 = "Accessible all year"
                        path = "/review"
                    />
                </div>
            </div>

            <div className='home-divider'></div>

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

            <div className='home-divider'></div>

            <Footer social1={<BsInstagram/>} social2={<FaDiscord/>} social3={<BsFillEnvelopeFill/>} />

        </div>
    );
}