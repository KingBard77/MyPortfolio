import React, {useRef, useEffect} from "react";
import './transition.css'
import {gsap, Power4} from 'gsap'

function Transition() {
    const trans = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        // First animation: slide the transition in from the left
        tl.to(trans.current, {
            duration: 0,
            x: '0%',
            ease: Power4.easeOut
        });

        // Second animation: slide the transition out to the right after a delay
        tl.to(trans.current, {
            delay: 1,  // adjust the delay as needed
            duration: 1,
            x: '100%',
            ease: Power4.easeIn
        });

    }, []);

    return (
        <div className = "transition-wrapper">
            <div className = "transition-effect" ref={trans}></div>
        </div>
    );
}
export default Transition;



