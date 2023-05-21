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

    const [currPage, SetCurrPage] = useState(0);
    const [maxPage, SetMaxPage] = useState(1);
    const [content, SetContent] = useState(<div className="learn-viewpage-opening">Choose a unit to start learning!</div>)

    useEffect(() => {
        if (props.lesson !== null){
            SetMaxPage(props.lesson.pages.length);
            SetCurrPage(0);
            SetContent(
                <div className="learn-viewpage-content">
                    <div className="learn-viewpage-img" style={{backgroundImage: `url(/learn_pages/${props.lesson.pages[0].img}`}}></div>
                    <div className="learn-viewpage-text">{props.lesson.pages[0].content}</div>
                </div>
            )
        }
    }, [props.lesson])
    
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