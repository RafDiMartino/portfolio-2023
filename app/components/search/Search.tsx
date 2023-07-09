"use client"
import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import classes from "./Search.module.css";
import { Project } from '../project/Project';
import data from "../../data/projects.json";
import tagsData from "../../data/tags.json";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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
  const dropdownItemsRef = useRef<(HTMLLIElement | null)[]>([]);

  const projectSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (showDropdown) {
      dropdownItemsRef.current[activeSuggestion]?.focus();
    }
  }, [activeSuggestion, showDropdown]);

  useLayoutEffect(() => {

    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".inputAnimation",
        {
          autoAlpha: 0,
          x: -100
        },
        {
          autoAlpha: 1,
          x: 0,
          duration: 1,
          ease: "power2.inOut",
        }
      )
      gsap.fromTo(
        ".projectAnimation",
        {
          autoAlpha: 0,
          y: 100
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power2.inOut",
        }
      )
    }, projectSectionRef)
    return () => ctx.revert();
  }, [])

  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setShowDropdown(false);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    filterTags(query);
    setActiveSuggestion(-1);
    setShowDropdown(query.length > 0 || filteredTags.length > 0);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveSuggestion((prev) => (prev <= 0 ? filteredTags.length - 1 : prev - 1));
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveSuggestion((prev) => (prev >= filteredTags.length - 1 ? 0 : prev + 1));
    } else if (e.key === 'Enter' || e.key === 'Tab') {
      e.preventDefault();
      if (activeSuggestion >= 0 && activeSuggestion < filteredTags.length) {
        const selectedTag = filteredTags[activeSuggestion];
        setSearchQuery(selectedTag);
        setShowDropdown(false);
        search(selectedTag.toLowerCase());
      }
    }
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    search(searchQuery.toLowerCase());
  };

  const handleDropdownToggle = () => {
    setShowDropdown((prevShowDropdown) => !prevShowDropdown);
  };

  const handleDropdownSelect = (selectedTag: string) => {
    setSearchQuery(selectedTag);
    setShowDropdown(false);
    search(selectedTag.toLowerCase());
    setActiveSuggestion(-1);
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

  const handleDropdownKeyDown = (e: React.KeyboardEvent<HTMLUListElement>) => {
    if (e.key === 'Tab') {
      setShowDropdown(false);
    }
  };

  const handleDropdownItemKeyDown = (e: React.KeyboardEvent<HTMLLIElement>, index: number) => {
    if (e.key === 'Tab') {
      setShowDropdown(false);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveSuggestion((prev) => (prev <= 0 ? filteredTags.length - 1 : prev - 1));
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveSuggestion((prev) => (prev >= filteredTags.length - 1 ? 0 : prev + 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const selectedTag = filteredTags[index];
      setSearchQuery(selectedTag);
      setShowDropdown(false);
      search(selectedTag.toLowerCase());
    }
  };

  return (
    <section ref={projectSectionRef} className={`${classes.searchSection}`}>
      <div className={`${classes.searchSectionWrapper} `}>
        <form onSubmit={handleSearchSubmit} className='inputAnimation'>
          <div className={classes.searchInputWrapper}>
            <input
              aria-label='search input'
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={handleDropdownToggle}
              ref={inputRef}
              onKeyDown={handleKeyDown}
            />
            {showDropdown && (
              <ul
                className={classes.dropdownMenu}
                onKeyDown={handleDropdownKeyDown}
                tabIndex={-1}
              >
                {filteredTags.length > 0 ? (
                  filteredTags.map((tag, index) => (
                    <li
                      key={tag}
                      className={`${classes.dropdownItem} ${index === activeSuggestion ? classes.active : ''}`}
                      onClick={() => handleDropdownSelect(tag)}
                      tabIndex={0}
                      onKeyDown={(e) => handleDropdownItemKeyDown(e, index)}
                      ref={(element) => (dropdownItemsRef.current[index] = element)}
                    >
                      {tag}
                    </li>
                  ))
                ) : (
                  <li className={classes.dropdownItem}>No results found.</li>
                )}
              </ul>
            )}
          </div>
          <button type="submit">SEARCH</button>
        </form>
        {searchResults.length > 0 ? (
          <div className={`${classes.projectsContainer} projectAnimation`}>
            {searchResults.map((project, i) => (
              <Project key={i} {...project} />
            ))}
          </div>
        ) : (
          <p className={classes.noResults}>Oops! No results found!</p>
        )}
      </div>
    </section>
  );
};

export default SearchComponent;
