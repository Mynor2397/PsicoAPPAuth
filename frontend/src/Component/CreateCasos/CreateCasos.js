import React,{useState} from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useHistory } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

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

		console.log(caso)

		fetch(`http://localhost:4000/case/create`, {
			method: 'POST',
			body: caso
		}) 
		.then(rest => rest.json())
		.then(data => {
			console.log(data)
			history.push('/etapainicial')
		} )
		.catch(err => console.error(err))
	}
	

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
							<select name="uuidOwnerUser" id="">
							<option value="0">Selecione Estado</option>
							{
								ownerUser.map(() => (
									<option value=''></option>
								))
							}
						</select>
							
					</div>
					<div className="ed-item">
						<label htmlFor="">
							PersonPatient
						</label>
						<select name="uuidOwnerUser" id="">
							<option value="0">Selecione Estado</option>
							{
								personPatient.map(() => (
									<option value=''></option>
								))
							}
						</select>
					</div>
					<div className="ed-item">
						<label htmlFor="">
							Stage
						</label>
						<select name="uuidStage" id="">
							<option value="0">Selecione Estado</option>
							{
								stage.map(() => (
									<option value=''></option>
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
						<button type='submit'>Crear Caso</button>
					</div>
				</form>
			</div>
		</div>
		</>
  )
}

export default CreateCasos