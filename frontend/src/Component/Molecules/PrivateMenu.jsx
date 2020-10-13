import React from 'react'
import { NavLink } from "react-router-dom"
import { GoogleLogout } from 'react-google-login';
import {URLI} from '../../config/option'

const removeToken = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('rol')
  localStorage.removeItem('user')
  window.location = '/login'
}

const PrivateMenu = () => {
  return (
    <ul>
      <li><NavLink exact to="/gridcasos">Casos</NavLink></li>
      <li><NavLink to="/pantient">Pacientes</NavLink></li>
      <li>
        <GoogleLogout
          clientId="180768037000-0b5su8iitafuasfca2vcdntf1pbi8cod.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={removeToken}
        ></GoogleLogout> 
      </li>
    </ul>
  )
}

export default PrivateMenu
