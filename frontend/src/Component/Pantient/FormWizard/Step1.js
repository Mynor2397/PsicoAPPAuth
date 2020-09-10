import React, {useState, useEffect} from 'react'

const Step1 = ({handlerStesp1}) => {

  const [firstName, setFirstName] = useState('')
  const [secondName, setSecondName] = useState('')
  const [lastName, setLastName] = useState('')
  const [secondLastName, setSecondLastName] = useState('')
  const [marriedName, setMarriedName] = useState('')
  const [FechaNacimiento, setFechaNacimiento] = useState('')
  const [mobilePhone, setMobilePhone] = useState('')
  const [email, setEmail] = useState('')
  const [uuidReligion, setUuidReligion] = useState('')



  const aguardarStadoActual = () => {
    const step1Data = {
      firstName,
      secondName, 
      lastName,
      secondLastName,
      marriedName,
      FechaNacimiento,
      mobilePhone,
      email,
      uuidReligion
    }

    localStorage.setItem('step1', JSON.stringify(step1Data))
  }

  const obtenerEstadoActual = () => {
    const {
      firstName,
      secondName, 
      lastName,
      secondLastName,
      marriedName,
      FechaNacimiento,
      mobilePhone,
      email,
      uuidReligion
    } = JSON.parse(localStorage.getItem('step1'))

    setFirstName(firstName)
    setSecondName(secondName)
    setLastName(lastName)
    setSecondLastName(secondLastName)
    setMarriedName(marriedName)
    setFechaNacimiento(FechaNacimiento)
    setMobilePhone(mobilePhone)
    setEmail(email)
    setUuidReligion(uuidReligion)
  }

  useEffect(() => {
    const data = localStorage.getItem('step1')
    if(data) {
      if(data, firstName) {
        aguardarStadoActual()
      }else {
        obtenerEstadoActual()
      }
    }else {
      aguardarStadoActual()
    }
    
    if(firstName) {
      handlerStesp1({
        firstName,
        secondName, 
        lastName,
        secondLastName,
        marriedName,
        FechaNacimiento,
        mobilePhone,
        email,
        uuidReligion
      })
    }


  }, [
    firstName,
    secondName, 
    lastName,
    secondLastName,
    marriedName,
    FechaNacimiento,
    mobilePhone,
    email,
    uuidReligion,
    handlerStesp1,
    aguardarStadoActual
  ])

  return (
    <div className ="ed-container">
      <label htmlFor="firstName">firstName</label>
      <input 
        id="firstName" 
        type="text" 
        name="firstName"  
        onChange={(env)=> setFirstName(env.target.value)} 
        value={firstName}
      />

      <label htmlFor="secondName">secondName</label>
      <input 
        id="secondName" 
        type="text" 
        name="secondName" 
        onChange={(env)=> setSecondName(env.target.value)} 
        value={secondName}
      />

      <label htmlFor="lastName">lastName</label>
      <input 
        id="lastName" 
        type="text" 
        name="lastName" 
        onChange={(env)=> setLastName(env.target.value)} 
        value={lastName}
      />

      <label htmlFor="secondLastName">secondLastName</label>
      <input 
        id="secondLastName" 
        type="text" name="secondLastName" 
        onChange={(env)=> setSecondLastName(env.target.value)} 
        value={secondLastName}
      />

      <label htmlFor="marriedName">marriedName</label>
      <input 
        id="marriedName" 
        type="text" 
        name="marriedName" 
        onChange={(env)=> setMarriedName(env.target.value)} 
        value={marriedName}
      />

      <label htmlFor="bornDate">bornDate</label>
      <input 
        id="bornDate" 
        type="date" 
        onChange={(env)=> setFechaNacimiento(env.target.value)}  
        value={FechaNacimiento}
      />

      <label htmlFor="mobilePhone">mobilePhone</label>
      <input 
        id="mobilePhone" 
        type="text" 
        name="mobilePhone" 
        onChange={(env) => setMobilePhone(env.target.value)} 
        value={mobilePhone}
      />

      <label htmlFor="email">email</label>
      <input 
        id="email" 
        type="email" 
        name="email22" 
        onChange={(env) => setEmail(env.target.value)} 
        value={email}
      />

      <label htmlFor="uuidReligion" >uuidReligion</label>
      <select 
        value={uuidReligion} 
        name="uuidReligion" 
        onChange={(env)=> setUuidReligion(env.target.value)}
      >
        <option value="0">Seleccionar un valor</option>
        <option value="001">Valor 1</option>
      </select>

    </div>
  )
}

export default Step1