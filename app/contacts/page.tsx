import React from 'react'
import classes from "./page.module.css"
import { ProjectHeading } from '../components/pageHeading/Heading'
import headings from "../data/headings.json"

export const metadata = {
    title: 'Raf Di Martino | Contacts',
    description: 'Portfolio site',
  }

export default function Page() {
  return (
    <main className={classes.pageContainer}>
      <ProjectHeading title={headings.contacts.title} standfirst={headings.contacts.standfirst}/>
      {/* <div className={classes.contactWrapper}>
        <h1>CONTACT ME</h1>
        <p>You can contact me through the links below or send me a message through the form</p>
        <div className={classes.socialMedia}>
          <SocialMedia />
        </div>
        <div className={classes.formWrapper}>
          <ContactForm />
        </div>
      </div> */}
    </main>
  )
}
