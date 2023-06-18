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
        ".skillsSectionAnimation",
        {
            autoAlpha: 0,
        },
        {
            autoAlpha: 1,
            duration: 1,
            ease: "power2.in",
            scrollTrigger: {
              trigger: ".skillsSectionAnimation"
            }
        }
    )

    gsap.set(".skillAnimation", { y: 100, opacity: 0});

    ScrollTrigger.batch( ".skillAnimation", {
        onEnter: batch => gsap.to(batch, {y: 0, autoAlpha: 1, stagger: { amount: 1, each: 0.3, from: "random", ease: "power3.inOut" }, delay: 1}),
    })
}, [])

// useEffect(() => {

// }, [])

  return (
    <section className={`${classes.skillsContainer}`}>
      <h2 className={`skillsSectionAnimation`}>SKILLS</h2>
      <p className={`skillsSectionAnimation`}>Technologies I have used in my web development career</p>
      <div className={`${classes.skillWrapper} .skillAnimation`}>
        {skill.map((skill, i) => <Skill  src={skill.src} alt={skill.alt} key={i} tooltip={skill.tooltip} />)}
      </div>
    </section>
  )
}
