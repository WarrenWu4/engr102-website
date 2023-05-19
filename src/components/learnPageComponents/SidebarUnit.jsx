import './SidebarUnit.css';

// icons
import { RxTriangleDown } from "react-icons/rx";
import { TiLockClosed, TiLockOpen } from "react-icons/ti";

// data
import units from "../../units.json";

// react
import { useState } from "react";
import { NavLink } from 'react-router-dom';

export default function SidebarUnit(props) {
    
    const [show, setShow] = useState("none");
    const [rot, setRot] = useState("0deg");
    const opac = (props.unlock === 1) ? 1:0.6;
    const curs = (props.unlock === 1) ? "pointer":"";
    const icon = (props.unlock === 1) ? <TiLockOpen id="lock"/>:<TiLockClosed id="lock"/>;

    let lessons = []
    units.units.map((unit) => {
        unit.objectives.map((objective) => {
            if (unit.num === props.num) {
                lessons.push(
                    <NavLink to="/learn/objectives/view" state={{objective}} style={{display:show}}>
                        <div className='learn-lesson-block' style={{display:show}}>
                            <div className='learn-circle-icon'></div>
                            {objective.title}
                        </div>
                    </NavLink>
                )
            }
        })
    })

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

    return(
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