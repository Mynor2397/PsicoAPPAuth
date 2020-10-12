import React from 'react'
import { Link } from 'react-router-dom'

const PagesRol = () => {
  
  const rolUser = localStorage.getItem('rol')

  const removeToken = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('rol')
    window.location = "/login"
  }

  return (
    <div className="ed-grid mt-8">
      {
        rolUser
        ?
        <Link className="button" to="/gridcasos" >Regresar al inicio</Link>
        :
        <p>Contactate con los administradores no tienes permisos s
          <span onClick={() => removeToken()}>Regresar</span>
        </p>
      }
    </div>
  )
}

export default PagesRol
