import "../styles/review.css"
import Nav from "../components/Nav"
import ReviewBlock from "../components/ReviewBlock"
import data from "../tas.json"

export default function Review() {

    let reviewBlocks = [];
    data.tas.map((ta) => {
        if(typeof(ta.videos)!="undefined") {
            reviewBlocks.push(<ReviewBlock vid={ta.videos} pic={ta.profilePic} name={ta.name}/>);
        }
    })

    return (
        <div className="review-page">
            <Nav/>
            <div className="review-title">Review Sessions</div>
            {reviewBlocks}
        </div>
    )
}