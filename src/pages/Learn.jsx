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

    // TOdo: add learnview for mobile
    // TODO: add style change for active lesson

    const [lesson, SetLesson] = useState(null); //state passed on to sidebar -> sidebare1 -> sidebare2 to get lesson  
    // const [content, SetContent] = useState((window.innerWidth >= 1024) ? 
    //     <div className='learn-wrapper'>
    //         <Sidebar SetLesson={SetLesson}/>
    //         <div className='learn-view'><LearnView lesson={lesson}/></div>
    //     </div>
    //     :
    //     <div className='learn-wrapper'>
    //         <div className='learn-view'><LearnView lesson={lesson}/></div>
    //         <Sidebar SetLesson={SetLesson}/>
    //     </div>
    // );
    // useEffect(() => {
    //     function handleResize() {
    //         if (1024 <= window.innerWidth) {
    //             SetContent (
    //                 <div className='learn-wrapper'>
    //                     <Sidebar SetLesson={SetLesson}/>
    //                     <div className='learn-view'><LearnView lesson={lesson}/></div>
    //                 </div>
    //             )
    //         }
    //         else if (1024 >= window.innerWidth) {
    //             SetContent (
    //                 <div className='learn-wrapper'>
    //                     <div className='learn-view'><LearnView lesson={lesson}/></div>
    //                     <Sidebar SetLesson={SetLesson}/>
    //                 </div>
    //             )
    //         }
    //     }

    //     window.addEventListener('resize', handleResize);
    //     return _ => {window.removeEventListener('resize', handleResize);}
    // })

    return(
        <div className='learn-page'>

            <Nav/>

            <div className='learn-container'>

                <div className='learn-title'>Learn Topics</div>

                <div className='learn-wrapper'>
                    <Sidebar SetLesson={SetLesson}/>
                    <div className='learn-view'><LearnView lesson={lesson}/></div>
                </div>

            </div>

        </div>
    );
}