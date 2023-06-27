import React from 'react'
import classes from "./page.module.css"
import Search from '../components/search/Search'
import { ProjectHeading } from '../components/projectPageHeading/ProjectHeading'

export const metadata = {
  title: 'Raf Di Martino | Projects',
  description: 'Portfolio site'
}

export default function Page() {

  return (
    <main className={classes.pageContainer}>
      <ProjectHeading />
      <Search />
    </main>
  )
}
