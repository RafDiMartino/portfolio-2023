import React from 'react'
import { Project } from '../components/project/Project'
import projectData from '../data/projects.json'
import Search from '../components/search/Search'

export const metadata = {
  title: 'Raf Di Martino | Projects',
  description: 'Portfolio site',
}

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between p-24 bg-slate-500">
      <h1 className="text-white">Projects</h1>
      {/* { projectData.map( project =>  <Project src={project.src} alt={project.alt} title={project.title} repoLink={project.repoLink} projectLink={project.repoLink} description={project.description}/> )} */}
      <Search />
    </main>
  )
}
