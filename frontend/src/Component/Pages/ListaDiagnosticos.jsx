import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { URLI } from '../../config/option'
import Search from '../helpers/Search'
import UploadFile from '../helpers/UploadFile'

const ListaDiagnosticos = ({ idCaso }) => {

  const [diagnostic, setDiagnosticos] = useState([])

  useEffect(() => {
    const url=`${URLI}diagnostic/get/${idCaso}`
    fetch(url)
      .then(res => res.json())
      .then(response => {
        const {data} = response
        if (data) {
          setDiagnosticos(data)
        }else {
          setDiagnosticos([])
        }
      })

  }, [])
  return (
    <>
      <section className="ed-container">
        <div className="ed-item ed-container">
          <div className="ed-item">
            <h1 className="pantient-title">Diagnosticos</h1>
          </div>
          <div className="ed-item s-60 m-70 l-80">
            <Search />
          </div>
          <div className="ed-item s-40 m-30 l-20">
            <Link to={`/creardiagnostico/${idCaso}`} className="button full">Crear Diagnostico</Link>
          </div>
        </div>
      </section>
      <main className="ed-container l-block">
        {
          diagnostic.length 
          ?
          diagnostic.map(({uuid, uuidDSM5, descriptionOfProblem, descriptionOfProblemFile }) => (
              <div key={uuid} className="ed-item s-100 m-50 l-1-3">
                <article className="s-shadow-bottom">
                  <div className="ed-container">
                    <div className="ed-item">
                      {
                        descriptionOfProblem
                      }
                    </div>
                    <div className="ed-item">
                      {
                        `Archivo.${descriptionOfProblemFile.slice((descriptionOfProblemFile.lastIndexOf(".") - 1 >>> 0) + 2)}`
                      }
                      <UploadFile />
                    </div>
                  </div>
                  <footer className="s-bg-grey s-cross-center s-pxy-2 s-radius-br s-radius-bl">
                    <Link to={'/updatediag/' + uuid} className="button ghost accent-color s-to-right">Editar</Link>
                  </footer>
                </article>
              </div>
            ))
          : <p className="ed-item alert ">NO hay diagnosticos creados!</p>
        }
      </main>
    </>
  )
}

export default ListaDiagnosticos
