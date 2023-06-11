
import React from 'react'
import classes from "./Skills.module.css"
import  { Skill } from "./Skill"
import Image from 'next/image'
import skill from "../../data/skills.json"

export const Skills = () => {
  
  return (
    <section className={classes.skillsContainer}>
        <h2>SKILLS</h2>
        <div className={classes.skillWrapper}>
        {skill.map((skill, i) => <Skill  src={skill.src} alt={skill.alt} key={i} />)}
        </div>
    </section>
  )
}
