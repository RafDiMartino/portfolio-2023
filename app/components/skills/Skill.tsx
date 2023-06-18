import React from 'react'
import Image from 'next/image'
import classes from "./Skills.module.css"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
 
interface skillData {
    src: string;
    alt: string;
    tooltip: string;
}

export const Skill = ({ src, alt, tooltip }: skillData) => {

    return (
        <div className="skillAnimation">
            <div  className={`${classes.tooltip}`}>{tooltip}</div>
            <Image className="skillAnimation" width={0} height={0} src={src} alt={alt} priority={true}/>
        </div>
    )

}