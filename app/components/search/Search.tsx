"use client"
import React, { useState, useEffect, useRef } from 'react';
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

  useEffect(() => {

    gsap.fromTo(
      ".projectAnimation",
      {
        autoAlpha: 0,
        y: 100,
      },
      {
        autoAlpha: 1,
        y: 0 ,
        // ease: "back.out(1.7)",
        // ease: "power3.inOut",
        // scrollTrigger: {
        //   trigger: ".projectTrigger",
        //   toggleActions: "restart none none none",
        //   markers: true,
        //   scrub: true,
        //   start: "top center",
        //   end: "bottom center",
        // },
        // stagger: {
        //   each: 30,
        // }
      }
    )
    gsap.fromTo(
      ".project",
      {
        autoAlpha: 0,
        y: 100,
      },
      {
        autoAlpha: 1,
        y: 0 ,
        ease: "back.out(1.7)",
        // ease: "power3.inOut",
        // ease: "steps(1)",
        scrollTrigger: {
          trigger: ".projectTrigger",
          toggleActions: "restart none none none",
          markers: true,
          scrub: true,
          start: "200px bottom",
          end: "bottom bottom",
        },
        stagger: .4
      }
    )
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
    <section className={classes.searchSection}>
      <form className="headingAnimation" onSubmit={handleSearchSubmit}>
        <div className={`${classes.searchInputWrapper} `}>
          <input
            aria-label='search input'
            className=''
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
        <div className={`${classes.projectsContainer} projectTrigger projectAnimation`}>
          {searchResults.map((project, i) => (
            <Project key={i} {...project} />
          ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </section>
  );
};

export default SearchComponent;
