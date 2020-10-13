import React from 'react';
import { GoogleLogin } from 'react-google-login';
import {URLI} from '../../config/option'
 
 

const Login = ()=>  {
  
  const responseGoogle = (response) => {
    const {googleId,email,name} = response.profileObj

    const valor = {
      email,
      googleId,
      name
    }

    fetch(`${URLI}auth/google`,{
      method: 'POST',
      body: JSON.stringify(valor)
    })
  .then(rest => rest.json())
  .then(data => {
    console.log(data)
    localStorage.setItem('token', data.token)
    localStorage.setItem('rol', data.rol)
    localStorage.setItem('user', JSON.stringify(data))

    window.location = '/gridcasos'
  })
  .catch(err => console.error(err))
  console.log(response)
  }

  return (
    
      <div className="ed-grid mt-8">
        <div className="l-block s-center">Iniciar Sesión</div>
        <div className="s-center">
          <GoogleLogin
            clientId="180768037000-0b5su8iitafuasfca2vcdntf1pbi8cod.apps.googleusercontent.com"
            buttonText="Inicicar sesión con google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div>
      </div>
 
  )

}

export default Login
