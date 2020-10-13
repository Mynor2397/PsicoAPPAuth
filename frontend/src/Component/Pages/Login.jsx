import React from 'react';
import { GoogleLogin } from 'react-google-login';
 
 

const Login = ()=>  {
  
  const responseGoogle = (response) => {
    console.log(response);
  }

  return (
    
      <div className="ed-grid m-grid-4 mt-8">
        <div className="l-block s-center s-cols-4">Iniciar Sesión</div>
        <div className="s-center s-cols-4">
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
