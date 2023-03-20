import * as React from "react";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './style.css';

const HeroesList = ({page}) => {

    const [heroes, setHeros] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    let api = `https://rickandmortyapi.com/api/character/?&name=${searchResults}`;

  const fetchData = () => {
    fetch(api, { method: "GET" })
      .then(async response => {
        const data = await response.json();
        setHeros(data.results)
      })
  };

  useEffect(() => {
    fetchData();
  }, [api]);
    

  const sortHeroes = heroes.sort((a, b) => {
        const nameA = a.name.toUpperCase(); 
        const nameB = b.name.toUpperCase(); 
    
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
  });
    
    if (sortHeroes.length > 8) {
        sortHeroes.length = 8;
    }

  
    const item = sortHeroes.map((item) => {
        let { id, name, image, species } = item;
        return (
            <div className="item">
                <Link
                    style={{textDecoration: "none"}}
                    to ={`${page}${id}`}
                    key={id}
                    >
                    
                        <img src={image} alt="heroimg" className="heroes-img" />
                        <span className="name">{name}</span>
                        <p>{species}</p>             
                </Link>
            </div>
        )
    });
    useEffect(() => {
    const savedValue = localStorage.getItem('myInputValue');
    if (savedValue) {
      setSearchResults(savedValue);
    }
  }, []);

    const handleInputChange = (e) => { 
        setSearchResults(e.target.value)
        localStorage.setItem('myInputValue', searchResults);
        // localStorage.clear();
    }
   
        return (
            <div>
                <header>
                    <img src='/img/logo.jpg' alt="headerlogo" />
                </header>
                <input
                    type="text"
                    value={searchResults}
                    onChange={handleInputChange}
                    placeholder="Find by name..." />   
              
                <div className="d__flex heroes">
                    {item}
                </div>
            
            </div>
        )
}

export default HeroesList;