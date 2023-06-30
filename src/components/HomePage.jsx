import { NavLink, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { BsArrowDownShort } from "react-icons/bs";
import hero from "/hero-img.svg";

export default function HomePage() {

    return(
        <div className="max-w-[128rem] w-full px-[1.6rem] flex flex-col items-center sm:px-[6.4rem] lg:px-[12.8rem]">

            <div className="flex flex-col items-center absolute top-0 left-[46%] translate-x-[-50%] z-[-1]">
                <div className="w-[0.2rem] h-[16rem] bg-neutral-100"/>
                <div className="w-[12rem] aspect-square flex items-center justify-center relative translate-y-[-4rem]">
                    <img className="w-[4.8rem] aspect-square" src="/light.svg" alt="light" />
                    <div className="absolute w-[8rem] aspect-square translate-y-[0.4rem]" id="flash"/>
                </div>
            </div>

            <div className="w-full flex flex-col items-center justify-center mt-[2.4rem] md:flex-row md:mt-[5.6rem] lg:justify-between xl:mt-[6.4rem]">
                <img src={hero} alt="hero-img" className="w-[28.8rem] h-[25.4rem] md:order-2 md:ml-[6.4rem] lg:ml-0 lg:w-[32rem] lg:h-[28.2rem] xl:w-[44rem] xl:h-[38.8rem]"/>

                <div className="flex flex-col md:[&>*]:text-left lg:w-[50%]">
                    <div className="w-full font-bold text-h3 leading-[105%] text-center mt-[3.2rem] md:mt-0 xl:text-h0 lg:text-h1">engr102 made <span className="text-primary-500">simple</span></div>

                    <div className="w-full font-medium text-h9 text-neutral-200 leading-[1.5] text-center mt-[1.6rem] xl:text-h6 lg:text-h7">Skip the bs, save your time. <span className="font-bold text-primary-500">Improve your grade</span> with the resources we provide.</div>

                    <NavLink to="/learn" className="w-full h-[4.8rem] flex justify-center items-center border-[0.3rem] text-primary-500 font-medium text-[1.6rem] mt-[2rem] border-primary-600 rounded-[0.8rem] shadow-get_start md:w-[12.2rem] hover:bg-primary-500 hover:text-neutral-100 transition-all duration-[0.4s]">Get Started</NavLink>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2rem] bg-neutral-800 rounded-[0.8rem] p-[1.6rem] w-full mt-[6.4rem]">
            
                <Faq q="How is the course structured?" a="Please refer your professor's syllabus for the full details. Generally, however, every week there'll be a quiz and lab on a new topic. There will also be a midterm, final, and final project (dates *should be* located in your syllabus)."/>
                <Faq q="How do I fix my grade 😭?" a="The hard truth is to just study hard and don't fall behind. Don't ask me 	&ldquo;how do I fix my grade&rdquo; if it's the last day of school and you have a 60 in the course... 😑 I'm not a fucking magician."/>
                <Faq q="Are the exams hard?" a="Not if you're a CS major 😎. Although as long as you put in effort and go to a couple of review sessions, you can very easily get an A even without this website."/>
                <Faq q="What is Python?" a="A general purpose programming language that's used in a wide variety of areas such as artificial intelligence, data science, and web development. There's a lot of complicated stuff that goes under the hood, but for the purposes of this course we can just ignore them."/>
                <Faq q="Why do I have to take this class?" a="Idfk ask the department head 😑. All jokes aside though, Python is actually a very useful tool even for non-computer science majors since it's great for automating small tasks and dealing with data."/>
                <Faq q="Is coding fun?" a="Yes! 😎 but even if you don't enjoy coding, help102 is designed to make the process of learning how to code as painless as possible."/>
            
            </div>

            <Terminal />

        </div>
    );
}

const Faq = ({q, a}) => {

    const [showAns, setShowAns] = useState(false);

    return (
        <div className="w-full h-fit flex rounded-[0.8rem] bg-neutral-700 p-[1.6rem] font-medium text-h8 leading-[1.5] flex-col cursor-pointer" onClick={() => setShowAns((showAns) ? false : true)}>

            <span className="w-full flex justify-between items-center">{q} <BsArrowDownShort className="text-h6 transition-all duration-[0.4s]" style={{rotate: (!showAns) ? "0deg": "-180deg"}}/></span>

            {showAns && <span className="mt-[1.2rem] flex items-center w-full border-l-4 border-l-green-500 pl-[1.2rem]">{a}</span>}

        </div>
    )
}

const Terminal = () => {

    const userIn = useRef();
    const [compOut, setCompOut] = useState("")
    const nav = useNavigate();

    const getRandomEmoji = () => {
    
        const emojis = ['😀','😃','😄','😁','😆','😅','🤣','😂','🙂','🙃','🫠','😉','😊','😇','🥰','😍','🤩','😘','😗','☺','😚','😙','🥲','😋','😛','😜','🤪','😝','🤑','🤗','🤭','🫢','🫣','🤫','🤔','🫡','🤐','🤨','😐','😑','😶','🫥','😶‍🌫️','😏','😒','🙄','😬','😮‍💨','🤥','😌','😔','😪','🤤','😴','😷','🤒','🤕','🤢','🤮','🤧','🥵','🥶','🥴','😵','😵‍💫','🤯','🤠','🥳','🥸','😎','🤓','🧐','😕','🫤','😟','🙁','☹','😮','😯','😲','😳','🥺','🥹','😦','😧','😨','😰','😥','😢','😭','😱','😖','😣','😞','😓','😩','😫','🥱','😤','😡','😠','🤬','😈','👿','💀','☠','💩','🤡','👹','👺','👻','👽','👾','🤖','😺','😸','😹','😻','😼','😽','🙀','😿','😾','🙈','🙉','🙊']
    
        return emojis[~~(Math.random() * emojis.length)]
    
    } 
    

    const handleSubmit = (e) => {
        if (e.key === "Enter") {
            e.preventDefault()
            const command = userIn.current.value.toLowerCase();

            switch (command) {
                case "help":
                    setCompOut(<div>
                        [command] : [description]<br/>
                        clear : clears the terminal<br/>
                        go learn : navigate to learn page <br/>
                        go review : navigate to review page <br/>
                        go about : navigate to about page <br/>
                        emoji : random emoji <br/>
                        surprise : hehe 😏 <br/>
                        best ta : the best ta(s) <br/>
                        <br/>
                        ping me on discord @warrenwu if you have a suggestion
                    </div>);
                    break;
                case "clear":
                    setCompOut("");
                    break;
                case "go learn":
                    nav("/learn")
                    break;
                case "go review":
                    nav("/review")
                    break;
                case "go about":
                    nav("/about")
                    break;
                case "emoji":
                    setCompOut(getRandomEmoji())
                    break;
                case "surprise":
                    setCompOut("🥳🥳🎉🎉 eat shit fuck face 😊😊")
                    break;
                case "best ta":
                    setCompOut("taLily & taRyan (🐐) according to the 2022 PT Awards Survey Data")
                    break;
                default:
                    setCompOut("invalid command, please type help to see valid commands");
                    break;

            }

            userIn.current.value = "";
        }
    }



    return (
        <div className="max-w-[102.4rem] w-full min-h-[4.8rem] bg-[black] rounded-[0.8rem] p-[1.6rem] mt-[5.6rem] mb-[6.4rem] sm:mt-[6rem] xl:mt-[7.2rem] md:mb-[25.6rem]">
            <form className="w-full flex [&>*]:font-medium [&>*]:text-[1.6rem]">

                <label className="mr-[0.8rem]">&gt;_</label>
                <input type="text" onKeyDown={(e) => handleSubmit(e)} ref={userIn} placeholder="type help to see commands" className="w-full placeholder:italic placeholder:text-neutral-500 bg-[transparent]"/>

            </form>
        
            <output style={{display:(compOut === "") ? "none":"flex"}} className="w-full mt-[2rem] font-medium text-[1.6rem] text-wrap leading-[1.5]">
                {compOut}
            </output>

        </div>
    )
}