import "../styles/reviewblock.css";
import UnitBlock from "./UnitBlock";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import {useRef, useState } from "react";
import VideoThumbnail from "react-video-thumbnail";
import { BsFillPlayFill, BsFillCaretRightFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

export default function ReviewBlock(props) {

    const profile_img = (props.pic === "") ? "../assets/default.jpg":"../assets/"+props.pic;

    // TODO: change color for some units b/c hard to see w/ white text
    const unitNumToColor = {
        1:"#6096B4",
        2:"#93BFCF",
        3:"#D39191",
        4:"#84C051",
        5:"#5F7053",
        6:"#D9ACF5",
        7:"#3E6968",
        8:"#7286D3"
    };

    const handleClick = (link) => () => {
        if (link != "") {
            let path = "../assets/"+link;
            props.SetVideo(path);
        }
        else {
            props.SetVideo("../assets/default.mp4") //default video in case error
        }
        props.SetPlay("flex");
        props.SetVidPlay(true);
    }

    let videoPlaying = (props.vidPlay) ? "none": "flex";

    const scroller = useRef(null);
    const leftBtn = () => {
        scroller.current.scrollLeft -= 350;
    }
    const rightBtn = () => {
        scroller.current.scrollLeft += 350;
    }

    const displayUnits = (id) => () => {
        let vidID = document.getElementById(id);
        let children = vidID.children;
        if (children[0].style.display === "none") {
            children[0].style.display = "flex";
            children[1].style.display = "flex";
            children[2].style.display = "none";
            children[3].style.display = "none";
            children[4].style.display = "none";
        }
        else {
            children[0].style.display = "none";
            children[1].style.display = "none";
            children[2].style.display = "flex";
            children[3].style.display = "flex";
            children[4].style.display = "flex";

        }

    }

    const vidGallery = props.vid.map((v) =>

        <div className="video" style={{display:videoPlaying}}>

            <div className="video-content" id={v.link}>

                <div className="video-content-top">
                    <div className="video-title">{v.title}</div>
                    <div className="video-play-btn"><BsFillPlayFill onClick={handleClick(v.link)} /></div>
                </div>

                <div className="video-content-bottom" onClick={displayUnits(v.link)}>
                    <div className="video-units-btn"><BsFillCaretRightFill/>Units</div>
                    <div className="video-date">{v.date}</div>
                </div>

                <div className="video-units">Units Covered:</div>
                <div className="video-unit-container ">
                    {v.units.map((unit) => 
                        <UnitBlock num={unit} color={unitNumToColor[unit]}/>
                        )}
                </div>
                <div className="video-units-close">
                    <IoClose onClick={displayUnits(v.link)} />
                </div>

            </div>

            <div className="video-thumbnail">
                <VideoThumbnail
                    videoUrl={"../assets/"+v.link}
                />
            </div>

        </div>

    )

    return (
        <div className="reviewblock-container">


            <div className="reviewblock-header">
                <div className="reviewblock-profile bg-default-style" style={{backgroundImage:`url(${profile_img}`}}></div>
                <div className="reviewblock-bar">
                    <div className="reviewblock-name">{props.name}</div>
                    <div className="reviewblock-divider"></div>
                </div>
            </div>


            <div className="reviewblock-gallery">
                <div className="reviewblock-left-btn" onClick={leftBtn}><FaAngleLeft/></div>
                <div className="reviewblock-video-container" ref={scroller}>
                    {vidGallery}
                </div>
                <div className="reviewblock-right-btn" onClick={rightBtn}><FaAngleRight/></div>
            </div>

        </div>
    )
}