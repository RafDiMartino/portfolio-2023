import React from 'react'
import classes from "./page.module.css"
import Search from '../components/search/Search'

export const metadata = {
  title: 'Raf Di Martino | Projects',
  description: 'Portfolio site',
}

export default function Page() {
  return (
    <main className={classes.pageContainer}>
      <h1 className={classes.pageHeader}>PROJECTS</h1>
      <div>
        <p>Here are displayed all my web projects since I have started to play with web technologies.</p>
        <p>Below you can search the by technogies to have access only to the projects you are interested in.</p>
      </div>
      
      <Search />
    </main>
  )
}
