import React from 'react'
import classes from "./Skills.module.css"
import  { Skill } from "./Skill"
import skill from "../../data/skills.json"

export const Skills = () => {

  return (
    <section className={classes.skillsContainer}>
        <h2>SKILLS</h2>
        <p>Technologies I have used in my web development career</p>
        <div className={classes.skillWrapper}>
        {skill.map((skill, i) => <Skill  src={skill.src} alt={skill.alt} key={i} test={skill.test}/>)}
        </div>
    </section>
  )
}
