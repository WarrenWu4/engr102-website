import "./Sidebar.css";

export default function SidebarE2(props) {

    return (
        <div className='learn-lesson-block' style={{display:props.show}} onClick={() => props.SetLesson(props.objective)}>
            <div className='learn-circle-icon'></div>
            {props.objective.title}
        </div>
    )
}