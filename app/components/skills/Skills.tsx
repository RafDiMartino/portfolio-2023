"use client"
import React, { useRef, useEffect } from 'react'
import classes from "./Skills.module.css"
import { Skill } from "./Skill"
import { Button } from '../buttons/Button'
import skill from "../../data/skills.json"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const Skills = () => {

  useEffect(() => {
    let skillsReveal = gsap.timeline()
    skillsReveal.to(
      ".skillsSectionAnimation",
      {
        autoAlpha: 1,
        duration: 1,
        delay: 2.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".skillSectionTrigger",
        }
      }
    )
    skillsReveal.to(
      ".skillAnimation",
      {
        autoAlpha: 1,
        ease: "power3.inOut",
        stagger: {
          amount: 1.5
        },
      },
      ">"
    )
    skillsReveal.to(
      ".btnAnimation",
      {
        autoAlpha: 1,
        duration: 1,
        ease: "power2.inOut",
      },
      ">"
    )
  }, [])

  return (
    <>
      <section className={`${classes.skillsContainer} skillsSectionAnimation`}>
        <h2 className='skillSectionTrigger'>SKILLS</h2>
        <p >Technologies I have used in my web development career</p>
        <div className={`${classes.skillWrapper} `}>
          {skill.map((skill, i) => <Skill src={skill.src} alt={skill.alt} key={i} tooltip={skill.tooltip} />)}
        </div>
        <div className={`${classes.btnWrapper} btnAnimation`}>
          <Button link="/projects" btnText="Projects" target="" />
          <Button link="/contacts" btnText="Contacts" target="" />
        </div>
      </section>

    </>
  )
}
