import React,{useState, useEffect} from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import SelectU from 'react-select';
import { useHistory } from 'react-router-dom';

import {URLI} from '../../config/option'

import './Casos.scss'

const CreateCasos = () => {
	const history = useHistory()

	const [ckeditorComment, setCkeditorComment] = useState('')
	const [AssignedUser, setAssignedUser] = useState([])
	const [personPatient, setPersonPatient] = useState([])
	const [uuidAssignedUser, setUuidAssignedUser] = useState('')
	const [uuidPersonPatient, setUuidPersonPatient] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()

		const caso = {
			uuidOwnerUser:'uuid4',
			uuidAssignedUser: uuidAssignedUser,
			uuidPersonPatient: uuidPersonPatient,
			reasonForConsultation: ckeditorComment
		}

		fetch(`${URLI}case/create`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(caso)
		}) 
		.then(rest => rest.json())
		.then(data => {
			console.log(data)
			if ( data.ok ) {
				history.push(`/etapas/${data.data}`)
			}
		} )
		.catch(err => console.error(err))
	}
	
	useEffect(() => {
		fetch(`${URLI}personuser`)
		.then(rest => rest.json())
		.then(data => {
			const assignedUser = []

			data.data.map(({uuid,firstName, lastName}) => {
				assignedUser.push({label:`${firstName} ${lastName}`,value:uuid})
			})
			setAssignedUser(assignedUser)
		})
		.catch(err => console.log(err))		
	}, [])
		
	useEffect(() => {
		fetch(`${URLI}personpatient`)
		.then(rest => rest.json())
		.then(data => {
			const pantientArray =[]

			data.data.map(({id,uuid}) => {
				pantientArray.push({label:id,value:uuid})
			})

			setPersonPatient(pantientArray)
		})
		.catch(err => console.log(err))
	}, [])
	

	return (
		<>
		<div className="ed-container mt-8">
			<div className="ed-item">
				<h1>Crear caso</h1>
				<hr/>
			</div>
			<div className="ed-item">
				<form onSubmit={handleSubmit} className="form">
					<div className="ed-item">
						<label htmlFor="">
							Asignar Psicólogo
						</label>
						<SelectU 
							placeholder="Seleccionar Psicólogo"
							options={AssignedUser} 
							onChange={opt => setUuidAssignedUser(opt.value)}
						/>
					</div>

					<div className="ed-item">
						<label htmlFor="">
							Asignar Paciente
						</label>
						<SelectU 
							placeholder="Seleccionar paciente"
							options={personPatient} 
							onChange={opt => setUuidPersonPatient(opt.value)}
						/>
					</div>

					<div className="ed-item">
						<label htmlFor="">
							Razón de la consulta
						</label>
						<CKEditor
							editor={ClassicEditor}
							data=''
							onInit={editor => {
							}}
							onChange={(event, editor) => {
								const data = editor.getData();
								setCkeditorComment(data)
							}}
						/>
					
					</div>

					<div className="ed-item">
						<button className="button1 mt-1" type='submit'>Crear Caso</button>
					</div>
				</form>
			</div>
		</div>
		</>
  )
}

export default CreateCasos