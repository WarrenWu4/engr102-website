import './SidebarUnit.css';
import { FaLockOpen, FaLock } from "react-icons/fa";


export default function SidebarUnit(props) {
    
    const icon = (props.unlock === 1) ? <FaLockOpen/>:<FaLock/>;
    let iconColor = "rgba(246, 70, 98, 1)";
    let unitColor = "rgba(236, 236, 235, 1)";
    let pointStatus = "pointer";
    let bgColor = "#2E383F";
    if (props.unlock === 0) {
        iconColor = "rgba(246, 70, 98, 0.25)";
        unitColor = "rgba(236, 236, 235, 0.25)";
        pointStatus = "default";
    }
    if (props.active === props.num) {
        bgColor = "#F9A828";
    }

    const clickEvent = () => {
        if (props.unlock === 1) {
            props.SetActive(props.num);
        }
    }

    return(
        <a className="unit-container" onClick={clickEvent} style={{backgroundColor:bgColor, cursor:pointStatus}}>
            <div className='icon-container' style={{color:iconColor}}>
                {icon}
            </div>
            <div className='unit-num' style={{color:unitColor}}>
                Unit {props.num}
            </div>
        </a>
    );
}