import "../styles/taocard.css"
import { BsInstagram, BsLinkedin, BsGithub, BsFillEnvelopeFill } from "react-icons/bs"
import {FaDiscord} from "react-icons/fa"

export default function TaoCard(props) {

    // find links to socials else nothing
    // link to profile picture
    const profile_img = (props.pic === "") ? "./src/assets/tao_card_imgs/default.jpg":"src/assets/tao_card_imgs/"+props.pic;

    return (
        <div className="tao-container">
            <div className="tao-card">
                <div className="tao-profile" style={{backgroundImage:`url(${profile_img})`}}><div className="tao-cover">{props.info}</div></div>
                <div className="tao-info">
                    <div className="tao-name">{props.name}</div>
                    <div className="tao-socials">
                        {
                            props.socials.instagram!="" &&
                            <a href={props.socials.instagram} target="_blank" rel="noopener noreferrer"><BsInstagram/></a>      
                        }
                        {
                            props.socials.github!="" &&
                            <a href={props.socials.github} target="_blank" rel="noopener noreferrer"><BsGithub/></a>
                        }
                        {
                            props.socials.linkedin!="" &&
                            <a href={props.socials.linkedin} target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
                        }
                        {
                            props.socials.gmail!=""&&
                            <a href={props.socials.gmail} target="_blank" rel="noopener noreferrer"><BsFillEnvelopeFill/></a>
                        }
                        {
                            props.socials.discord!=""&&
                            <a href={props.socials.discord} target="_blank" rel="noopener noreferrer"><FaDiscord/></a>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}