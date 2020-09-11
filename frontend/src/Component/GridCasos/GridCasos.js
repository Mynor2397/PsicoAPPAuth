import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap.css"
import "ed-grid/src/css/ed-grid.css"
import './estilos.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const GridCasos = () => {

    const [Radio, setRadio] = useState(1)
    const [Filter, setFilter] = useState(0)
    const [pantient, setPantien] = useState([])

    const handleSearch = (e) => {

        const newPantient = pantient.filter(p => p.caseNumber.indexOf(e.target.value) !== -1)

        setPantien(newPantient)

        if (pantient.length == 0) {
            data()
        }
    }

    useEffect(() => {
        data()
    }, [])

    const data = () => {
        fetch('http://localhost:4000/persons/all')
            .then(res => res.json())
            .then(data => setPantien(data.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        let url = ''
        if (Filter === 0 || Filter === 4) {
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
            <section type="head" className="header-grid">
            </section>
            <section className="ed-container">
                <div className="ed-item s-50">
                    <fieldset>
                        <input type="search" placeholder="Buscar Casos" onChange={(e) => handleSearch(e)} />
                        <button type="submit">
                            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                        </button>
                    </fieldset>
                </div>

                <div className="ed-item s-50 flex">
                    <button type="button" className="btn btn-dark" style={{ background: '#2B3AF2' }} onClick={() => "CreateCasos/CreateCasos.js"}>Crear Casos</button>
                </div>
            </section>
            <section className="filtros">
                <div className="ed-container">
                    <div className="ed-item s-100 lg-50">
                        <div className="ed-grid">
                            <div>
                                <button type="button" className="btn  colorbtn" style={{ background: '#2B3AF2' }} onClick={() => setFilter(2)}>Fecha</button>

                                <button type="button" className="btn  colorbtn" style={{ background: '#2B3AF2' }} onClick={() => setFilter(4)} >Desistidos</button>

                                <button type="button" className="btn  colorbtn" style={{ background: '#2B3AF2' }} onClick={() => setFilter(1)} >Edad</button>
                            </div>
                            <div className="ed-container">
                                <div className="s-50">
                                    <input type="checkbox" onChange={(e) => setRadio(e.target.value)} name="c" htmlFor="check" value="1" />
                                </div>
                                <div className="s-50">
                                    <label id="check">Ascendente </label>
                                </div>
                                <div className="ed-container">
                                    <div className="s-50">
                                        <input type="checkbox" onChange={(e) => setRadio(e.target.value)} name="c" htmlFor="check1" value="2" />
                                    </div>
                                    <div className="s-50">
                                        <label id="check1">Descendente</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="ed-container">
                    <div className="ed-item">
                        <h4><strong>CASOS</strong></h4>
                        <div className="ed-container">
                            {
                                pantient.map((data, index) => (
                                    <div key={data.caseNumber} className="ed-item s-100 m-50 l-1-3">
                                        <article className="s-shadow-bottom">
                                            <div className="ed-grid m-grid-5 s-gap-2 m-pxy-2 s-bg-white s-radius-tl s-radius-tr">
                                                <div className="s-pxy-2 m-pxy-0 m-cols-3">
                                                    <h3>{data.caseNumber}</h3>
                                                    <p className="s-mb-0">{data.age}</p>
                                                    <p className="s-mb-0">{data.creationDate}</p>
                                                    <p className="s-mb-0">{data.firstNameAssigned}</p>
                                                    <p className="s-mb-0">{data.firstNameOwner}</p>
                                                </div>
                                            </div>
                                            <footer className="s-bg-grey s-cross-center s-pxy-2 s-radius-br s-radius-bl">
                                                <p className="s-10">{data.stage}</p>
                                                <Link to={'/updatecasos/' + data.caseNumber} className="button s-to-right">Editar</Link>
                                            </footer>
                                        </article>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GridCasos