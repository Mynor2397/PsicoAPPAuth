import React from 'react'
import './Search.scss'

const Search = ({handleSearch}) => {
  return (
    <section className="">
      <input 
        className="search-input" 
        type="search" 
        placeholder="Buscar Pacientes"
        onChange={handleSearch} 
      />
    </section>
  )
}

export default Search