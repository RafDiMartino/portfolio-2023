import React from 'react'
import classes from "./page.module.css"
import { ProjectHeading } from '../components/pageHeading/Heading'
import headings from "../data/headings.json"
import { SocialMedia } from '../components/socialMedia/SocialMedia'
import { ContactForm } from '../components/contactForm/ContactForm'

export const metadata = {
  title: 'Raf Di Martino | Contacts',
  description: 'Portfolio site',
}

export default function Page() {
  return (
    <main className={`${classes.pageContainer}`}>

      <ProjectHeading title={headings.contacts.title} standfirst={headings.contacts.standfirst} />
      <section className={classes.contactsWrapper}>
        <SocialMedia />
        <ContactForm />
      </section>
    </main>
  )
}
