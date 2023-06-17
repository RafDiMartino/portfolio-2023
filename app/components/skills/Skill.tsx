import React from 'react'
import Image from 'next/image'
import classes from "./Skills.module.css"
 
interface skillData {
    src: string;
    alt: string;
    test: string;
}

export const Skill = ({ src, alt, test }: skillData) => {

    return (
        <div className="skillAnimation">
            <div className={classes.tooltip}>{test}</div>
            <Image width={0} height={0} src={src} alt={alt} priority={true} />
        </div>
    )

}