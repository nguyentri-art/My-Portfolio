import "./index.scss";
import LogoT from "../../../assets/images/T-letter.png";
import { useEffect, useRef } from "react";
import gsap from 'gsap-trial';
import DrawSVGPlugin from "gsap-trial/DrawSVGPlugin";

const Logo = () => {

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin);

        gsap
        .timeline()
        .to(bgRef.current,{
            duration: 1,
            opacity: 1,
        })
        .from(outlineLogoRef.current, {
            drawSVG: 1,
            duration: 10,
        });

        gsap.fromTo(
            solidLogoRef.current,
            {
                opacity:0,
            },
            {
                opacity:1,
                delay:3,
                duration:3,
            }
        );

    },[]);

    return (
        <div className="logo-container" ref={bgRef}>
            <img 
                className="solid-logo"
                ref={solidLogoRef} 
                src={LogoT} 
                alt="T" 
            />
                 <svg 
                    width="218.75" 
                    height="277.539" 
                    viewBox="0 0 218.75 277.539" 
                    xmlns="http://www.w3.org/2000/svg">
                        <g 
                            className="svg-container"  
                            fill="none">
                            <path 
                                ref={outlineLogoRef}
                                d="M 0 29.297 L 0 0 L 218.75 0 L 218.75 29.297 L 125.977 29.297 L 125.977 277.539 L 92.773 277.539 L 92.773 29.297 L 0 29.297 Z"/>
                        </g>
                </svg> 
        </div>
    )
}

export default Logo;