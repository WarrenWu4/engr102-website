import "../styles/reviewblock.css"

export default function ReviewBlock(props) {

    const profile_img = (props.pic === "") ? "src/assets/tao_card_imgs/default.jpg":"src/assets/tao_card_imgs/"+props.pic;

    return (
        <div className="reviewblock-container">


            <div className="reviewblock-header">
                <div className="reviewblock-profile" style={{backgroundImage:`url(${profile_img}`}}></div>
                <div className="reviewblock-bar">
                    <div className="reviewblock-name">{props.name}</div>
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