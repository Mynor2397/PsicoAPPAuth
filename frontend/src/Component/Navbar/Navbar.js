import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {


  return (
    <header className="ed-header s-bg-grey s-py-2">
      <div className="ed-grid lg-grid-5">
        <div className="s-cross-center s-main-center lg-main-start">
          <img src='./search.svg' className="logo" alt="Psicología"/>
        </div>
        <nav className="nav lg-cols-4 s-cross-center ed-grid full">
          <ul className="menu s-main-distribute lg-to-right s-mb-0 s-pl-0 s-py-1">
            <li className="lg-mr-3">  
              <Link className="link s-column s-cross-center" to="/gridcasos"> 
                <svg className="icon to-lg  s-mb-0">
                  <use href="#home"></use>
                </svg>
                <span>Casos</span>
              </Link>
            </li>
            <li className="lg-mr-3">
              <Link className="link s-column s-cross-center" to="/pantient">
                <svg className="icon to-lg s-mb-0">
                  <use href="#studies"></use>
                </svg>
                <span>Pacientes</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
