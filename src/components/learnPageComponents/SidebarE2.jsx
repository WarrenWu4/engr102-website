import "./Sidebar.css";
import { useState, useEffect } from "react";

export default function SidebarE2(props) {

    const [bg, SetBg] = useState("var(--darkerblue)");

    const activeLesson = () => {
        props.SetLesson(props.objective);
        SetBg("var(--secondary80)");
    }

    useEffect(() => {
        if (props.lesson != null) {
            if (props.lesson.title != props.objective.title) {
                SetBg("var(--darkerblue");
            }
        }
    }, [props.lesson])


    return (
        <div className='learn-lesson-block' style={{display:props.show, color:bg}} onClick={activeLesson}>
            <div className='learn-circle-icon' style={{borderColor: bg}}></div>
            {props.objective.title}
        </div>
    )
}