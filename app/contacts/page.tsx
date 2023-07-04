import React from 'react'
import classes from "./page.module.css"
import { ProjectHeading } from '../components/pageHeading/Heading'
import headings from "../data/headings.json"
import SocialMedia from '../components/socialMedia/SocialMedia'

export const metadata = {
    title: 'Raf Di Martino | Contacts',
    description: 'Portfolio site',
  }

export default function Page() {
  return (
    <main className={classes.pageContainer}>
      <ProjectHeading title={headings.contacts.title} standfirst={headings.contacts.standfirst}/>
      <SocialMedia />
    </main>
  )
}
