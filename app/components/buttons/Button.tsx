import React from 'react'
import Link from 'next/link'
import classes from "./Button.module.css"

interface btnProps {
    link: string
    btnText: string
    target: string
}

export const Button = ({ link, btnText, target }: btnProps) => {
  return (
    <Link className={classes.liveLink} target={target} href={link}>{btnText}</Link>
  )
}
