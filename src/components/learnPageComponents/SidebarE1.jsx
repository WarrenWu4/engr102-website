import "./Sidebar.css";

// icons
import { RxTriangleDown } from "react-icons/rx";
import { TiLockClosed, TiLockOpen } from "react-icons/ti";

// data
import units from "../../units.json";

// react
import { useState } from "react";

// components
import SidebarE2 from "./SidebarE2";

export default function SidebarE1(props) {

    // variables and behaviors
    const [show, setShow] = useState("none"); //state for showing E2
    const [rot, setRot] = useState("0deg"); //state for rotating triangle upon click
    
    // variable dependent styling
    const opac = (props.unlock === 1) ? 1:0.6;
    const curs = (props.unlock === 1) ? "pointer":"";
    const icon = (props.unlock === 1) ? <TiLockOpen id="lock"/>:<TiLockClosed id="lock"/>;

    // function adjust styling upon showing E2
    const showContent = () => {
        if (props.unlock === 1) {
            if (show === "flex") {
                setShow("none");
                setRot("0deg");
            }
            else {
                setRot("180deg");
                setShow("flex");
            }
        }
    }

    // loads E2 content
    let lessons = []
    units.units.map((unit) => {
        unit.objectives.map((objective) => {
            if (unit.num === props.num) {
                lessons.push(<SidebarE2 objective={objective} show={show} SetLesson={props.SetLesson} lesson={props.lesson}/>)
            }
        })
    })

    return (
        <div className='learn-sidebar-unitblock' style={{opacity: opac}}>
            <div className="learn-sidebar-unitblock-g2">
                <div className='learn-sidebar-unitblock-g1' style={{cursor: curs}} onClick={() => showContent()}><RxTriangleDown style={{rotate: rot, transition: "rotate 250ms"}} id="collapse"/>UNIT {props.num}</div>
                {icon}
            </div>
            <div className='learn-sidebar-unitblock-g3'>
                {lessons}
            </div>
        </div>  
    );

}