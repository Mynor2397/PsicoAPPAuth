import React, {useState, useEffect} from 'react'

const Step1 = ({handlerStesp1,pantient}) => {

  console.log(pantient)
  
  const [firstName, setFirstName] = useState('')
  const [secondName, setSecondName] = useState('')
  const [lastName, setLastName] = useState('')
  const [secondLastName, setSecondLastName] = useState('')
  const [marriedName, setMarriedName] = useState('')
  const [FechaNacimiento, setFechaNacimiento] = useState('')
  const [mobilePhone, setMobilePhone] = useState('')
  const [email, setEmail] = useState('')
  const [uuidReligion, setUuidReligion] = useState('')
  
	const [religion, setReligion] = useState([])

  
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
  const aguardarStadoActual2 = () => {
    console.log('hola',pantient)
    setFirstName(pantient.firstName)
    setSecondName(pantient.secondName)
    setLastName(pantient.lastName)
    setSecondLastName(pantient.secondLastName)
    setMarriedName(pantient.marriedName)
    setFechaNacimiento(pantient.FechaNacimiento)
    setMobilePhone( pantient.mobilePhone)
    setEmail(pantient.email)
    setUuidReligion(pantient.uuidReligion)
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
      if(firstName) {
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

  useEffect(()=> {
    fetch('http://localhost:4000/religion/all')
			.then(res => res.json())
			.then(data => setReligion(data.data))
      .catch(err => console.log(err))

    if(pantient) {
      return () =>aguardarStadoActual2()
    }
  },[])


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
        <option value="">Seleccionar un valor</option>
        {
          religion.map(({uuid,name}) => (
            <option key={uuid} value={uuid}>{name}</option>
          ))
        }
      </select>

    </div>
  )
}

export default Step1