import '../styles/learn.css'

// components
import Nav from '../components/Nav'
import Sidebar from '../components/learnPageComponents/Sidebar';
import LearnView from '../components/learnPageComponents/LearnView';

// react
import { useState, useEffect } from "react";

export default function Learn() {

    // TODO: use local storage to track session progression
    // TODO: add video format to learnview

    const [lesson, SetLesson] = useState(null); //state passed on to sidebar -> sidebare1 -> sidebare2 to get lesson  
    
    return(
        <div className='learn-page'>

            <Nav/>

            <div className='learn-container'>

                <div className='learn-title'>Learn Topics</div>

                <div className='learn-wrapper'>
                    <Sidebar SetLesson={SetLesson} lesson={lesson}/>
                    <div className='learn-view'><LearnView lesson={lesson}/></div>
                </div>

            </div>

        </div>
    );
}