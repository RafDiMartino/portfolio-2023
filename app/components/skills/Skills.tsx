"use client"
import React, { useRef, useEffect} from 'react'
import classes from "./Skills.module.css"
import { Skill } from "./Skill"
import skill from "../../data/skills.json"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export const Skills = () => {

  useEffect(() => {
    gsap.fromTo(
        ".skillsSectionAimation",
        {
            autoAlpha: 0,
        },
        {
            autoAlpha: 1,
            duration: 1,
            ease: "power2.in",
            scrollTrigger: {
              trigger: ".skillsSectionAimation"
            }
        }
    )
}, [])

  return (
    <section className={`${classes.skillsContainer}`}>
      <h2 className={`skillsSectionAimation`}>SKILLS</h2>
      <p className={`skillsSectionAimation`}>Technologies I have used in my web development career</p>
      <div className={classes.skillWrapper}>
        {skill.map((skill, i) => <Skill src={skill.src} alt={skill.alt} key={i} test={skill.test} />)}
      </div>
    </section>
  )
}
