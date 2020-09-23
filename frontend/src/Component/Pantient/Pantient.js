import React, {useState, useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
import './Styles.pantient.scss'
import { URLI } from '../../config/option'
import Search from '../helpers/Search'


const Pantient = () => {

	localStorage.removeItem('step1')
	localStorage.removeItem('step2')
	localStorage.removeItem('step3')

	const [pantient, setPantient] = useState([])

	useEffect(()=> {
		getPantient()
	},[])

	const getPantient = async () => {
		fetch(`${URLI}persons/all`)
		.then(res => res.json())
		.then( data => setPantient(data.data))
		.catch( err => console.error(err))
	}

	const handleDelete = (id,e) => {
		console.log(id)
		const url = `${URLI}person/${id}`
		fetch(url , {
			method: 'DELETE'
		})
			.then(res => res.json())
			.then( data => {
				console.log(data)
				if(data.ok) {
					getPantient()
				}
			})
			.catch( err => console.error(err))
	}

	const handleSearch = (e) => {
		console.log(e.target.value)
	}

	return (
		<>	
			<Navbar />
			<section className="ed-container mt-8">
				<div className="ed-item ed-container">
					<div className="ed-item">
						<h1 className="pantient-title">Pacientes</h1>
					</div>
					<div className="ed-item s-50">
						<Search handleSearch={handleSearch} />
					</div>
					<div className="ed-item s-50 flex flex-right flex-center">
						<Link to="/createpantient" className="pantient-btncreate">Crear Paciente</Link>
					</div>
				</div>
			</section>

			<div className="ed-container">
		    {
					pantient.map(({id, mobilePhone, addressLine1, email, active}) => (
						<div key={id} className="ed-item m-50 l-1-3">
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
									<button className="button color-red" onClick={ (e)=>handleDelete(id, e) }>Borrar</button>
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