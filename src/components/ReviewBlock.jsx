import "../styles/reviewblock.css"

export default function ReviewBlock() {
    return (
        <div className="reviewblock-container">


            <div className="reviewblock-header">
                <div className="reviewblock-profile"></div>
                <div className="reviewblock-bar">
                    <div className="reviewblock-name"></div>
                    <div className="reviewblock-divider"></div>
                </div>
            </div>


            <div className="reviewblock-gallery">
                <div className="reviewblock-left-btn"></div>
                <div className="reviewblock-video-container">
                    <div className="video"></div>
                </div>
                <div className="reviewblock-right-btn"></div>
            </div>


        </div>
    )
}