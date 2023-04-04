import "../styles/learnview.css";
import { NavLink, useLocation } from "react-router-dom";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

export default function LearnView() {

    const location = useLocation();
    const {objective} = location.state;
    console.log(objective.title);

    return (
        <div className="basic-page" style={{justifyContent:"center", alignItems:"center"}}>
            <div className="top-ui">
                <div className="learnview-exit-btn"><NavLink to="/learn">Exit</NavLink></div>
                <div className="learnview-page-tracker"></div>
            </div>
            <div className="learnview-content">

            </div>
            <div className="bottom-ui">
                <div className="learnview-left-btn"><FaAngleDoubleLeft/></div>
                <div className="learnview-title">{objective.title}</div>
                <div className="learnview-right-btn"><FaAngleDoubleRight/></div>
            </div>
        </div>
    );
}