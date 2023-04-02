import "../styles/review.css"
import Nav from "../components/Nav"
import ReviewBlock from "../components/ReviewBlock"
import data from "../tas.json"
import { useState} from "react"
import {IoCloseCircle} from "react-icons/io5"

export default function Review() {
    
    const [video,SetVideo] = useState("");
    const [play, SetPlay] = useState("none");

    let reviewBlocks = [];
    data.tas.map((ta) => {
        if(typeof(ta.videos)!="undefined") {
            reviewBlocks.push(<ReviewBlock vid={ta.videos} pic={ta.profilePic} name={ta.name} SetVideo={SetVideo} SetPlay={SetPlay}/>);
        }
    })


    const closePlayer = () => {
        SetPlay("none");
    }


    return (
        <div className="review-page">
            <Nav/>
            <div className="review-title">Review Sessions</div>
            {reviewBlocks}
            <div className="video-container" style={{display: play}}>
                <div className="video-view">
                    <div className="close" onClick={closePlayer}>
                        <IoCloseCircle/>
                    </div>
                </div>
                {/* <div className="close"></div>
                <video>
                    <source src={video} type="video/mp4"></source>
                    Error loading video
                </video> */}
            </div>
        </div>
    )
}