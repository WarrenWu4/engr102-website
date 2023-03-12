import "../styles/faqcard.css"
import { FaAngleDown } from 'react-icons/fa'
import { useState } from "react";

export default function FaqCard(props) {

    const [show, setShow] = useState("none");
    const [arrowAngle, setArrowAngle] = useState("0deg");
    const showAnswer = (() => {
        if (show === "none") {
            setShow("flex");
            setArrowAngle("180deg");
        }
        else {
            setShow("none");
            setArrowAngle("0deg");
        }
    })

    
    return (
        <div className="faq-card">
            <div className="faq-question-container">
                <div className="faq-question">
                    {props.question}
                </div>
                <div className="faq-icon" onClick={showAnswer} style={{rotate: arrowAngle}}><FaAngleDown/></div>
            </div>
            <div className="faq-answer-container" style={{display: show}}>
                <div className="faq-answer">
                    {props.answer}
                </div>
            </div>
        </div>
    )
}