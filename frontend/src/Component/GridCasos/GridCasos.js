import React, {useState, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap.css"
import "ed-grid/src/css/ed-grid.css"
import './input.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

const GridCasos = () => {

    const [Radio, setRadio] = useState(1)
    const [Filter, setFilter] = useState(0)
    const [Data, setData] = useState([])

    const handleSearch = (e) => {
        console.log(e.target.value)
    } 
    
    useEffect(() => {
        let url = ''
        if(Filter === 0 || Filter === 4) {
            url = `http://localhost:4000/case/filter/${Filter}`
        }

        if(Filter === 1 || Filter === 2) {
            url = `http://localhost:4000/case/filter/${Filter}/${Radio}`
        }

        console.log(url)

        fetch(url)
        .then(res => res.json())
        .then(data => setData(data.data))

    }, [Filter,Radio])

    
    console.log(Data)
    return (
        <>
            <section className="header-grid">
                    <div className="ed-container">
                    <div className="ed-item s-30 lg-100">
                        <div className="ed-grid s-grid-6">
                            <div className="s-cols-3">
                                 <fieldset>
                            <input type="search"  placeholder="Buscar Caso"  onChange={(e) => handleSearch(e)} />
                                <button type="submit">
                                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                                 </button>
                             </fieldset>
                         </div>
             <div className= "s-x-6">
                     <button type="button" className="btn btn-dark" style={{ background: '#FF00FF' }} onClick={() => "CreateCasos/CreateCasos.js"}>Crear Casos</button>
             </div>
         </div>
     </div>
 </div>
        </section>
            <section className="filtros">
                <div className="ed-container">
                    <div className="ed-item s-30 lg-50">
                    <div className="ed-grid s-grid-3">
            <div className="card">
                            <button type="button" className="btn btn-dark" style={{ background: '#FF00FF' }} onClick={() => setFilter(2)}>Fecha</button>
                        </div>
            <div className="card">
                            <button type="button" className="btn btn-dark" style={{ background: '#FF00FF' }} onClick={() => setFilter(4)} >Desistidos</button>
                        </div>
            <div className="card">
                <button type="button" className="btn btn-dark" style={{ background: '#FF00FF' }} onClick={()=> setFilter(1)} >Edad</button>
             </div>
            <div className="ed-container">
            <div className="ed-item s-90 lg-100">
                <div>
                     <input type="checkbox" onChange={(e)=>setRadio(e.target.value)} name="c"  htmlFor="check" value="1"  />
                     <label id="check">Ascendente </label>
                </div>
                <div>
                    <input type="checkbox" onChange={(e)=>setRadio(e.target.value)} name="c" htmlFor="check1"  value="2" />
                    <label id="check1">Descendente</label>
                </div>
                    </div>
                        </div>
                    </div>
                    </div>  
                </div>
        </section>
            <section>
                <div className ="ed-container">
                    <div className ="ed-item s-30 lg-50">
                        <h4><strong>CASOS</strong></h4>
                        <ol>
            {
                Data.map((data, index) => (
                    <li key={index}>{data.caseNumber}</li>
                ))
                            }
                        </ol>
                    </div>
                </div>  
        </section>
        </>
    )
}

export default GridCasos