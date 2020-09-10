import React, {useState, useEffect} from 'react'
import './Style.step.scss'


const Step2 = ({handlerStesp2}) => {

  const [firstNameFather, setFirstNameFather] = useState('')
  const [secondNameFather, setSecondNameFather] = useState('')
  const [lastNameFather, setLastNameFather] = useState('')
  const [secondLastNameFather, setSecondLastNameFather] = useState('')
  const [firstNameMother, setFirstNameMother] = useState('')
  const [secondNameMother, setSecondNameMother] = useState('')
  const [lastNameMother, setLastNameMother] = useState('')
  const [secondLastNameMother, setSecondLastNameMother] = useState('')
  const [firstNameExtra, setFirstNameExtra] = useState('')
  const [secondNameExtra, setSecondNameExtra] = useState('')
  const [lastNameExtra, setLastNameExtra] = useState('')
  const [secondLastNameExtra, setSecondLastNameExtra] = useState('')


  const aguardarStadoActual = () => {
    const step2Data = {
      firstNameFather,
      secondNameFather,
      lastNameFather,
      secondLastNameFather,
      firstNameMother,
      secondNameMother,
      lastNameMother,
      secondLastNameMother,
      firstNameExtra,
      secondNameExtra,
      lastNameExtra,
      secondLastNameExtra
    }

    localStorage.setItem('step2', JSON.stringify(step2Data))
  }

  const obtenerEstadoActual = () => {
    const {
      firstNameFather,
      secondNameFather,
      lastNameFather,
      secondLastNameFather,
      firstNameMother,
      secondNameMother,
      lastNameMother,
      secondLastNameMother,
      firstNameExtra,
      secondNameExtra,
      lastNameExtra,
      secondLastNameExtra
    } = JSON.parse(localStorage.getItem('step2'))

    setFirstNameFather(firstNameFather)
    setSecondNameFather(secondNameFather)
    setLastNameFather(lastNameFather)
    setSecondLastNameFather(secondLastNameFather)
    setFirstNameMother(firstNameMother)
    setSecondNameMother(secondNameMother)
    setLastNameMother(lastNameMother)
    setSecondLastNameMother(secondLastNameMother)
    setFirstNameExtra(firstNameExtra)
    setSecondNameExtra(secondNameExtra)
    setLastNameExtra(lastNameExtra)
    setSecondLastNameExtra(secondLastNameExtra)
    
  }



  useEffect(() => {

    const data = localStorage.getItem('step2')
    if(data) {
      if(data, firstNameFather) {
        aguardarStadoActual()
      }else {
        obtenerEstadoActual()
      }
    }else {
      aguardarStadoActual()
    }

    if(firstNameFather) {
      handlerStesp2({
        firstNameFather,
        secondNameFather,
        lastNameFather,
        secondLastNameFather,
        firstNameMother,
        secondNameMother,
        lastNameMother,
        secondLastNameMother,
        firstNameExtra,
        secondNameExtra,
        lastNameExtra,
        secondLastNameExtra
      })
    }

   
  }, [
    firstNameFather,
    secondNameFather,
    lastNameFather,
    secondLastNameFather,
    firstNameMother,
    secondNameMother,
    lastNameMother,
    secondLastNameMother,
    firstNameExtra,
    secondNameExtra,
    lastNameExtra,
    secondLastNameExtra,
    handlerStesp2
  ])

  return (
    <div className="ed-container">
      <div className="ed-item ed-container">
        <div className="ed-item s-50">
<<<<<<< HEAD
          <label htmlFor="firstNameFather">Primer Nombre del Padre</label>
          <input placeholder="Primer Nombre del Padre"
=======
          <label htmlFor="firstNameFather">firstNameFather</label>
          <input 
>>>>>>> master
            id="firstNameFather" 
            type="text"
            onChange={(env) => setFirstNameFather(env.target.value)} 
            name="firstNameFather"
            value={firstNameFather}
          />
        </div>
        <div className="ed-item s-50">
<<<<<<< HEAD
          <label htmlFor="secondNameFather">Segundo Nombre del Padre</label>
          <input placeholder="Segundo Nombre del Padre"
=======
          <label htmlFor="secondNameFather">secondNameFather</label>
          <input 
>>>>>>> master
            id="secondNameFather" 
            type="text"
            onChange={(env) => setSecondNameFather(env.target.value)} 
            name="secondNameFather" 
            value={secondNameFather}
          />
        </div>
      </div>
      <div className="ed-item ed-container">
        <div className="ed-item s-50">
<<<<<<< HEAD
          <label htmlFor="lastNameFather">Primer Apellido del Padre</label>
          <input placeholder="Primer Apellido del Padre"
=======
          <label htmlFor="lastNameFather">lastNameFather</label>
          <input 
>>>>>>> master
            id="lastNameFather" 
            type="text"
            onChange={(env) => setLastNameFather(env.target.value)} 
            name="lastNameFather" 
            value={lastNameFather}
          />
        </div>
        <div className="ed-item s-50">
<<<<<<< HEAD
          <label htmlFor="secondLastNameFather">Segundo Apellido del Padre</label>
          <input placeholder="Segundo Apellido del Padre"
=======
          <label htmlFor="secondLastNameFather">secondLastNameFather</label>
          <input 
>>>>>>> master
            id="secondLastNameFather" 
            type="text"
            onChange={(env) => setSecondLastNameFather(env.target.value)} 
            name="secondLastNameFather"
            value={secondLastNameFather} 
          />
        </div>
      </div>

      <div className="ed-item ed-container">
        <div className="ed-item s-50">
<<<<<<< HEAD
          <label htmlFor="firstNameMother">Primer Nombre de la Madre</label>
          <input placeholder="Primer Nombre de la Madre"
=======
          <label htmlFor="firstNameMother">firstNameMother</label>
          <input 
>>>>>>> master
            id="firstNameMother" 
            type="text"
            onChange={(env) => setFirstNameMother(env.target.value)} 
            name="firstNameMother" 
            value={firstNameMother}
          />
        </div>
        <div className="ed-item s-50">
<<<<<<< HEAD
          <label htmlFor="secondNameMother">Segundo Nombre de la Madre </label>
          <input placeholder="Segundo Nombre de la Madre"
=======
          <label htmlFor="secondNameMother">secondNameMother</label>
          <input 
>>>>>>> master
            id="secondNameMother" 
            type="text"
            onChange={(env) => setSecondNameMother(env.target.value)} 
            name="secondNameMother" 
            value={secondNameMother}
          />
        </div>
      </div>
      <div className="ed-item ed-container">
        <div className="ed-item s-50">
<<<<<<< HEAD
          <label htmlFor="lastNameMother">Primer Apellido de la Madre</label>
          <input  placeholder="Primer Apellido de la Madre"
=======
          <label htmlFor="lastNameMother">lastNameMother</label>
          <input  
>>>>>>> master
            id="lastNameMother" 
            type="text"
            onChange={(env) => setLastNameMother(env.target.value)} 
            name="lastNameMother" 
            value={lastNameMother}
          />
        </div>
        <div className="ed-item s-50">
<<<<<<< HEAD
          <label htmlFor="secondLastNameMother">Segundo Apellido de la Madre</label>
          <input placeholder="Segundo Apellido de la Madre"
=======
          <label htmlFor="secondLastNameMother">secondLastNameMother</label>
          <input 
>>>>>>> master
            id="secondLastNameMother" 
            type="text"
            onChange={(env) => setSecondLastNameMother(env.target.value)} 
            name="secondLastNameMother" 
            value={secondLastNameMother}
          />
        </div>
      </div>
      <div className="ed-item ed-container">
        <div className="ed-item s-50">
<<<<<<< HEAD
          <label htmlFor="firstNameExtra">Primer Nombre Extra</label>
          <input placeholder="Primer Nombre Extra"
=======
          <label htmlFor="firstNameExtra">firstNameExtra</label>
          <input 
>>>>>>> master
            id="firstNameExtra" 
            type="text"
            onChange={(env) => setFirstNameExtra(env.target.value)} 
            name="firstNameExtra" 
            value={firstNameExtra}
          />
        </div>
        <div className="ed-item s-50">
<<<<<<< HEAD
          <label htmlFor="secondNameExtra">Segundo Nombre Extra</label>
          <input placeholder="Segundo Nombre Extra"
=======
          <label htmlFor="secondNameExtra">secondNameExtra</label>
          <input 
>>>>>>> master
            id="secondNameExtra" 
            type="text"
            onChange={(env) => setSecondNameExtra(env.target.value)} 
            name="secondNameExtra" 
            value={secondNameExtra}
          />
        </div>
      </div>

      <div className="ed-item ed-container">
        <div className="ed-item s-50">
<<<<<<< HEAD
          <label htmlFor="lastNameExtra">Primer Apellido Extra</label>
          <input placeholder="Primer Apellido Extra"
=======
          <label htmlFor="lastNameExtra">lastNameExtra</label>
          <input 
>>>>>>> master
            id="lastNameExtra" 
            type="text"
            onChange={(env) => setLastNameExtra(env.target.value)} 
            name="lastNameExtra" 
            value={lastNameExtra}
          />
        </div>
        <div className="ed-item s-50">
<<<<<<< HEAD
          <label htmlFor="secondLastNameExtra">Segundo Apellido Extra </label>
          <input placeholder="Segundo Apellido Extra"
=======
          <label htmlFor="secondLastNameExtra">secondLastNameExtra</label>
          <input 
>>>>>>> master
            id="secondLastNameExtra" 
            type="text"
            onChange={(env) => setSecondLastNameExtra(env.target.value)} 
            name="secondLastNameExtra" 
            value={secondLastNameExtra}
          />
        </div>
      </div>
    </div>
  )
}

export default Step2