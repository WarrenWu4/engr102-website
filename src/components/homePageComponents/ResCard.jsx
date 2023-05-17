import "./ResCard.css";
import { NavLink } from "react-router-dom"

export default function ResCard(props) {
    return (
        <div className="res-card">
            <div className="res-title">
                {props.icon}
                {props.title}
            </div>

            <div className="res-divider"></div>

            <ul className="res-points">
                <li>{props.b1}</li>
                <li>{props.b2}</li>
                <li>{props.b3}</li>
                <li>{props.b4}</li>
            </ul>

            <NavLink className="res-btn" to={props.path}>Start</NavLink>
        </div>

    )
}