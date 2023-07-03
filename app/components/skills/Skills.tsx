"use client"
import React, { useEffect } from 'react'
import classes from "./Skills.module.css"
import { Skill } from "./Skill"
import { Button } from '../buttons/Button'
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
        y: 100,
      },
      {
        autoAlpha: 1,
        y: 0 ,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".skillsSectionAnimation",
          toggleActions: "restart none none none",
          // markers: true
        },
        stagger: {
          amount: 1.5
        }
      }
    )
  }, [])

  return (
    <>
      <section className={`${classes.skillsContainer} skillsSectionAnimation`}>
        <h2 >SKILLS</h2>
        <p className='skillSectionTrigger'>Technologies I have used in my web development career</p>
        <div className={`${classes.skillWrapper} `}>
          {skill.map((skill, i) => <Skill src={skill.src} alt={skill.alt} key={i} tooltip={skill.tooltip} />)}
        </div>
        <div className={`${classes.btnWrapper} skillsSectionAnimation`}>
          <Button link="/projects" btnText="Projects" target="" />
          <Button link="/contacts" btnText="Contacts" target="" />
        </div>
      </section>

    </>
  )
}
