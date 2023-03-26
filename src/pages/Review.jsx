import "../styles/review.css"
import Nav from "../components/Nav"
import ReviewBlock from "../components/ReviewBlock"

export default function Review() {


    return (
        <div className="review-page">
            <Nav/>
            <div className="review-title">Review Sessions</div>
            <ReviewBlock/>
        </div>
    )
}