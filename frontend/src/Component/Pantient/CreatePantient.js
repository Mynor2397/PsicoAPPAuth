import React, { useState, useEffect } from 'react'

import MultiStep from 'react-multistep'
import Step1 from './FormWizard/Step1';
import Step2 from './FormWizard/Step2';
import Step3 from './FormWizard/Step3';
import Navbar from '../Navbar/Navbar';
import { useHistory } from 'react-router-dom';


const CreatePantient = () => {
	
	const history = useHistory()
	const [edad, setEdad] = useState(18)
	
	const formData = new FormData()

	if(edad >= 18) {
		localStorage.removeItem('step2')
	}

	formData.append('firstName','-')
	formData.append('secondName', '-')
	formData.append('lastName', '-')
	formData.append('secondLastName', '-')
	formData.append('marriedName', '-')
	formData.append('bornDate', '-')
	formData.append('mobilePhone', '-')
	formData.append('email', '-')
	formData.append('uuidReligion', '-')
	formData.append('firstNameFather','-')
	formData.append('secondNameFather','-')
	formData.append('lastNameFather','-')
	formData.append('secondLastNameFather','-')
	formData.append('firstNameMother','-')
	formData.append('secondNameMother','-')
	formData.append('lastNameMother','-')
	formData.append('secondLastNameMother','-')
	formData.append('firstNameExtra','-')
	formData.append('secondNameExtra','-')
	formData.append('lastNameExtra','-')
	formData.append('secondLastNameExtra','-')	
	formData.append('uuidCity','-')
	formData.append('addressLine1','-')
	formData.append('addressLine2','-')
	formData.append('phoneNumber','-')
	formData.append('comment','-')
	formData.append('attachment','-')	
	
	
	const handlerStesp1 = (e) => {
		
		
		console.log('step1',e)
		formData.set('firstName', e.firstName)
		formData.set('secondName', e.secondName)
		formData.set('lastName', e.lastName)
		formData.set('secondLastName', e.secondLastName)
		formData.set('marriedName', e.marriedName)
		formData.set('bornDate', e.FechaNacimiento)
		formData.set('mobilePhone', e.mobilePhone)
		formData.set('email', e.email)
		formData.set('uuidReligion', e.uuidReligion)
		
		setEdad( Edad(e.FechaNacimiento) )
		
	}
	
	const handlerStesp2 = (e) => {
		console.log('step2',e)
		
		formData.set('firstNameFather',e.firstNameFather)
		formData.set('secondNameFather',e.secondNameFather)
		formData.set('lastNameFather',e.lastNameFather)
		formData.set('secondLastNameFather',e.secondLastNameFather)
		formData.set('firstNameMother',e.firstNameMother)
		formData.set('secondNameMother',e.secondNameMother)
		formData.set('lastNameMother',e.lastNameMother)
		formData.set('secondLastNameMother',e.secondLastNameMother)
		formData.set('firstNameExtra',e.firstNameExtra)
		formData.set('secondNameExtra',e.secondNameExtra)
		formData.set('lastNameExtra',e.lastNameExtra)
		formData.set('secondLastNameExtra',e.secondLastNameExtra)	
	}
	const handlerStesp3 = (e) => {
		console.log('step3',e)
		formData.set('uuidCity',e.uuidCity)
		formData.set('addressLine1',e.addressLine1)
		formData.set('addressLine2',e.addressLine2)
		formData.set('phoneNumber',e.phoneNumber)
		formData.set('comment',e.CkeditorComment)
		formData.set('attachment',e.Image)	
	}

	function Edad(FechaNacimiento) {

		var fechaNace = new Date(FechaNacimiento);
    var fechaActual = new Date()
		
    var mes = fechaActual.getMonth();
    var dia = fechaActual.getDate();
    var año = fechaActual.getFullYear();

    fechaActual.setDate(dia);
    fechaActual.setMonth(mes);
    fechaActual.setFullYear(año);
		
    var edad = Math.floor(((fechaActual - fechaNace) / (1000 * 60 * 60 * 24) / 365));
		
    return edad;
 	}
	 

	 const steps = [
		 { name: '1', component: <Step1 handlerStesp1={handlerStesp1} /> },
		 { name: '2', component: <Step2 handlerStesp2={handlerStesp2} /> },
		 { name: '3', component: <Step3 handlerStesp3={handlerStesp3} /> }
	 ];

	 const steps18 = [
		{ name: '1', component: <Step1 handlerStesp1={handlerStesp1} /> },
		{ name: '3', component: <Step3 handlerStesp3={handlerStesp3} /> }
	];

	 const handleSubmit = ()=> {
		 fetch('http://localhost:4000/person/create', {
			 method: 'POST',
			 body: formData
			})
			.then(res => res.json())
			.then(data => {
				console.log(data.ok)
				localStorage.removeItem('steps1')
				localStorage.removeItem('steps2')
				localStorage.removeItem('steps3')
				history.push('/pantient')

		})
		.catch(err => console.log(err))
		console.log('asdfsadfasdf')
	}
	const prevStyle = {'background': '#33c3f0', 'border': ['2px','solid', '#00000']}
	const nextStyle = {'background': '#33c3f0',  'border': ['2px','solid', '#00000']} 

	useEffect(() => {
		
	}, [setEdad])

	return (
		<>
			<Navbar />
			<div className="ed-container mt-6 mb-6">
				<div className="ed-item m-80 l-50 m-to-center ">
					{
						edad <= 18 
						?
						 <MultiStep prevStyle={prevStyle} nextStyle={nextStyle} showNavigation={true} type={false} steps={steps} />
						:
						 <MultiStep prevStyle={prevStyle} nextStyle={nextStyle} showNavigation={true} type={false} steps={steps18} />


					}
<<<<<<< HEAD
				</div>
				<div className="ed-item ed-container">
					<button onClick={()=>handleSubmit()} type="button" className="button1">guardar Cambios</button>
=======

						<button onClick={()=>handleSubmit()} type="button">guardar Cambios</button>
						
>>>>>>> master
				</div>
			</div>
		</>
	)
}

export default CreatePantient