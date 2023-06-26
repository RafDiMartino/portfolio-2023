"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import classes from './Search.module.css';
import data from '../../data/projects.json';
import tagsData from '../../data/tags.json';
import { Project2 } from '../project/Project2';

interface Item {
  src: string;
  alt: string;
  title: string;
  date: string;
  repoLink: string;
  projectLink: string;
  description: string;
  tags: string[];
}

const SearchComponent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Item[]>(data);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
    search(e.target.value.toLowerCase());
  };

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    search(searchQuery.toLowerCase());
  };

  const search = (query: string): void => {
    const results = data.filter((item: Item) =>
      item.tags.some((tag) => tag.toLowerCase().includes(query))
    );
    setSearchResults(results);
  };

  const allTags = searchQuery === '' ? tagsData.tags : tagsData.tags;

  return (
    <section className={classes.searchSection}>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
          list="tagsList"
        />
        <datalist id="tagsList">
        {allTags.map((tag: string, i: number) => (
            <option key={i} value={tag} />
          ))}
        </datalist>
        <button type="submit">SEARCH</button>
      </form>
      {searchResults.length > 0 ? (
        <div className={classes.projectsContainer}>
          {searchResults.map((project: Item, i: number) => (
            <Project2
              key={i}
              src={project.src}
              alt={project.alt}
              title={project.title}
              date={project.date}
              tags={project.tags}
              repoLink={project.repoLink}
              projectLink={project.projectLink}
              description={project.description}
            />
          ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </section>
  );
};

export default SearchComponent;