import React from 'react'
import classes from "./Project.module.css"
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../buttons/Button';

interface projectData {
    src: string;
    alt: string;
    title: string;
    date: string;
    repoLink: string;
    projectLink: string;
    description: string;
    playStore: string;
    microsoftStore: string;
    tags: string[];
}

export const Project = ({ src, alt, title, date, tags, repoLink, projectLink, description, playStore, microsoftStore }: projectData) => {

    return (
        <article className={`${classes.projectWrapper}`}>

            <Image priority={true} width={432} height={243} src={src} alt={alt} />
            <div className={classes.contentWrapper}>
                <h2>{title}</h2>
                <p className={classes.date}>{date} with: {tags.map((t, i) => { return <span key={i} className={classes.tag}> {t} </span> })}</p>
                <p>{description}</p>
            </div>
            <div className={classes.linksWrapper}>
                {
                    projectLink === "" ?
                        <></>
                        :
                        <Button link={projectLink} btnText="View Project" target="_blank" />
                }
                {
                    repoLink === "" ?
                        <></>
                        :
                        <Link href={repoLink} target="_blank" aria-label='Github profile link'>
                            <svg width="40" height="40" viewBox="0 0 52 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M26.001 0C11.636 0 0.000976562 11.635 0.000976562 26C0.000976562 37.505 7.44348 47.2225 17.7785 50.6675C19.0785 50.895 19.566 50.115 19.566 49.4325C19.566 48.815 19.5335 46.7675 19.5335 44.59C13.001 45.7925 11.311 42.9975 10.791 41.535C10.4985 40.7875 9.23098 38.48 8.12598 37.8625C7.21598 37.375 5.91598 36.1725 8.09348 36.14C10.141 36.1075 11.6035 38.025 12.091 38.805C14.431 42.7375 18.1685 41.6325 19.6635 40.95C19.891 39.26 20.5735 38.1225 21.321 37.4725C15.536 36.8225 9.49098 34.58 9.49098 24.635C9.49098 21.8075 10.4985 19.4675 12.156 17.6475C11.896 16.9975 10.986 14.3325 12.416 10.7575C12.416 10.7575 14.5935 10.075 19.566 13.4225C21.646 12.8375 23.856 12.545 26.066 12.545C28.276 12.545 30.486 12.8375 32.566 13.4225C37.5385 10.0425 39.716 10.7575 39.716 10.7575C41.146 14.3325 40.236 16.9975 39.976 17.6475C41.6335 19.4675 42.641 21.775 42.641 24.635C42.641 34.6125 36.5635 36.8225 30.7785 37.4725C31.721 38.285 32.5335 39.845 32.5335 42.2825C32.5335 45.76 32.501 48.555 32.501 49.4325C32.501 50.115 32.9885 50.9275 34.2885 50.6675C44.5585 47.2225 52.001 37.4725 52.001 26C52.001 11.635 40.366 0 26.001 0Z" fill="#C09E6B" />
                            </svg>
                        </Link>
                }
                {
                    playStore === "" ?
                        <></>
                        :
                        <Link href={playStore} target="_blank" aria-label='Play store link'>
                            <svg fill="#000000" width="45" height="45px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title>ionicons-v5_logos</title><path d="M48,59.49v393a4.33,4.33,0,0,0,7.37,3.07L260,256,55.37,56.42A4.33,4.33,0,0,0,48,59.49Z" /><path d="M345.8,174,89.22,32.64l-.16-.09c-4.42-2.4-8.62,3.58-5,7.06L285.19,231.93Z" /><path d="M84.08,472.39c-3.64,3.48.56,9.46,5,7.06l.16-.09L345.8,338l-60.61-57.95Z" /><path d="M449.38,231l-71.65-39.46L310.36,256l67.37,64.43L449.38,281C468.87,270.23,468.87,241.77,449.38,231Z" /></svg>
                        </Link>
                }
                {
                    microsoftStore === "" ?
                        <></>
                        :
                        <Link href={microsoftStore} target="_blank" aria-label='Microsoft store link'>
                            <svg width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 3.75V6H2.75C2.33579 6 2 6.33579 2 6.75V18.25C2 19.7688 3.23122 21 4.75 21H19.25C20.7688 21 22 19.7688 22 18.25V6.75C22 6.33579 21.6642 6 21.25 6H16V3.75C16 2.7835 15.2165 2 14.25 2H9.75C8.7835 2 8 2.7835 8 3.75ZM9.75 3.5H14.25C14.3881 3.5 14.5 3.61193 14.5 3.75V6H9.5V3.75C9.5 3.61193 9.61193 3.5 9.75 3.5ZM8 13V9.5H11.5V13H8ZM8 17.5V14H11.5V17.5H8ZM16 13H12.5V9.5H16V13ZM12.5 17.5V14H16V17.5H12.5Z" fill="#212121" />
                            </svg>
                        </Link>
                }
            </div>
        </article>
    )
}