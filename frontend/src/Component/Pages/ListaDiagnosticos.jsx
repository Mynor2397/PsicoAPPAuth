import React, { useState, useEffect, createRef } from 'react'

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { URLI } from '../../config/option'
import Search from '../helpers/Search'
import UploadFile from '../helpers/UploadFile'
import Files from '../helpers/File';

const modal = createRef()
const verModal = () => modal.current.classList.toggle('verModal')

const ListaDiagnosticos = ({ idCaso }) => {

  const [diagnostic, setDiagnosticos] = useState([])

  const [select, setSelect] = useState('0')
  const [getDSM, setDSM] = useState([])
  const [comment, setComment] = useState('')
  const [file, setFile] = useState('')
  const [uuidCaseDiagnosticStage, setUuidCaseDiagnosticStage] = useState('')
  const [isOperation, setIsOperation] = useState(true)
  const [changefile, setChangefile] = useState('')


  // const history = useHistory()
  const listDiagnosticos = async () => {
    try {
      const url = `${URLI}diagnostic/get/${idCaso}`
      const diagnosticos = await fetch(url)
      const diafJson = await diagnosticos.json()
      console.log(diafJson)
      const { data } = diafJson
      if (data) {
        setDiagnosticos(data)
      } else {
        setDiagnosticos([])
      }
    } catch (error) {
      alert('Servicos desconectado')
    }
  }

  useEffect(() => {
    async function tot() {
      await listDiagnosticos()
    }
    tot()
  }, [])



  useEffect(() => {
    fetch(`${URLI}diagnostic/getdsm`)
      .then(res => res.json())
      .then(data => setDSM(data.data))
  }, [])

  const update = async (uuid) => {
    try {
      const diag = await fetch(`${URLI}diagnostic/getsingle/${uuid}`)
      const diafJson = await diag.json()

      const {ok, data} = diafJson
      console.log(diafJson)

      if(ok) {
        setSelect(data[0].uuidDSM5)
        setComment(data[0].descriptionOfProblem)
        setFile(data[0].descriptionOfProblemFile)
        setUuidCaseDiagnosticStage(uuid)
        setChangefile(data[0].descriptionOfProblemFile)
        setIsOperation(false)
        verModal()
      }else {
        alert('Servicios desconectados')
      }

    } catch (error) {
      
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('uuidDSM5', select)
    formData.append('descriptionOfProblem', comment)
    formData.append('descriptionOfProblemFile', file)
    formData.append('uuidDiagnosedProblems', uuidCaseDiagnosticStage)
    formData.append('changefile', changefile)

    const urlCreate = `${URLI}diagnostic/create/${idCaso}`
    const urlUpdate = `${URLI}diagnostic/update/${idCaso}`



    fetch(isOperation ? urlCreate : urlUpdate, {
      method: isOperation? 'POST': 'PUT',
      body: formData
    })
      .then(res => res.json())
      .then(async data => {
        if (data.ok) {
          verModal()
          await listDiagnosticos()
          console.log(await listDiagnosticos())
        }
      })
      .catch(err => console.log(err))
  }

  const abrirModal = ()=> {
    setIsOperation(true)
    verModal()
  }

  return (
    <>
      <section className="ed-container">
        <div className="ed-item ed-container">
          <div className="ed-item">
            <h1 className="pantient-title">Diagnosticos</h1>
          </div>
          <div className="ed-item s-60 m-70 l-80">
            {/* <Search /> */}
          </div>
          <div className="ed-item s-40 m-30 l-20">
            <button onClick={abrirModal} className="button full">Crear</button>
          </div>
        </div>
      </section>
      <div className="ed-container">
        <div className="ed-item">
          <form className="form-modal " ref={modal} onSubmit={handleSubmit}>
            <div className="ed-item ">
              <button className="button dark-color" onClick={verModal}>X</button>
            </div>
            <div className="l-block"></div>
            <div className="ed-item ">
              <h2 className="s-center">Diagnostico</h2>
            </div>
            <div className="ed-item form__item">
              <label>Diagnosticos</label>
              <select 
                value={select}
                onChange={(e) => setSelect(e.target.value)}
              >
                <option value="0">Seleccione diagnostico</option>
                {
                  getDSM.map(({ uuid, name }) => (
                    <option key={uuid} value={uuid}>{name}</option>
                  ))
                }
              </select>
            </div>
            <div className="ed-item form__item">
              <label htmlFor="uuidReligion"  >Descripcion del problema </label>
              <CKEditor
                editor={ClassicEditor}
                data={comment}
                onInit={editor => {
                }}
                onChange={(event, editor) => {
                  const data = editor.getData()
                  setComment(data)
                }}
              />
            </div>
            <div className="ed-item">
              <Files
                file={file}
                label="Adjuntar archivo"
                name="file"
                handleChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <div className="ed-item">
              <button className="button full mt-1">Guardar Diagnostico</button>
            </div>
          </form>
        </div>
      </div>

      <main className="ed-container l-block">
        {
          diagnostic.length
            ?
            diagnostic.map(({ uuid, name,r_description, descriptionOfProblemFile }) => (
              <div key={uuid} className="ed-item s-100 m-50 l-1-3">
                <article className="s-shadow-bottom">
                  <div className="ed-container pd">
                    <div className="ed-item">
                      <h2 className="s-center">{name}</h2>
                    </div>
                    <div className="ed-item">
                      <p>{r_description}</p>
                    </div>
                    <UploadFile 
                      istitle={`Archivo.${descriptionOfProblemFile.slice((descriptionOfProblemFile.lastIndexOf(".") - 1 >>> 0) + 2)}`} 
                      URL={`${URLI}attachment/${descriptionOfProblemFile}`} 
                    />
                  </div>
                  <footer className="s-bg-grey s-cross-center s-pxy-2 s-radius-br s-radius-bl">
                    <button onClick={()=>update(uuid)} className="button ghost accent-color s-to-right">Editar</button>
                  </footer>
                </article>
              </div>
            ))
            : <p className="ed-item alert ">NO hay diagnosticos creados!</p>
        }
      </main>
    </>
  )
}

export default ListaDiagnosticos
