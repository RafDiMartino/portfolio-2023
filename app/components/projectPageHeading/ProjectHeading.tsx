"use client"
import React, {useEffect} from 'react'
import classes from "./projectHeading.module.css"
import gsap from 'gsap'

export const ProjectHeading = () => {

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
            // delay: 1
          }
        )
      }, [])

    return (
        <div className={`${classes.headingContainer} headingAnimation`}>
            <h1 className={classes.pageHeader}>PROJECTS</h1>
            <div className={classes.standfirst}>
                <p>Here are displayed all my web projects since I have started playing with web technologies.</p>
                <p>Below you can search the by technogy to view only to the projects you are interested in.</p>
            </div>
        </div>
    )
}