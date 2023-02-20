import "../styles/taocard.css"
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs"

export default function TaoCard(props) {

    return (
        <div className="tao-container">
            <div className="tao-card">
                <div className="tao-profile"></div>
                <div className="tao-info">
                    <div className="tao-name">{props.name}</div>
                    <div className="tao-socials">
                        <a href="https://google.com" target="_blank" rel="noopener noreferrer"><BsInstagram/></a>
                        <a href="https://google.com" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
                        <a href="https://google.com" target="_blank" rel="noopener noreferrer"><BsGithub/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}