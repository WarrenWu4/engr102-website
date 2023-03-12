import '../styles/home.css'
import Nav from '../components/Nav'
import FaqCard from '../components/FaqCard';
// import ScrollBar from '../components/ScrollBar';

export default function Home() {

    const Q_A_LEFT = {
        "How is the course structured?": "idf remember anymore",
        "Is coding fun?": "yes",
        "Other question IDK": "other answer idk"
    }
    const Q_A_RIGHT = {
        "Placeholder text LOL": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "Why do the tests kinda suck?": "honestly not that bad though",
        "How do I fix my grade ;-;?": "not my problem bro"
    }

    let fcL = []
    let fcR = []

    const faqCardsLeft = Object.keys(Q_A_LEFT).forEach(function(key, index) {
        console.log(key, Q_A_LEFT[key]);
        fcL.push(<FaqCard question={key} answer={Q_A_LEFT[key]}/>)
    });
    const faqCardsRight = Object.keys(Q_A_RIGHT).forEach(function(key, index) {
        fcR.push(<FaqCard question={key} answer={Q_A_RIGHT[key]}/>)
    });


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

            {/* add mouse trail effect b/c too boring for big screens */}

            <div className='home-sec-two' >
                <div className='home-sec-two-content'>
                    <div className='title-two'>What is ENGR 102?</div>
                    <div className='text-two'>ENGR 102 is a mandatory course for all incoming engineering majors. The course is all about <span>Python</span> &#40;the programming language not the snake&#41;.</div>
                </div>
            </div>

                
            <div className='home-sec-three'>
                <div className='home-sec-three-content'>
                    <div className='title-three'>Why Python?</div>
                    <div className='text-three'>just check out some of these Python <span>projects</span></div>
                    <div className='py-proj-showcase'>
                        <div className='move-left'></div>
                        <div className='display '></div>
                        <div className='move-right'></div>
                    </div>
                </div>
            </div>

            <div className='home-sec-four'>
                <div className='title-four'>Common FAQs</div>
                <div className='faq-container'>
                    <div className='faq-column'>
                        {fcL}
                    </div>
                    <div className='faq-column'>
                        {fcR}
                    </div>
                </div>
            </div>

        </div>
    );
}