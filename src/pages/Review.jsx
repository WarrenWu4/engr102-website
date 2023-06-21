// import "../styles/review.css"
// import ReviewBlock from "../components/ReviewBlock"
// import { useEffect, useState } from "react"
// import {IoCloseCircle} from "react-icons/io5"
// import ReactPlayer from "react-player"

// import data from "../tas.json"
// import Nav from "../components/Nav"
// import ReviewVideo from "../components/reviewPageComponents/ReviewVideo"

// export default function Review() {
    
//     const [vid, SetVid] = useState(null);
//     const [showVid, SetShowVid] = useState("none");

//     // sort by most recent
//     let vidGallery = [];
//     data.tas.map((ta) => {
//         if (typeof(ta.videos)!="undefined") {
//             ta.videos.map((video) => {
//                 vidGallery.push(
//                     <ReviewVideo author={ta.name} title={video.title} pic={ta.profilePic} SetVid={SetVid} vidID={video.link}/>
//                 )
//             })
//         }
//     })

//     useEffect(() => {
//         if (vid === null) {
//             SetShowVid("none");
//         }
//         else {
//             SetShowVid("flex");
//         }
//         console.log(vid);
//     }, [vid])

//     const closeVid = () => {
//         SetVid(null);
//     }

//     return (
//         <div className="review-page">

//             <Nav/>

//             <div className="review-container">
//                 <div className="review-title">Review Videos</div>

//                 <div className="review-videos">
//                     {vidGallery}
//                 </div>

//             </div>
            
//             <div className="review-play-video" style={{display:showVid}}>
//                 <div className="review-play-video-wrapper">
//                     {
//                         (vid !== null) &&
//                         <ReactPlayer
//                             url={"/review_videos/"+vid}
//                             controls={true}
//                             volume={0.2}
//                             width={"100%"}
//                             height={"100%"}
//                             playing={(showVid === "flex")}
//                         />

//                     }
//                     <IoCloseCircle onClick={closeVid}/>
//                 </div>
//             </div>

//         </div>
//     )
// }

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { BsArrowDownSquare } from "react-icons/bs";
import { CiStar } from "react-icons/ci"

import Nav from "../components/Nav";

const Tag = ({color, text}) => {

    const [colorText, setColorText] = useState("black");


    useEffect(() => {
        // color code: orange, red, blue
        switch (color) {
            case "red":
                setColorText("#C74B4B");
                break;
            case "blue":
                setColorText("#2B92E6");
                break;
            case "orange":
                setColorText("#E66F4C");
                break;
        }
    }, [])


    return (
        <div className="flex rounded-[0.4rem] py-[0.5rem] px-[0.8rem] w-fit h-[2.4rem] font-medium text-neutral-100 text-h10 items-center" style={{backgroundColor: colorText}}>
            <div className="w-[0.8rem] h-[0.8rem] rounded-[50%] bg-neutral-100 mr-[0.4rem]"></div>
            {text}
        </div>
    )
}

const ReviewCard = ({tag, link, ta, title}) => {

    return (
        <div className="w-[36rem] h-[12rem] rounded-[0.8rem] shadow-review-card bg-neutral-700 cursor-pointer hover:scale-[102%] transition-all duration-[0.4s] flex flex-col justify-center">

                <div className="w-[full] h-[3.6rem] flex mx-[2rem]">

                    <img className="w-[3.6rem] h-[3.6rem] rounded-[0.4rem] bg-center bg-contain mr-[0.8rem]" src={ta["profile"]} alt="TA Picture" />

                    <div className="h-[3.6rem] flex flex-col justify-between">

                        <div className="text-neutral-100 font-bold text-h9 text-ellipsis whitespace-nowrap h-[1.9rem]">
                            {title}
                        </div>

                        <div className="text-neutral-200 font-medium text-h10 text-ellipsis whitespace-nowrap h-[1.4rem]">
                            {ta["name"]}
                        </div>

                    </div>

                </div>

                <div className="w-[full] mx-[2rem] flex justify-between items-center mt-[1.6rem]">
                    <Tag color={tag["color"]} text={tag["text"]} />
                    <CiStar className="text-neutral-100 text-[2.4rem] stroke-[0.1rem]"/>
                </div>

        </div>
    )
}

export default function Review() {

    const [content, setContent] = useState();

    // on load -> populate content with review cards
    useEffect(() => {
         
        const getData = () => {
            // fetches data from firebase backend
            console.log("WIP")

            // loops through content and 
        }

        getData()

    }, [])

    return (
        <div className="max-w-[1440px] w-full px-[1.6rem] md:px-[3.2rem] xl:px-[6.4rem] flex flex-col items-center pb-[10.8rem]">

            <Nav />
            
            <div className="font-bold text-h1 text-neutral-100 flex justify-center">Review Content</div>

            <div className="w-[10rem] h-[0.4rem] bg-neutral-100 mt-[3.2rem] mb-[6.4rem] opacity-20"/>

            <div className="bg-neutral-800 p-[3.2rem] grid grid-cols-1 gap-[3.2rem] place-items-center relative rounded-[0.8rem] rounded-tl-[0] xl:grid-cols-3 lg:grid-cols-2">

                <div className="w-[10.8rem] h-[3.6rem] rounded-t-[0.8rem] bg-neutral-800 left-0 top-[-3.6rem] absolute flex justify-center items-center font-medium text-neutral-100 text-h8"></div>

                <ReviewCard tag={{"color": "red", "text":"review video"}} link={"/"} ta={{"name":"taLily", "profile":"/ta_profile/lily_tang.png"}} title={"Exam 1 Comprehensive Review"}/>
                <ReviewCard tag={{"color": "orange", "text":"practice test"}} link={"/"} ta={{"name":"taLily", "profile":"/ta_profile/lily_tang.png"}} title={"Exam 1 Practice Test 1.1"}/>
                <ReviewCard tag={{"color": "red", "text":"review video"}} link={"/"} ta={{"name":"taLily", "profile":"/ta_profile/lily_tang.png"}} title={"Cute cat"}/>
                <ReviewCard tag={{"color": "blue", "text":"cheat sheet"}} link={"/"} ta={{"name":"taLily", "profile":"/ta_profile/lily_tang.png"}} title={"Matplotlib cheat sheet"}/>
                <ReviewCard tag={{"color": "blue", "text":"cheat sheet"}} link={"/"} ta={{"name":"taLily", "profile":"/ta_profile/lily_tang.png"}} title={"Matplotlib cheat sheet"}/>
                <ReviewCard tag={{"color": "blue", "text":"cheat sheet"}} link={"/"} ta={{"name":"taLily", "profile":"/ta_profile/lily_tang.png"}} title={"Matplotlib cheat sheet"}/>
                <ReviewCard tag={{"color": "blue", "text":"cheat sheet"}} link={"/"} ta={{"name":"taLily", "profile":"/ta_profile/lily_tang.png"}} title={"Matplotlib cheat sheet"}/>
                <ReviewCard tag={{"color": "blue", "text":"cheat sheet"}} link={"/"} ta={{"name":"taLily", "profile":"/ta_profile/lily_tang.png"}} title={"Matplotlib cheat sheet"}/>
                <ReviewCard tag={{"color": "blue", "text":"cheat sheet"}} link={"/"} ta={{"name":"taLily", "profile":"/ta_profile/lily_tang.png"}} title={"Matplotlib cheat sheet"}/>
                <ReviewCard tag={{"color": "blue", "text":"cheat sheet"}} link={"/"} ta={{"name":"taLily", "profile":"/ta_profile/lily_tang.png"}} title={"Matplotlib cheat sheet"}/>
                <ReviewCard tag={{"color": "blue", "text":"cheat sheet"}} link={"/"} ta={{"name":"taLily", "profile":"/ta_profile/lily_tang.png"}} title={"Matplotlib cheat sheet"}/>
                <ReviewCard tag={{"color": "blue", "text":"cheat sheet"}} link={"/"} ta={{"name":"taLily", "profile":"/ta_profile/lily_tang.png"}} title={"Matplotlib cheat sheet"}/>

            </div>

        </div>
    )
}