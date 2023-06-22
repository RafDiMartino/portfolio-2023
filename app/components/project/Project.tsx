import React from 'react'
import classes from "./Project.module.css"
import Image from 'next/image';
import Link from 'next/link';

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
            <Image priority={true} width={600} height={600} src={src} alt={alt} />
            <div className={classes.contentWrapper}>
                <p>{description}</p>

            </div>
            <div className={classes.linksWrapper}>
                <Link target="_blank" href={projectLink}>View project</Link>
                <Link href={repoLink} target="_blank" aria-label='Github profile link'>
                    <svg width="40" height="40" viewBox="0 0 52 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M26.001 0C11.636 0 0.000976562 11.635 0.000976562 26C0.000976562 37.505 7.44348 47.2225 17.7785 50.6675C19.0785 50.895 19.566 50.115 19.566 49.4325C19.566 48.815 19.5335 46.7675 19.5335 44.59C13.001 45.7925 11.311 42.9975 10.791 41.535C10.4985 40.7875 9.23098 38.48 8.12598 37.8625C7.21598 37.375 5.91598 36.1725 8.09348 36.14C10.141 36.1075 11.6035 38.025 12.091 38.805C14.431 42.7375 18.1685 41.6325 19.6635 40.95C19.891 39.26 20.5735 38.1225 21.321 37.4725C15.536 36.8225 9.49098 34.58 9.49098 24.635C9.49098 21.8075 10.4985 19.4675 12.156 17.6475C11.896 16.9975 10.986 14.3325 12.416 10.7575C12.416 10.7575 14.5935 10.075 19.566 13.4225C21.646 12.8375 23.856 12.545 26.066 12.545C28.276 12.545 30.486 12.8375 32.566 13.4225C37.5385 10.0425 39.716 10.7575 39.716 10.7575C41.146 14.3325 40.236 16.9975 39.976 17.6475C41.6335 19.4675 42.641 21.775 42.641 24.635C42.641 34.6125 36.5635 36.8225 30.7785 37.4725C31.721 38.285 32.5335 39.845 32.5335 42.2825C32.5335 45.76 32.501 48.555 32.501 49.4325C32.501 50.115 32.9885 50.9275 34.2885 50.6675C44.5585 47.2225 52.001 37.4725 52.001 26C52.001 11.635 40.366 0 26.001 0Z" fill="#C09E6B" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}