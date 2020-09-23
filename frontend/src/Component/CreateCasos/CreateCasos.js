import React,{useState, useEffect} from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Navbar from '../Navbar/Navbar';
import {URLI} from '../../config/option'
import { useHistory } from 'react-router-dom';
import './Casos.scss'

const CreateCasos = () => {
	const history = useHistory()

	const [ckeditorComment, setCkeditorComment] = useState('')
	const [stage, setStage] = useState([])
	const [ownerUser, setOwnerUser] = useState([])
	const [personPatient, setPersonPatient] = useState([])

	const handleSubmit = (e) => {
		e.preventDefault()

		const caso = {
			uuidAssignedUser: 'uuid4',
			uuidOwnerUser: e.target.uuidOwnerUser.value,
			uuidPersonPatient: e.target.uuidPersonPatient.value,
			uuidStage: e.target.uuidStage.value,
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
		.then(data => setOwnerUser(data.data))
		.catch(err => console.log(err))

		fetch(`${URLI}stage/allstages`)
		.then(rest => rest.json())
		.then(data => setStage(data.data))
		.catch(err => console.log(err))

		
	}, [])
		
	useEffect(() => {
		fetch(`${URLI}/personpatient`)
		.then(rest => rest.json())
		.then(data => setPersonPatient(data.data))
		.catch(err => console.log(err))
	}, [])
	


console.log(personPatient)
console.log(ownerUser)
	return (
		<>
		<Navbar />
		<div className="ed-grid mt-6">
			<div className="ed-item">
				<h1>Crear caso</h1>
				<hr/>
			</div>
			<div className="ed-item">
				<form onSubmit={handleSubmit} className="form">
					<div className="ed-item">
						<label htmlFor="">
							OwnerUser
							</label>
							<select name="uuidOwnerUser" className="select-css" id="">
								<option value="0">Selecione Estado</option>
								{
									ownerUser.map(({uuid,userName}) => (
										<option key={uuid} value={uuid}>{userName}</option>
									))
								}
						</select>
							
					</div>
					<div className="ed-item">
						<label htmlFor="">
							PersonPatient
						</label>
						<select className="select-css" name="uuidPersonPatient" id="">
							<option value="0">Selecione Estado</option>
							{
								personPatient.map(({uuid,name}) => (
									<option key={uuid} value={uuid}>{name}</option>
								))
							}
						</select>
					</div>
					<div className="ed-item">
						<label htmlFor="">
							Stage
						</label>
						<select className="select-css" name="uuidStage" id="">
							<option value="0">Selecione Estado</option>
							{
								stage.map(({uuid, name}) => (
									<option key={uuid} value={uuid}>{name}</option>
								))
							}
						</select>
						<div className="message-error"></div>
					</div>
					<div className="ed-item">
						<label htmlFor="">
							reasonForConsultation
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