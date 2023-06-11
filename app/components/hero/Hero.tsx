"use client"
import React, {useRef,useLayoutEffect, useEffect, useState} from 'react'
import classes from  "./Hero.module.css"
import Link from 'next/link'
import gsap from 'gsap'
// import { TextPlugin } from 'gsap/dist/TextPlugin';
// gsap.registerPlugin(TextPlugin);
// import { gsap, Power3 } from 'gsap'


export const Hero = () => {

    let fullname = React.useRef<HTMLHeadingElement>(null)
    let standfirst = React.useRef<HTMLParagraphElement>(null)



    useEffect(() => {

        let nameReveal = gsap.timeline()
        nameReveal.fromTo(".test", 
        {
            autoAlpha: 0,
        },
        {
            autoAlpha: 1,
            duration: 2,
            delay: 1,
            stagger: {
                each: 0.04,
            }
        }
        )

        // gsap.fromTo( 
        //     fullname.current,
        //     {
        //         autoAlpha: 0,
        //     },
        //     {
        //         autoAlpha: 1,
        //         duration: 2,
        //         ease: "none",
        //         delay: .5
        //     }
        // )
    },[])

    useEffect(() => {
        gsap.fromTo( 
            standfirst.current,             
            {
                autoAlpha: 0,
            },
            {
                autoAlpha: 1,
                duration: 1,
                ease: "none",
                delay: 2
            }
        )
    },[])
    

    return (
        <section className={`${classes.heroSection}`}>
            <h1 className={classes.nameWrapper}>
                {
                    "RAF DI MARTINO".split("").map((word, i) => {
                        return word === " " ? <span ref={fullname} key={i} className={`${classes.name} test`} >&nbsp;</span> : <span ref={fullname} key={i} className={`${classes.name} test`}>{word}</span>
                    })
                }
                </h1>
                <p ref={standfirst} className={`${classes.about}`}>Web Developer with an Art & Design background</p>
            
        </section>
    )
}
