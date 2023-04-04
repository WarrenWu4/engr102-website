import "./LearningContent.css"

export default function LearningContent(props) {
    
    const align = (props.orientation === "normal") ? "row":"column";
    const showImage = (props.pages[props.pageNum].img === "") ? "none": "flex";

    return (
        <div className="learningcontent-container" style={{flexDirection:align}}>
            <div className="learningcontent-text">{props.pages[props.pageNum].content}</div>
            <div className="learningcontent-img" style={{display:showImage}}></div>
        </div>
    )
}