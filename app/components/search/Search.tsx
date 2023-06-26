"use client"
import React, { useState, ChangeEvent, FormEvent, useEffect, useRef } from 'react';
import classes from "./Search.module.css";
import { Project2 } from '../project/Project2';
import data from "../../data/projects.json";
import tagsData from "../../data/tags.json";

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

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Item[]>(data);
  const [tags, setTags] = useState<string[]>(tagsData.tags);
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredTags, setFilteredTags] = useState<string[]>(tagsData.tags);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setShowDropdown(false);
    }
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    filterTags(query);
    setActiveSuggestion(-1);
    setShowDropdown(query.length > 0 || filteredTags.length > 0);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (activeSuggestion >= 0 && activeSuggestion < filteredTags.length) {
        e.preventDefault();
        const selectedTag = filteredTags[activeSuggestion];
        setSearchQuery(selectedTag);
        setShowDropdown(false);
        search(selectedTag.toLowerCase());
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveSuggestion((prev) => (prev < filteredTags.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveSuggestion((prev) => (prev > 0 ? prev - 1 : prev));
    }
  };

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    search(searchQuery.toLowerCase());
  };

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDropdownSelect = (selectedTag: string) => {
    setSearchQuery(selectedTag);
    setShowDropdown(false);
    search(selectedTag.toLowerCase());
  };

  const search = (query: string) => {
    const results = data.filter((item: Item) =>
      item.tags.some((itemTag) => itemTag.toLowerCase().includes(query))
    );
    setSearchResults(results);
  };

  const filterTags = (query: string) => {
    const filtered = tags.filter((tag) =>
      tag.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTags(filtered);
  };

  return (
    <section className={classes.searchSection}>
      <form onSubmit={handleSearchSubmit}>
        <div className={classes.searchInputWrapper}>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={handleDropdownToggle}
            ref={inputRef}
            onKeyDown={handleKeyDown}
          />
          {showDropdown && (
            <ul className={classes.dropdownMenu} ref={dropdownRef}>
              {filteredTags.map((tag, index) => (
                <li
                  key={tag}
                  className={index === activeSuggestion ? `${classes.dropdownItem} ${classes.active}` : classes.dropdownItem}
                  onClick={() => handleDropdownSelect(tag)}
                  tabIndex={-1}
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button type="submit">SEARCH</button>
      </form>
      {searchResults.length > 0 ? (
        <div className={classes.projectsContainer}>
          {searchResults.map((project, i) => (
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