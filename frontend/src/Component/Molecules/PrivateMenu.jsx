import React from 'react'
import { NavLink } from "react-router-dom"
import { GoogleLogout } from 'react-google-login';

const removeToken = (response) => {
  // localStorage.removeItem('token')
  // window.location = "/login"
  console.log(response)
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
