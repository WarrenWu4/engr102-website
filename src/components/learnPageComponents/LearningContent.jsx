import "./LearningContent.css"

export default function LearningContent(props) {
    
    // TODO: fix content responsiveness by setting container to certain vw and vh

    const align = (props.orientation === "normal") ? "row":"column";
    const showImage = (props.pages[props.pageNum].img === "") ? "none": "flex";
    
    // if on first page display welcome img
    let cardOrientation = <div></div>;
    if (props.pageNum === 0) {
        cardOrientation = 
        <div className="learningcontent-container" style={{flexDirection:align}}>
            <div className="learningcontent-img" style={{display:showImage, backgroundImage:`url(../../src/assets/learning_imgs/${props.pages[props.pageNum].img}`, position:"absolute", top: "5rem"}}></div>
            <div className="learningcontent-text">{props.pages[props.pageNum].content}</div>
        </div>;
    }
    //otherwise show normal view structure
    else {
        cardOrientation =
        <div className="learningcontent-container" style={{flexDirection:align}}>
            <div className="learningcontent-text" style={{width:"40vw"}}>{props.pages[props.pageNum].content}</div>
            <div className="learningcontent-img" style={{width: "40vw", height:"60vh", display:showImage, backgroundImage:`url(../../src/assets/learning_imgs/${props.pages[props.pageNum].img}`}}></div>
        </div>;
    }

    return (
        <div className="learningcontent-container" style={{flexDirection:align}}>
            {cardOrientation}
        </div>
    )
}