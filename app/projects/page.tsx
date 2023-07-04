import React from 'react'
import classes from "./page.module.css"
import Search from '../components/search/Search'
import { ProjectHeading } from '../components/pageHeading/Heading'
import headings from "../data/headings.json"

export const metadata = {
  title: 'Raf Di Martino | Projects',
  description: 'Portfolio site'
}

export default function Page() {

  return (
    <main className={classes.pageContainer}>
      <ProjectHeading title={headings.projects.title} standfirst={headings.projects.standfirst}/>
      <Search />
    </main>
  )
}
