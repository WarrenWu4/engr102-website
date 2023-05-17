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

    const faqStyles = {
        faqCard: {
            width: props.width,
            display: "flex",
            flexDirection: "column",
            marginBottom: "1.6rem"
        },
        faqQuestionContainer: {
            width: props.width,
            height: "6rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            border: "0.4rem solid #ECECEB",
            borderRadius:"1rem",
        },
        faqQuestion: {
            marginLeft: "1.2rem",
            color: "#ECECEB",
            fontSize: "1.8rem",
            fontFamily: "Inter",
            fontWeight: "700",
        },
        faqIcon: {
            marginRight: "1.2rem",
            cursor: "pointer",
            transform: "translateY(0.5rem)",
            rotate: arrowAngle,
            color: "#ECECEB",
            fontSize: "2.5rem",
        },
        faqAnswerContainer: {
            width: props.width,
            marginTop: "0.5rem",
            border: "0.4rem solid #ECECEB",
            borderRadius: "1rem",
            display: show,
        },
        faqAnswer: {
            color: "#ECECEB",
            fontSize: "1.8rem",
            fontFamily: "Inter",
            fontWeight: "700",
            margin: "1.2rem",
        },
    }
    
    return (
        <div style={faqStyles.faqCard}>
            <div style={faqStyles.faqQuestionContainer}>
                <div style={faqStyles.faqQuestion}>
                    {props.question}
                </div>
                <div onClick={showAnswer} style={faqStyles.faqIcon}><FaAngleDown/></div>
            </div>
            <div style={faqStyles.faqAnswerContainer}>
                <div style={faqStyles.faqAnswer}>
                    {props.answer}
                </div>
            </div>
        </div>
    )
}