import "../styles/review.css"
import Nav from "../components/Nav"
import ReviewBlock from "../components/ReviewBlock"
import data from "../tas.json"
import React, { useState} from "react"
import {IoCloseCircle} from "react-icons/io5"
import ReactPlayer from "react-player"

export default function Review() {
    
    const [video,SetVideo] = useState("src/assets/review_videos/default.mp4");
    const [play, SetPlay] = useState("none");
    const [vidPlay, SetVidPlay] = useState(false);

    let reviewBlocks = [];
    data.tas.map((ta) => {
        if(typeof(ta.videos)!="undefined") {
            reviewBlocks.push(<ReviewBlock vid={ta.videos} pic={ta.profilePic} name={ta.name} SetVideo={SetVideo} SetPlay={SetPlay} SetVidPlay={SetVidPlay}/>);
        }
    })

    const closePlayer = () => {
        SetPlay("none");
        SetVidPlay(false);
    }

    return (
        <div className="review-page">
            <Nav/>
            <div className="review-title">Review Sessions</div>
            {reviewBlocks}
            <div className="video-container" style={{display: play}}>
                <div className="video-view">
                    <ReactPlayer
                        url={video}
                        controls={true}
                        volume={0.2}
                        width={"100%"}
                        height={"100%"}
                        playing={vidPlay}
                    />
                    <div className="close" onClick={closePlayer}>
                        <IoCloseCircle/>
                    </div>
                </div>
            </div>
        </div>
    )
}