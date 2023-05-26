import "./Sidebar.css";

// icons
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import { RxCube } from "react-icons/rx";
import { FaPython } from "react-icons/fa";

import units from "../../units.json";

import SidebarE1 from "./SidebarE1";

export default function Sidebar(props) {

    // *all sidebar related elements' styles are in Sidebar.css
    // *sidebar heiarachy based on E(number) 1 === units 2 === lessons

    let unitBlocks = [];
    units.units.map((unit) => {
        unitBlocks.push(<SidebarE1 unlock={unit.status} num={unit.num} SetLesson={props.SetLesson} lesson={props.lesson}/>)
        unitBlocks.push(<div className="learn-divider"></div>)
    })

    return (
    <div className='learn-sidebar'>
        <div className='learn-sidebar-header'>
            <div className='learn-sidebar-header-g1'><FaPython/>UNITS</div>
            <RxCube id="learn-sidebar-collapse"/>
        </div>

        <div className='learn-maindivider'></div>

        <div className='learn-sidebar-b-container'>
            {unitBlocks}
        </div>

    </div>
    )
}