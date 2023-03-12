import '../styles/home.css'
import Nav from '../components/Nav'
// import ScrollBar from '../components/ScrollBar';

export default function Home() {
    return(
        <div className="home-page">
            <div className='home-sec-one'>
                <Nav/> 
                <div className='hero-container'>

                    <div className='hero-header'>
                    Howdy Aggie Engineers
                    <div className='hero-subheader'>
                        Welcome to the ENGR 102 Website 
                        <br></br>
                        Your <span>guide</span> through the 102 course
                    </div>
                    </div>
                    <div className='hero-img'></div>

                </div>

            </div>

            <div className='home-sec-two'>

            </div>

            {/* add mouse trail effect b/c too boring for big screens */}
{/* 
            <div className='home-sec-two' >
                <div className='home-sec-two-content'>
                    <div className='title-two'>What is ENGR 102?</div>
                    <div className='text-two'>ENGR 102 is a mandatory course for all incoming engineering majors. The course is all about <span>Python</span> &#40;the programming language not the snake&#41;.</div>
                </div>
            </div> */}

                
            {/* <div className='home-sec-three'>
                <div className='home-sec-three-content'>
                    <div className='title-three'>Why Python?</div>
                    <div className='text-three'>just check out some of these Python <span>projects</span></div>
                    <div className='py-proj-showcase'>
                        <div className='move-left'></div>
                        <div className='display '></div>
                        <div className='move-right'></div>
                    </div>
                    <div className='down-arrow-three'>
                        <TbArrowDown/>
                        <TbArrowDown/>
                        <TbArrowDown/>
                    </div>
                </div>
            </div>

            <div className='home-sec-four'>
                <div>Common FAQs</div>
                <div className='down-arrow-four'>
                        <TbArrowDown/>
                        <TbArrowDown/>
                        <TbArrowDown/>
                </div>
            </div> */}

        </div>
    );
}