import '../styles/learn.css'
import Nav from '../components/Nav'
import { NavLink } from 'react-router-dom'
import {useState} from "react";
import SidebarUnit from '../components/learnPageComponents/SidebarUnit';
import MainContent from '../components/learnPageComponents/MainContent';
import units from "../units.json";

export default function Learn() {
    const [active, SetActive] = useState(0);

    const unitBlocks = units.units.map((unit) => 
        <SidebarUnit num={unit["num"]} unlock={unit["status"]} active={active} SetActive={SetActive}/>
    )

    const mainContent = <MainContent unit={active}/>;

    return(
        <div className="basic-page">

            <Nav/> 

            <div className="basic-title">Learning Topics</div>

            <div className='learn-content'>

                <div className='learn-sidebar'>
                    <div className='sidebar-title'>UNITS</div>
                    {unitBlocks}
                </div>

                <div className='learn-main'>
                    {mainContent}
                </div>
                
            </div>

        </div>
    );
}