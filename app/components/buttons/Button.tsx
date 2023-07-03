import React from 'react'
import Link from 'next/link'
import classes from "./Button.module.css"

interface btnProps {
    link: string
    btnText: string
}

export const Button = ({ link, btnText }: btnProps) => {
  return (
    <Link className={classes.liveLink} target="_blank" href={link}>{btnText}</Link>
  )
}
