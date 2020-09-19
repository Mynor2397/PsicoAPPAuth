import React, { useState, useEffect } from 'react'
import Search from '../helpers/Search'
import Navbar from '../Navbar/Navbar'
import './estilos.scss'
import { Link } from 'react-router-dom'

const GridCasos = () => {

	const [Radio, setRadio] = useState(0)
	const [Filter, setFilter] = useState(0)
	const [pantient, setPantien] = useState([])

	const handleSearch = (e) => {
		fetch(`http://localhost:4000/cases/byfilter?filter=${e.target.value}`)
			.then(res => res.json())
			.then(data => setPantien(data.data))
			.catch(err => console.log(err))
	}

	useEffect(() => {
		let url = ''
		if (Filter === 0 || Filter === 4 || pantient) {
			url = `http://localhost:4000/case/filter/${Filter}`
		}

		if (Filter === 1 || Filter === 2) {
			url = `http://localhost:4000/case/filter/${Filter}/${Radio}`
		}

		console.log(url)

		fetch(url)
			.then(res => res.json())
			.then(data => setPantien(data.data))

	}, [Filter, Radio])

	console.log(pantient)

	return (
		<>
			<Navbar />
			<section className="ed-container flex-center  mt-8">
				<div className="ed-item  flex-right s-50 l-50">
					<Search handleSearch={handleSearch}/>
				</div>
				<div className="ed-item flex flex-right s-50 l-50">
					<Link type="button" className="pantient-btncreat" to='/createcasos'>Crear Casos</Link>
				</div>
			</section>

			<section className="ed-container">
				<div className="ed-item">
					<h3>Ordenar por:</h3>
				</div>
				<div className="ed-item s-50 ">
					<div className="card-filter">
						<button type="button" className={Filter === 2? 'btn-filter select' : 'btn-filter'} onClick={() => setFilter(2)}>Fecha</button>
						<button type="button" className={Filter === 4? 'btn-filter select' : 'btn-filter'} onClick={() => setFilter(4)} >Desistidos</button>
						<button type="button" className={Filter === 1? 'btn-filter select' : 'btn-filter'} onClick={() => setFilter(1)} >Edad</button>
					</div>
				</div>
				<div className="ed-item s-50 flex flex-center flex-right">
					<div className="card-filter">
						<div className="ed-item ed-container">
							<button type="button" className={Radio === 1? 'btn-filter select' : 'btn-filter'} onClick={() => setRadio(1)} >Ascendente</button>
							{/* <input type="submit" onChange={(e) => setRadio(e.target.value)} name="c" htmlFor="check" value="1" />
							<label id="check">Ascendente</label> */}
						</div>
						<div className="ed-item ed-container">
							<button type="button" className={Radio === 2? 'btn-filter select' : 'btn-filter'} onClick={() => setRadio(2)} >Descendente</button>
							{/* <input type="radio" onChange={(e) => setRadio(e.target.value)} name="c" htmlFor="check1" value="2" />
							<label id="check1">Descendente</label> */}
						</div>
						
					</div>
				</div>
			</section>
			<section>
				<div className="ed-container">
					<div className="ed-item">
						<h3><strong>Lista de casos</strong></h3>
					</div>
					{
						pantient.length
							?
							pantient.map((data) => (
								<div key={data.caseNumber} className="ed-item s-100 m-50 l-1-3">
									<article  className="s-shadow-bottom">
										<div className="ed-container">
											<div className="ed-item">
												<h3>{data.caseNumber}</h3>
												<p className="s-mb-0">Edad: {data.age}</p>
												<p className="s-mb-0">Fecha Creación: {data.creationDate}</p>
												<p className="s-mb-0">{data.firstNameAssigned}</p>
											</div>
										</div>
										<footer className="s-bg-grey s-cross-center s-pxy-2 s-radius-br s-radius-bl">
											<p className="s-10">{data.stage}</p>
											<Link to={'/etapas/' + data.uuid} className="button s-to-right">Editar</Link>
										</footer>
									</article>
								</div>
							))
							: <p className="ed-item alert ">No hemos encontrado lo que buscas!</p>
					}
				</div>
			</section>
		</>
	)
}

export default GridCasos