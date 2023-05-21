import "./Sidebar.css";

// icons
import { RxCube } from "react-icons/rx";
import { FaPython } from "react-icons/fa";

// data
import units from "../../units.json";

// components
import SidebarE1 from "./SidebarE1";

export default function Sidebar(props) {

    // *all sidebar related elements' styles are in Sidebar.css
    // *sidebar heiarachy based on E(number) 1 === units 2 === lessons

    let unitBlocks = [];
    units.units.map((unit) => {
        unitBlocks.push(<SidebarE1 unlock={unit.status} num={unit.num} SetLesson={props.SetLesson}/>)
        unitBlocks.push(<div className="learn-divider"></div>)
    })

    return (
    <div className='learn-sidebar'>
        <div className='learn-sidebar-header'>
            <div className='learn-sidebar-header-g1'><RxCube/>UNITS</div>
            <FaPython/>
        </div>

        <div className='learn-maindivider'></div>

        <div className='learn-sidebar-b-container'>
            {unitBlocks}
        </div>

    </div>
    )
}