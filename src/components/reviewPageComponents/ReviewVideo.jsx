// *styles are in review
import "../../styles/review.css"
import { BsFillPlayFill } from "react-icons/bs"

export default function ReviewVideo(props) {

    const profile_img = (props.pic === "") ? "/ta_profile/default.jpg":"/ta_profile/"+props.pic;

    const playVid = () => {
        props.SetVid(props.vidID);
    }

    // generate thumbnail

    return (
        <div className="review-video">
            <div className="review-video-title">{props.title}</div>
            <BsFillPlayFill onClick={playVid}/>
            <div className="review-video-author">
                <div className="review-video-author-profile" style={{backgroundImage:`url(${profile_img}`}}></div>
                {props.author}
            </div>
            <div className="review-video-time">2:00:00</div>
        </div>
    )
}