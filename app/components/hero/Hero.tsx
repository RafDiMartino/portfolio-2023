"use client"
import React, {useRef, useEffect, useState} from 'react'
import classes from  "./Hero.module.css"
import Link from 'next/link'
import gsap from 'gsap'
// import { gsap, Power3 } from 'gsap'


export const Hero = () => {

    let fullname = React.useRef<HTMLHeadingElement>(null)
    let standfirst = React.useRef<HTMLParagraphElement>(null)



    useEffect(() => {
        gsap.from( 
            fullname.current, {
            duration: 2,
            // y: -500,
            autoAlpha: 0,
            ease: "none",
            delay: 1
        })
    },[fullname])

    useEffect(() => {
        gsap.from( 
            standfirst.current, {
            duration: 2,
            // y: -500,
            autoAlpha: 0,
            ease: "back.out(0.5)",
            delay: 2
        })
    },[standfirst])
    

    return (
        <section className={classes.heroSection}>
            {/* <div className={classes.heroSectionWrapper}> */}
                <h1 ref={fullname} className={`${classes.name}`}>RAF DI MARTINO</h1>
                <p ref={standfirst} className={`${classes.about}`}>Web Developer with an Art & Design background</p>
            {/* </div> */}
        </section>
    )
}
