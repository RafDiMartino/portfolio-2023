import React from 'react'
import Search from '../search/Search';

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
        <>
            {/* <Search /> */}
            <h1 className="text-white">{title}</h1>
            <img src={src} alt={alt} />
            <a className="text-white" href={repoLink}>Github</a>
            <a className="text-white" href={projectLink}>Project link</a>
            <p>{description}</p>
        </>
    )
}