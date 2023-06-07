import React from 'react'
import classes from  "./Hero.module.css"
import Link from 'next/link'

export const Hero = () => {
    return (
        <section className={classes.heroSection}>
            {/* <div className={classes.heroSectionWrapper}> */}
                <h1 className={`${classes.name} ${classes.heroSectionWrapper}`}>RAF DI MARTINO</h1>
                <p className={`${classes.about}`}>Web Developer with an Art & Design background</p>
            {/* </div> */}
        </section>
    )
}
