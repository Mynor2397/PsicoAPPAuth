import React from 'react'
import './Search.scss'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Search = ({handleSearch}) => {
  return (
    <section className="search-container">
      <input 
        className="search-input" 
        type="search" 
        placeholder="Search"
        onChange={handleSearch} 
      />
      
      <FontAwesomeIcon className="iconss" icon={faSearch}></FontAwesomeIcon>
      
    </section>
    
  )
}

export default Search