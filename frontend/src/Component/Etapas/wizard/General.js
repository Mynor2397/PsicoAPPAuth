import React, { useState, useEffect } from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Link, useHistory } from 'react-router-dom'
import { URLI } from '../../../config/option'
import CustomSelect from '../../helpers/Select';

const General = ({ currentStep, idCase }) => {
  const history = new useHistory()

  const [caseInf, setCaseInf] = useState({})
  const [assignedUser, setAssignedUser] = useState([])
  const [pantient, setPantient] = useState([])
  const [ckeditorComment, setCkeditorComment] = useState('')
  const [assignedUserSelect, setassignedUserSelect] = useState('')
  const [pantientSelect, setPantientSelect] = useState('')
  const [CSS, setCSS] = useState(true)



  useEffect(() => {

    fetch(`${URLI}personuser`)
      .then(rest => rest.json())
      .then(data => {
        const assigned = []
        data.data.map(({ uuid, userName }) => {
          assigned.push({ label: userName, value: uuid })
        })
        setAssignedUser(assigned)
      })
      .catch(err => console.log(err))


    fetch(`${URLI}personpatient`)
      .then(rest => rest.json())
      .then(data => {
        const assigned = []
        data.data.map(({ uuid, id }) => {
          assigned.push({ label: id, value: uuid })
        })
        setPantient(assigned)
      })
      .catch(err => console.log(err))

  }, [])

  useEffect(() => {
    cases();
  }, [setCSS])

  function cases() {
    fetch(`${URLI}case/viewcase/${idCase}`)
      .then(rest => rest.json())
      .then(data => setCaseInf(data.data[0]))
      .catch(err => console.log(err))
  }

  if (currentStep !== 1) {
    return null
  }

  const fecha = (creationDate) => {
    var fechaCreacion = new Date(creationDate);

    var mes = fechaCreacion.getMonth() + 1;
    var dia = fechaCreacion.getDate();
    var anio = fechaCreacion.getFullYear();

    if (mes < 10) {
      mes = `0${mes}`
    }

    if (dia < 10) {
      dia = `0${dia}`
    }

    return `${dia}-${mes}-${anio}`
  }

  const onClickBtn = (e) => {
    e.preventDefault()
    console.log(assignedUserSelect)
    console.log(pantientSelect)
    console.log(ckeditorComment)

    if (assignedUserSelect && pantientSelect && ckeditorComment) {
      const caso = {
        uuidOwnerUser: 'uuid4',
        uuidAssignedUser: assignedUserSelect.value,
        uuidPersonPatient: pantientSelect.value,
        reasonForConsultation: ckeditorComment,
        uuidStage: caseInf.uuidStage,
        desisted: 0
      }

      fetch(`${URLI}case/update/${idCase}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(caso)
      })
        .then(rest => rest.json())
        .then(data => {
          console.log(data)
          if (data.ok) {
            setCSS(true)
            cases()
          }
        })
        .catch(err => console.error(err))
    } else {
      alert('Cambiar los valores para poder modificarlos')
    }
  }

  return (
    <>
      <div className="ed-item border m-50">
        <div className="ed-item ed-container">
          <h2>Datos del caso</h2>
        </div>
        <h3 className="title">Identificador del caso:
          <p className="title-p">{caseInf.caseNumber}</p>
        </h3>
        <h3 className="title">Fecha de creacion:
          <p className="title-p">{fecha(caseInf.creationDate)}</p>
        </h3>
        <h3 className="title">Nombre del Psicólogo:
          <p className="title-p">{caseInf.nameAssignedUser} {caseInf.lastNameUser}</p>
        </h3>
        <h3 className="title">Identificador del paciente:
          <p className="title-p">{caseInf.idPersonPatient}</p>
        </h3>
      </div>
      <form onSubmit={onClickBtn} className="ed-item border m-50 ed-container">
        <div className="ed-item">
          <h2>Actualizar el caso</h2>
        </div>
        <div className="ed-item">
          <label htmlFor="">
            Psicólogo Asignado
          </label>
          <CustomSelect
            placeholder={`${caseInf.nameAssignedUser} ${caseInf.lastNameUser}`}
            options={assignedUser}
            handleSelect={setassignedUserSelect}
          />
        </div>
        <div className="ed-item">
          <label htmlFor="">
            Paciente Asignado
          </label>
          <CustomSelect
            placeholder={caseInf.idPersonPatient}
            options={pantient}
            handleSelect={setPantientSelect}
          />
        </div>
        <div className="ed-item">
          <label htmlFor="">
            Razón de la consulta
              </label>
          <CKEditor
            editor={ClassicEditor}
            data={`${caseInf.reasonForConsultation}`}
            onChange={(event, editor) => {
              const data = editor.getData();
              setCkeditorComment(data)
            }}
          />
        </div>
        <div className="ed-item">
          <button className="button12 mt-1" >Actualizar Caso</button>
        </div>
      </form>
    </>
  )
}

export default General
