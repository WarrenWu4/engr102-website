import '../styles/learn.css'
import { NavLink } from 'react-router-dom'
import {useState} from "react";
import units from "../units.json";

// components
import Nav from '../components/Nav'
import Sidebar from '../components/learnPageComponents/Sidebar';
import SidebarUnit from '../components/learnPageComponents/SidebarUnit';
import MainContent from '../components/learnPageComponents/MainContent';

export default function Learn() {

    // TODO: use local storage to track which button is active on session

    const [active, SetActive] = useState(0);

    const unitBlocks = units.units.map((unit) => 
        <SidebarUnit num={unit["num"]} unlock={unit["status"]} active={active} SetActive={SetActive}/>
    )

    const mainContent = <MainContent unit={active}/>;

    return(
        <div className='learn-page'>

            <Nav/>

            <div className='learn-container'>

                <div className='learn-title'>Learn Topics</div>

                <Sidebar/>

            </div>

        </div>
        // <div className="learn-page">

        //     <Nav/> 

        //     <div className="learn-title">Learn Topics</div>

        //     <div className='learn-content'>

        //         <div className='learn-sidebar'>
        //             <div className='sidebar-title'>
        //                 <div className='learn-sidebar-left'>
        //                     <RxCube/>
        //                     UNITS
        //                 </div>
        //                 <FaPython/>
        //             </div>
        //             {unitBlocks}
        //         </div>

        //         <div className='learn-main'>
        //             {mainContent}
        //         </div>
                
        //     </div>

        // </div>
    );
}