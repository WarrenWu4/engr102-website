import "./FaqCard.css";
import { FaAngleDown } from 'react-icons/fa'
import { useState } from "react";

export default function FaqCard(props) {

    const [show, setShow] = useState("none");
    const showAnswer = (() => {
        if (show === "none") {
            setShow("flex");
        }
        else {
            setShow("none");
        }
    })
    
    return (
        <div className="faq-card">
            <div className="faq-q">
                {props.question}
                <div onClick={showAnswer}><FaAngleDown/></div>
            </div>
            <div style={{display: show}} className="faq-a">
                {props.answer}
            </div>
        </div>
    )
}