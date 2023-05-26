import "../styles/review.css"
import ReviewBlock from "../components/ReviewBlock"
import { useEffect, useState } from "react"
import {IoCloseCircle} from "react-icons/io5"
import ReactPlayer from "react-player"

import data from "../tas.json"
import Nav from "../components/Nav"
import ReviewVideo from "../components/reviewPageComponents/ReviewVideo"

export default function Review() {
    
    const [vid, SetVid] = useState(null);
    const [showVid, SetShowVid] = useState("none");

    // sort by most recent
    let vidGallery = [];
    data.tas.map((ta) => {
        if (typeof(ta.videos)!="undefined") {
            ta.videos.map((video) => {
                vidGallery.push(
                    <ReviewVideo author={ta.name} title={video.title} pic={ta.profilePic} SetVid={SetVid} vidID={video.link}/>
                )
            })
        }
    })

    useEffect(() => {
        if (vid === null) {
            SetShowVid("none");
        }
        else {
            SetShowVid("flex");
        }
        console.log(vid);
    }, [vid])

    const closeVid = () => {
        SetVid(null);
    }

    return (
        <div className="review-page">

            <Nav/>

            <div className="review-container">
                <div className="review-title">Review Videos</div>

                <div className="review-videos">
                    {vidGallery}
                </div>

            </div>
            
            <div className="review-play-video" style={{display:showVid}}>
                <div className="review-play-video-wrapper">
                    {
                        (vid !== null) &&
                        <ReactPlayer
                            url={"/review_videos/"+vid}
                            controls={true}
                            volume={0.2}
                            width={"100%"}
                            height={"100%"}
                            playing={(showVid === "flex")}
                        />

                    }
                    <IoCloseCircle onClick={closeVid}/>
                </div>
            </div>

        </div>
    )
}