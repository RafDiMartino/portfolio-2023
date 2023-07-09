"use client"
import React, { useLayoutEffect, useRef } from 'react'
import classes from "./Heading.module.css"
import gsap from 'gsap'

interface headings {
  title: string;
  standfirst: string[];
}

export const ProjectHeading = ({ title, standfirst }: headings) => {
  
  const headingSection = useRef<HTMLElement>(null);
  
  useLayoutEffect(() => {

    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".fadeInAnimation",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 1,
          ease: "power2.inOut",
          // stagger: -0.1
        }
      )
    }, headingSection)

    return () => ctx.revert();
  }, [])

  return (
    <section ref={headingSection} className={`${classes.headingContainer}`}>
      <div className={`${classes.headingWrapper} fadeInAnimation`}>
        <h1 className={classes.pageHeader}>{title}</h1>
        <div className={classes.standfirst}>
          {standfirst.map((s, i) => <p key={i}>{s}</p>)}
        </div>
      </div>
    </section>
  )
}