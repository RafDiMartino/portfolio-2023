"use client"
import React, { useEffect } from 'react'
import classes from "./projectHeading.module.css"
import gsap from 'gsap'
// import headings from "../../data/headings.json"

interface headings {
  title: string;
  standfirst: string[];
}

export const ProjectHeading = ({title, standfirst} : headings) => {

  useEffect(() => {

    gsap.fromTo(
      ".headingAnimation",
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 1,
        ease: "power2.inOut",
      }
    )
  }, [])

  return (
    <div className={`${classes.headingContainer} headingAnimation`}>
      <h1 className={classes.pageHeader}>{title}</h1>
      <div className={classes.standfirst}>
      {standfirst.map((s, i) => <p key={i}>{s}</p>)}
      </div>
    </div>
  )
}