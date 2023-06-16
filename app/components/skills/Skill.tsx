import React from 'react'
import Image from 'next/image'

interface skillData {
    src: string;
    alt: string;
}

export const Skill = ({ src, alt}: skillData) => {

    return (
        <Image width={0} height={0} src={src} alt={alt} priority={true}/>
    )

}