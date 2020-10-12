import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const Protected = ({ component: Component, rolUser, ...rest }) => {

  const userLogged = localStorage.getItem('token')
  const rolUserLogged = localStorage.getItem('rol')



  if ( !userLogged ) {
    return <Redirect to="/login" />
  }

  if (rolUserLogged === rolUser ) {
    return <Route {...rest} component={Component} />
  }
  
   
  if(rolUserLogged) {
    return <Route {...rest} component={Component} />
  }
  
  return <Redirect to="/segurity" />
  
}

export default Protected
