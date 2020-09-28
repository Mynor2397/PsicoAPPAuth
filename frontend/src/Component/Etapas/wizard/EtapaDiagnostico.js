import React from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { URLI } from '../../../config/option'
import Files from '../../helpers/File';

const EtapaDiagnostico = ({
  currentStep,
  handleChangediag,
  uuidDSM5Array,
  uuidDSM5,
  descriptionOfProblem,
  descriptionOfProblemFile,
  idCase
}) => {
  if (currentStep !== 3) {
    return null
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('uuidDSM5', uuidDSM5)
    formData.append('descriptionOfProblem', descriptionOfProblem)
    formData.append('descriptionOfProblemFile', descriptionOfProblemFile)

    const url = `${URLI}diagnostic/create/${idCase}`

    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(data => alert(data.ok ? 'Sea guardado correctamente': 'Error al aguardar') )
      .catch(err => console.log(err))
  }


  return (
    <>
      <form className="ed-item ed-container" onSubmit={handleSubmit}>

        <div className="ed-item">
          <label htmlFor="uuidReligion"  >Diagnostico </label>
          <select className="select-css"
            required
            value={uuidDSM5 || 0}
            name="uuidDSM5"
            onChange={handleChangediag}
          >
            <option value="0">Seleccionar un valor</option>
            {
              uuidDSM5Array.map(({ uuid, name }) => (
                <option key={uuid} value={uuid}>{name}</option>
              ))
            }
          </select>
        </div>
        <div className="ed-item">
        <label htmlFor="uuidReligion"  >Descripcion del problema </label>
          <CKEditor
            editor={ClassicEditor}
            data={descriptionOfProblem}
            onInit={editor => {
            }}
            onBlur={(event, editor) => {
              const data = {
                value: editor.getData(),
                is: true,
                name: 'descriptionOfProblem'
              }
              handleChangediag(data)
            }}
          />

          <Files
            file={descriptionOfProblemFile}
            label="Descripción del problema (adjunto)"
            name="descriptionOfProblemFile"
            handleChange={(e) => handleChangediag(e)}
          />
        </div>
        <div className="ed-item">
          <button className="button1 diag mt-1">Guardar Diagnostico</button>
        </div>
      </form>
    </>
  )
}

export default EtapaDiagnostico