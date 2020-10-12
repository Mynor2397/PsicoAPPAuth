
import React, { useEffect } from 'react'
import Axios from 'axios'
import qs from 'qs'





const Login = (props) => {

  const authentication = async e => {
    e.preventDefault()
    const url = `http://138.197.215.60:4000/login`

    //  const {data: {url}} = await Axios.request({
    //    method: 'get',
    //    url: `http://138.197.215.60:4000/login`
    //  })

    window.location = url

  }

  useEffect(() => {
    // const token =
    //   qs.parse(
    //     props.location.search,
    //     { ignoreQueryPrefix: true }
    //   ).token || localStorage.getItem("token");
    // if (token) {
    //   localStorage.setItem("token", token);

    // } else {
     
    // }
    console.log(props.location.search)
  }, []);

  return (
    <div className="ed-grid mt-8">
      <div className="l-block"></div>
      <div className="m-to-center m-60 lg-30">
        <h1 className="center">Iniciar sesión</h1>
        <form onSubmit={authentication.bind()} >
          <div className="form_item">
            <input type="submit" className="button full" value="Con Google" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
