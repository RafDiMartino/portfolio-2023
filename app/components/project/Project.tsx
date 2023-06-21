import React from 'react'
import classes from "./Project.module.css"

interface projectData {
    src: string;
    alt: string;
    title: string;
    repoLink: string;
    projectLink: string;
    description: string;
}

export const Project = ({ src, alt, title, repoLink, projectLink, description }: projectData) => {

    return (
        <div className={classes.projectWrapper}>
            <img src={src} alt={alt} />
            <div className={classes.contentWrapper}>
                <h2>{title}</h2>
                <a href={repoLink}>Github</a>
                <a href={projectLink}>Project link</a>
                <p>{description}</p>
            </div>
        </div>
    )
}