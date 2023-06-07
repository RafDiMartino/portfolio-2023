import React from 'react'
import classes from  "./Hero.module.css"
import Link from 'next/link'

export const Hero = () => {
    return (
        <section className={classes.heroSection}>
            <h1 className={classes.name}>RAF DI MARTINO</h1>
        </section>
    )
}
