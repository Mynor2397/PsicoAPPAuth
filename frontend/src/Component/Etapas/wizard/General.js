import React, { useState, useEffect } from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Link } from 'react-router-dom'
import SelectU from 'react-select'
import {URLI} from '../../../config/option'

const General = ({ idCase, currentStep }) => {

  const [caseInf, setCaseInf] = useState('')
  const [assignedUser, setAssignedUser] = useState([])
  const [pantient, setPantient] = useState([])
  const [ckeditorComment, setCkeditorComment] = useState([])
  
  
  useEffect(() => {
    
    fetch(`${URLI}personuser`)
    .then(rest => rest.json())
    .then(data => {
      const assigned = []
      data.data.map(({uuid,userName}) => {
        assigned.push({label: userName, value: uuid})
      })
      setAssignedUser(assigned)
    })
    .catch(err => console.log(err))

    fetch(`${URLI}case/viewcase/${idCase}`)
    .then(rest => rest.json())
    .then(data => setCaseInf(data.data[0]))
    .catch(err => console.log(err))

    fetch(`${URLI}personpatient`)
    .then(rest => rest.json())
    .then(data => {
      const assigned = []
      data.data.map(({uuid,id}) => {
        assigned.push({label: id, value: uuid})
      })
      setPantient(assigned)
    })
    .catch(err => console.log(err))

  }, [])

  if (currentStep !== 1) {
    return null
  }

  return (
    <>
      <div className="ed-item border m-50">
        <h3 className="title">Identificador del caso:
          <p className="title-p">{caseInf.caseNumber}</p>
        </h3>
        <h3 className="title">Fecha de creacion: 
          <p className="title-p">{caseInf.creationDate}</p>
        </h3>
      </div>
      <div className="ed-item border m-50 ed-container">
        <div className="ed-item">
          <label htmlFor="">
            Psicólogo Asignado
          </label>
          <SelectU 
            options={assignedUser} 
            placeholder="Selecionar psicologo"
          />
        </div>
        <div className="ed-item">
          <label htmlFor="">
            Paciente Asignado
          </label>
          <SelectU 
            options={pantient} 
            placeholder="Selecionar paciente"
          />
        </div>
        <div className="ed-item">
              <label htmlFor="">
                Razón de la consulta
              </label>
              <CKEditor
                editor={ClassicEditor}
                data={caseInf.reasonForConsultation}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setCkeditorComment(data)
                }}
              />
        </div>
        <div className="ed-item">
          <Link to='' className="button1" >Actualizar</Link>
        </div>
      </div>
    </>
  )
}

export default General
