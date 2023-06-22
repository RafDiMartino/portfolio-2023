import React from 'react'
import classes from "./Project.module.css"
import Image from 'next/image';

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
            <h2>{title}</h2>
            <Image width={600} height={600} src={src} alt={alt} />
            <div className={classes.contentWrapper}>
                <p>{description}</p>

            </div>
            <div className={classes.linksWrapper}>
                    <a href={projectLink}>Project link</a> 
                    <a href={repoLink}>Github</a>
            </div>
        </div>
    )
}