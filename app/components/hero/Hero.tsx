"use client"
import React, { useRef, useLayoutEffect, useEffect, useState } from 'react'
import classes from "./Hero.module.css"
import Link from 'next/link'
import gsap from 'gsap'
// import { TextPlugin } from 'gsap/dist/TextPlugin';
// gsap.registerPlugin(TextPlugin);
// import { gsap, Power3 } from 'gsap'


export const Hero = () => {

    let fullname = React.useRef<HTMLHeadingElement>(null)
    const standfirst = React.useRef<HTMLParagraphElement>(null)
    const name = "RAF"
    const surname = "DI MARTINO"


    useEffect(() => {
        let nameReveal = gsap.timeline()
        nameReveal.fromTo(".animation",
            {
                autoAlpha: 0,
            },
            {
                autoAlpha: 1,
                delay: 0,
                ease: "power3.inOut",
                stagger: {
                    each: 0.04,                    
                }
            }
        )
    }, [])

    useEffect(() => {
        gsap.fromTo(
            standfirst.current,
            {
                autoAlpha: 0,
            },
            {
                autoAlpha: 1,
                duration: 1,
                ease: "power2.in",
                delay: 1
            }
        )
    }, [])

    return (
        <section className={`${classes.heroSection}`}>
            <h1 className={classes.nameWrapper}>
                <div className="xs:pr-5 md:pr-10">
                {
                    name.split("").map((letter, i) => {
                        return letter === " " ? <span key={i} className={`${classes.name} animation`} >&nbsp;</span> : <span key={i} className={`${classes.name} animation`}>{letter}</span>
                    })
                }
                </div>
                <div>
                {
                    surname.split("").map((letter, i) => {
                        return letter === " " ? <span key={i} className={`${classes.name} animation`} >&nbsp;</span> : <span key={i} className={`${classes.name} animation`}>{letter}</span>
                    })
                }
                </div>
            </h1>
            <p ref={standfirst} className={`${classes.standfirst}`}>Web Developer with an Art & Design background</p>
        </section>
    )
}
