import React, {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom'

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { URLI } from '../../config/option'
import Files from '../helpers/File'



const CrearDiagnostico = () => {
  const [select, setSelect] = useState('')
  const [getDSM, setDSM] = useState([])
  const [comment, setComment] = useState('')
  const [file, setFile] = useState('')

  const { idDiag } = useParams()
  const history = useHistory()


  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('uuidDSM5', select)
    formData.append('descriptionOfProblem', comment)
    formData.append('descriptionOfProblemFile', file)

    const url = `${URLI}diagnostic/create/${idDiag}`

    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetch(`${URLI}diagnostic/getdsm`)
    .then(res => res.json())
    .then(data =>setDSM(data.data) )
  }, [])

  console.log(select)
  return (
    <>
      <form className="ed-item mt-8 ed-container" onSubmit={handleSubmit}>

        <div className="ed-item">
          <label htmlFor="uuidReligion"  >Diagnostico </label>
          <select className="select-css"
            required
            name="uuidDSM5"
            onChange={(e)=> setSelect(e.target.value)}
          >
            <option value="0">Seleccionar un valor</option>
            {
              getDSM.map(({ uuid, name }) => (
                <option key={uuid} value={uuid}>{name}</option>
              ))
            }
          </select>
        </div>
        <div className="ed-item">
          <label htmlFor="uuidReligion"  >Descripcion del problema </label>
          <CKEditor
            editor={ClassicEditor}
            data=''
            onInit={editor => {
            }}
            onChange={(event, editor) => {
              const data =  editor.getData()
              setComment(data)
            }}
          />
          <Files
            file={file}
            label="Adjuntar archivo"
            name="file"
            handleChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="ed-item">
          <button className="button1 diag mt-1">Guardar Diagnostico</button>
        </div>
      </form>
    </>
  )
}

export default CrearDiagnostico




// return (
//   <>
//     
//   </>
// )