"use client"
import React, { useLayoutEffect, useRef } from 'react'
import classes from "./Skills.module.css"
import { Skill } from "./Skill"
import { Button } from '../buttons/Button'
import skill from "../../data/skills.json"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const Skills = () => {
  const skillsSection = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".skillsSectionAnimation",
        {
          autoAlpha: 0,
          y: 100,
        },
        {
          autoAlpha: 1,
          y: 0,
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
    }, skillsSection)
    return () => ctx.revert();
  }, [])

  return (
    <>
      <section ref={skillsSection} className={`${classes.skillsContainer}`}>
        <div className={`${classes.skillsWrapper} skillsSectionAnimation skillSectionTrigger`}>
          <h2 className='skillsSectionAnimation'>SKILLS</h2>
          <p className='skillsSectionAnimation'>Throughout my web development career, I have gained experience working with a diverse range of technologies and tools.</p>
          <div className={`${classes.skillWrapper}`}>
            {skill.map((skill, i) => <Skill src={skill.src} alt={skill.alt} key={i} tooltip={skill.tooltip} />)}
          </div>
          <div className={`${classes.btnWrapper} skillsSectionAnimation`}>
            <Button link="/projects" btnText="Projects" target="" />
            <Button link="/contact" btnText="Contact" target="" />
          </div>
        </div>
      </section>

    </>
  )
}
