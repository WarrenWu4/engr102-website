import '../styles/scrollbar.css';
import {TbArrowDown} from 'react-icons/tb'
import { useEffect, useState, useCallback } from 'react';

export default function ScrollBar() {

    // detecting scroll up or down
    const [scrollY, setScrollY] = useState(window.pageYOffset);
    const [rotate, setRotate] = useState(0);
    const [rotateOpp, setRotateOpp] = useState(0)

    const handleScroll = useCallback(
      (e) => {
        const window = e.currentTarget;
        if (scrollY > window.pageYOffset) {
            setRotate(rotate+5); //scrolling up
            setRotateOpp(rotate-5);
        }
        else if (scrollY < window.pageYOffset) {
            setRotate(rotate-5); //scrolling down
            setRotateOpp(rotate+5);
        }
        setScrollY(window.pageYOffset);
      },
      [scrollY],
    );

    useEffect(() => {
        setScrollY(window.pageYOffset);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    let arrowState = (window.pageYOffset < window.innerWidth/2) ? 'block':'none';
    

    return (
        <div className='scroll-container'>
            <div className='scroll-wrapper'>

            <div className='gear-one'>
                <div className='rotator-top'></div>
                <div className='logo' style={{transform: 'rotate('+rotate+'deg)'}}></div>
            </div>

            <div className='gear-two' style={{transform: 'rotate('+rotateOpp+'deg)'}}>
                <div className='rotator-bottom'></div>
                <div className='logo'></div>
            </div>

            <div className='lines'>
                <div className='down-arrow' style={{display: arrowState}}>
                    <TbArrowDown/>
                </div>
            </div>
            </div>
        </div>
    )
}