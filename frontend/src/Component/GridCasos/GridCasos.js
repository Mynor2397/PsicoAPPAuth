import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap.css"

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
                <div className="container mt-5">
                    <div className="col-md-12">
                        <div className="col-md-6 form-group">
                            <input type="text" className="form" placeholder="Buscar Caso"  onChange={(e) => handleSearch(e)} />
                            <span className="icon-search"></span>
                            <div style={{ float: 'right' }}>
                         <Link style={{ color: '#778899' }} className="filtros__btn" to="CreateCasos/CreateCasos.js">Crear Casos</Link>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
            <section className="filtros">
                <div className="container mt-5">
                    <div className="col-md-12">
                        <div className="col-md-6 ">
                            <div className="col-md-12">
            <div>
                <button type="button" className="btn btn-dark" style={{ background: '#FF00FF'}}  onClick={()=> setFilter(2)}>Fecha</button>
                <button type="button" className="btn btn-dark" style={{ background: '#FF00FF' }} onClick={()=> setFilter(4)} >Desistidos</button>
                <button type="button" className="btn btn-dark" style={{ background: '#FF00FF' }} onClick={()=> setFilter(1)} >Edad</button>
            </div>
            <div>
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
                <div className="container mt-5">
                    <div className="col-md-12">
                        <div className="col-md-6 ">
                            
            {
                Data.map((data, index) => (
                    <li  class="list-group-item" style={{ background: '#FF00FF'}} key={index}>{data.caseNumber}</li>
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