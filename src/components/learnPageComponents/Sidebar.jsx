import "./Sidebar.css";

// icons
import { RxCube } from "react-icons/rx";
import { FaPython } from "react-icons/fa";

// data
import units from "../../units.json";

// components
import SidebarUnit from "./SidebarUnit";

export default function Sidebar() {

    let unitBlocks = [];
    units.units.map((unit) => {
        unitBlocks.push(<SidebarUnit num={unit["num"]} unlock={unit["status"]}/>)
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