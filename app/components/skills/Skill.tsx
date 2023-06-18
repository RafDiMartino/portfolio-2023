import React, { useEffect } from 'react'
import Image from 'next/image'
import classes from "./Skills.module.css"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
 
interface skillData {
    src: string;
    alt: string;
    test: string;
}

export const Skill = ({ src, alt, test }: skillData) => {
    useEffect(() => {
        gsap.set(".skillAnimation", { y: 100, opacity: 0});
      
        ScrollTrigger.batch(
            ".skillAnimation",
            {
              start: "-100px bottom",
              onEnter: elements => gsap.to(elements, {y: 0, opacity: 1, stagger: 0.2, delay: 1}),
            }
        )
      }, [])
    return (
        <div className="skillAnimation">
            <div className={classes.tooltip}>{test}</div>
            <Image width={0} height={0} src={src} alt={alt} priority={true} />
        </div>
    )

}