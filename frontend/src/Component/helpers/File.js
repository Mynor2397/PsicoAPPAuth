import React from 'react'
import './File.scss'

const Files = ({file, label, handleChange,name}) => {
  return (
    <>
      <label className="label">{label}</label>
      <div className="forms">
        <div className="file-upload-wrapper" data-text={
          file
            ? file.name || `Archivo.${file.slice((file.lastIndexOf(".") - 1 >>> 0) + 2)}`
            : 'Selecciona el archivo'
        }>
          <input name={name} onChange={handleChange} type="file" className="file-upload-field" />
        </div>
      </div>
    </>
  )
}

export default Files