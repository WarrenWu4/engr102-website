import {Link} from "react-router-dom"
import { FaShare } from "react-icons/fa"
import "../styles/WIP.css"

export default function WIP() {
    return (
        <div className="work-in-progress">
            <div className="work-in-progress-msg-1">Oops, this feature hasn't been implemented yet.</div>
            <div className="work-in-progress-msg-2"><Link to="/">Return Home<div className="wip-icon"><FaShare/></div></Link></div>
        </div>
    )
}