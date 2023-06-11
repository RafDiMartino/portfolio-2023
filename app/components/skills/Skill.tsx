import React from 'react'
import Image from 'next/image'

interface skillData {
    src: string;
    alt: string;
    key: number;
}

export const Skill = ({ src, alt, key }: skillData) => {

    return (
        <Image width={0} height={0} src={src} alt={alt} key={key} priority={true}/>
    )

}