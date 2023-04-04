import "../styles/learnview.css";
import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import LearningContent from "../components/learnPageComponents/LearningContent";

export default function LearnView() {

    // TODO: eventually add video support?

    const [pageNum,SetPageNum] = useState(0)
    const location = useLocation();
    const {objective} = location.state;
    const navigate = useNavigate();

    // set to welcome page else set to learning content
    let trueContent = (pageNum === 0) ? <LearningContent pageNum={pageNum} pages={objective.pages} orientation="vertical" />:<LearningContent pageNum={pageNum} pages={objective.pages} orientation="normal"/>;

    // move left as long as page isn't 0
    const moveLeft = () => {
        if (pageNum > 0) {
            SetPageNum(pageNum-1);
        }
    }

    //move right as long as page isn't max index size
    const moveRight = () => {
        if (pageNum < objective.pages.length-1) {
            SetPageNum(pageNum+1);
        }
        if (pageNum === objective.pages.length-1) {
            navigate("/learn");
        }
    }

    return (
        <div className="basic-page" style={{justifyContent:"center", alignItems:"center"}}>
            <div className="top-ui">
                <div className="learnview-exit-btn"><NavLink to="/learn">Exit</NavLink></div>
                <div className="learnview-page-tracker">{pageNum+1} of {objective.pages.length}</div>
            </div>
            <div className="learnview-content">
                {trueContent}
            </div>
            <div className="bottom-ui">
                <div className="learnview-left-btn" onClick={moveLeft}><FaAngleDoubleLeft/></div>
                <div className="learnview-title">{objective.title}</div>
                <div className="learnview-right-btn" onClick={moveRight}><FaAngleDoubleRight/></div>
            </div>
        </div>
    );
}