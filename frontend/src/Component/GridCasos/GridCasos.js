import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

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
            <div className="div-search">
                <input placeholder="Buscar Caso"  className="grid__search" type='text' onChange={(e) => handleSearch(e)} />
                <span className="icon-search"></span>
            </div>
            <Link className="grid__btn" to="/crearcasos">Crear Casos</Link>
        </section>
        <section className="filtros">
            <div>
                <button onClick={()=> setFilter(2)} className="filtros__btn">Fecha</button>
                <button onClick={()=> setFilter(4)} className="filtros__btn">Desistidos</button>
                <button onClick={()=> setFilter(1)} className="filtros__btn">Edad</button>
            </div>
            <div>
                <div>
                    <input onChange={(e)=>setRadio(e.target.value)} name="c"  htmlFor="check" type="radio" value="1"  />
                    <label id="check">Ascendente </label>
                </div>
                <div>
                    <input onChange={(e)=>setRadio(e.target.value)} name="c" htmlFor="check1" type="radio" value="2" />
                    <label id="check1">Descendente</label>
                </div>
            </div>
        </section>
        <section>
            {
                Data.map((data, index) => (
                <h1 key={index}>{data.caseNumber}</h1>
                ))
            }
        </section>
        </>
    )
}

export default GridCasos