import React, {useState, useEffect} from 'react'
import './Styles.pantient.scss'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'


const Pantient = () => {

	localStorage.removeItem('step1')
	localStorage.removeItem('step2')
	localStorage.removeItem('step3')

	const [pantient, setPantient] = useState([])

	useEffect(()=> {
		getPantient()
	},[])

	const getPantient = async () => {
		fetch('http://localhost:4000/persons/all')
		.then(res => res.json())
		.then( data => setPantient(data.data))
		.catch( err => console.error(err))
	}

	return (
		<>	
			<Navbar />
			<section className="ed-container mt-6">
				<div className="ed-item ed-container">
					<div className="ed-item s-50 flex flex-center">
						<h1 className="pantient-title">Pacientes</h1>
					</div>
					<div className="ed-item s-50 flex flex-right flex-center">
						<Link to="/createpantient" className="pantient-btncreate">Crear Paciente</Link>
					</div>
				</div>
			</section>
			
			<section className="container">
				<div className="item">
					<select className=" search-order">
						<option value="0" className="search-order__option">Order</option>
						<option value="1" className="search-order__option">Ascendente</option>
						<option value="2" className="search-order__option">Descendente</option>
					</select>	
					<input
						className="search-pantient" 
						type="search"
						placeholder="Buscar Pacientes"
					/>
					<img className="icon-search" src="./search.svg" alt="search"/>
				</div>
			</section>

			<div className="ed-container">
		    {
					pantient.map(({id, mobilePhone, addressLine1, email, active}) => (
						<div key={id} className="ed-item">
							<article className="s-shadow-bottom">
								<div className="ed-grid m-grid-5 s-gap-2 m-pxy-2 s-bg-white s-radius-tl s-radius-tr">
									<div className="s-pxy-2 m-pxy-0 m-cols-3">
										<h3>{id}</h3>
										<p className="s-mb-0">{email}</p>
										<p className="s-mb-0">{addressLine1}</p>
										<p className="s-mb-0">{mobilePhone}</p>
									</div>
								</div>
								<footer className="s-bg-grey s-cross-center s-pxy-2 s-radius-br s-radius-bl">
									<p className="s-10">{ active === 1 ? 'Activo' : 'Inactivo'}</p>
									<Link to={'/updatepantient/'+id} className="button s-to-right">Editar</Link>
								</footer>
							</article>
						</div>
					))
				}
			</div>
		</>
	)
}

export default Pantient