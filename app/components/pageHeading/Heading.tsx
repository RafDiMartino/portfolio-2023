"use client"
import React, { useEffect } from 'react'
import classes from "./projectHeading.module.css"
import gsap from 'gsap'

interface headings {
  title: string;
  standfirst: string[];
}

export const ProjectHeading = ({title, standfirst} : headings) => {

  useEffect(() => {

    gsap.fromTo(
      ".fadeInAnimation",
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 0.5,
        ease: "power3.inOut",
        stagger: -0.1
      }
    )
  }, [])

  return (
    <section className={`${classes.headingContainer} fadeInAnimation`}>
      <h1 className={classes.pageHeader}>{title}</h1>
      <div className={classes.standfirst}>
      {standfirst.map((s, i) => <p key={i}>{s}</p>)}
      </div>
    </section>
  )
}