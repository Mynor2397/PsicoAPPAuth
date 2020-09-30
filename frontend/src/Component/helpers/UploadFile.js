import React from 'react'
import { Link } from 'react-router-dom';
import './UploadFile.scss'

const UploadFile = ({
  URL
}) => {

  const handleArchivo = ()=> {
    fetch(URL)
    .then(rest => rest.json())
    .then(data => {
      if(data.ok) {
        window.open(data.url, '_blank');
      }
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="ed-item s-20 m-20">
      <Link to='#' className="button11 btn-link btnFile icon-download" onClick={() => handleArchivo()}></Link>
    </div>
  )
}

export default UploadFile