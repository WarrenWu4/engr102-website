import "./learnview.css";
import { useState, useEffect } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

export default function LearnView(props) {

    // move left as long as page isn't 0
    const moveLeft = () => {
        if (currPage > 0) {
            SetCurrPage(currPage-1);
        }
    }

    //move right as long as page isn't max index size
    const moveRight = () => {
        if (currPage < maxPage-1) {
            SetCurrPage(currPage+1);
        }
    }

    // *orientation rules (1536px)
    // *don't show image if blank
    // *horizontal: default orientation
    // *vertical: if image width is 1.5x the height or more

    const [currPage, SetCurrPage] = useState(0);
    const [maxPage, SetMaxPage] = useState(1);
    const [content, SetContent] = useState(<div className="learn-viewpage-opening">Choose a unit to start learning!</div>)

    // when navigating to a new lesson
    useEffect(() => {
        if (props.lesson !== null){
            SetMaxPage(props.lesson.pages.length);
            SetCurrPage(0);
            SetContent(
                <div className="learn-viewpage-1">
                    <div className="learn-viewpage-1-img" style={{backgroundImage: `url(/learn_pages/${props.lesson.pages[0].img}`}}></div>
                    <div className="learn-viewpage-1-text">{props.lesson.pages[0].content}</div>
                </div>
            )
        }
    }, [props.lesson])

    // when changing pages within the current lesson
    useEffect(() => {
        if (props.lesson !== null) {

            // first page
            if (currPage === 0) {
                SetContent(
                    <div className="learn-viewpage-1">
                        <div className="learn-viewpage-1-img" style={{backgroundImage: `url(/learn_pages/${props.lesson.pages[currPage].img}`}}></div>
                        <div className="learn-viewpage-1-text">{props.lesson.pages[currPage].content}</div>
                    </div>
                )
            }

            // no image page
            else if (props.lesson.pages[currPage].img === "") {
                SetContent (
                    <div className="learn-viewpage-solo">
                        {props.lesson.pages[currPage].content}
                    </div>
                )
            }

            // img override default orientation
            else {
                // *might have to play around with img dimension values to get the best results
                const new_img = new Image();
                new_img.src = `/learn_pages/${props.lesson.pages[currPage].img}`;
                new_img.onload = () => {
                    let imgWidth = new_img.width;
                    let imgHeight = new_img.height;
                    console.log(imgWidth/imgHeight)
                    if (imgWidth/imgHeight >= 1.7) {
                        SetContent(
                            <div className="learn-viewpage-v">
                                <div className="learn-viewpage-v-img" style={{backgroundImage: `url(/learn_pages/${props.lesson.pages[currPage].img})`}}></div>
                                <div className="learn-viewpage-v-text">{props.lesson.pages[currPage].content}</div>
                            </div>
                        )
                    }
                    else if (imgWidth/imgHeight <= 0.75) {
                        SetContent (
                            <div className="learn-viewpage-h">
                                <div className="learn-viewpage-h-img" style={{backgroundImage: `url(/learn_pages/${props.lesson.pages[currPage].img})`}}></div>
                                <div className="learn-viewpage-h-text">{props.lesson.pages[currPage].content}</div>
                            </div>
                        )
                    }
                    else {
                        SetContent (
                            <div className="learn-viewpage-default">
                                <div className="learn-viewpage-default-img" style={{backgroundImage: `url(/learn_pages/${props.lesson.pages[currPage].img})`}}></div>
                                <div className="learn-viewpage-default-text">{props.lesson.pages[currPage].content}</div>
                            </div>
                        )
                    }
                }
            }

            
        }
    }, [currPage])
    
    return (
        <div className="learn-viewpage-container">

            {content}

            <div className="learn-viewpage-controls">
                <div className="learn-viewpage-btns">
                    <FaAngleDoubleLeft onClick={() => moveLeft()}/>
                    <FaAngleDoubleRight onClick={() => moveRight()}/>
                </div>
                <div className="learn-viewpage-pages">
                    {currPage+1} of {maxPage}
                </div>
            </div>
        </div>
    )
}