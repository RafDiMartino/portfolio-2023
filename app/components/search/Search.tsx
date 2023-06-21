"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import classes from "./Search.module.css"
import data from "../../data/projects.json"
import { Project } from '../project/Project';

interface Item {
  src: string;
  alt: string;
  title: string;
  repoLink: string;
  projectLink: string;
  description: string;
  tags: string[];
}

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Item[]>(data);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    search(searchQuery.toLowerCase());
  };

  const search = (query: string) => {
    const results = data.filter((item: Item) =>
      item.tags.some((tag) => tag.toLowerCase().includes(query))
    );
    setSearchResults(results);
  };

  return (
    <section className={classes.searchSection}>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
      {searchResults.length > 0 ? (
        <div className={classes.projectsContainer}>
          {searchResults.map((project, i) => (
            <Project key={i} src={project.src} alt={project.alt} title={project.title} repoLink={project.repoLink} projectLink={project.repoLink} description={project.description}/>
          ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </section>
  );
};

export default SearchComponent;



