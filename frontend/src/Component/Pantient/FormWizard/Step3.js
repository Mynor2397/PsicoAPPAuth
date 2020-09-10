import React, {useState, useEffect} from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Step3 = ({handlerStesp3}) => {

  const [uuidCity, setUuidCity] = useState('')
  const [addressLine1, setAddressLine1] = useState('')
  const [addressLine2, setAddressLine2] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [CkeditorComment, setCkeditorComment] = useState('')
  const [Image, setImage] = useState('')
  const [city, setCity] = useState([])

  const aguardarStadoActual = () => {
    const step3Data = {
      uuidCity,
      addressLine1,
      addressLine2,
      phoneNumber,
      CkeditorComment
    }

    localStorage.setItem('step3', JSON.stringify(step3Data))
  }

  const obtenerEstadoActual = () => {
    const {
      uuidCity,
      addressLine1,
      addressLine2,
      phoneNumber,
      CkeditorComment,
    } = JSON.parse(localStorage.getItem('step3'))

    setUuidCity(uuidCity)
    setAddressLine1(addressLine1)
    setAddressLine2(addressLine2)
    setPhoneNumber(phoneNumber)
    setCkeditorComment(CkeditorComment)
  }


  useEffect(()=> {

    const data = localStorage.getItem('step3')
    if(data) {
      if(uuidCity) {
        aguardarStadoActual()
      }else {
        obtenerEstadoActual()
      }
    }else {
      aguardarStadoActual()
    }

    if (Image || addressLine1) {
      handlerStesp3({
        uuidCity,
        addressLine1,
        addressLine2,
        phoneNumber,
        CkeditorComment,
        Image
      })
    }
  },[
    uuidCity,
    addressLine1,
    addressLine2,
    phoneNumber,
    CkeditorComment,
    Image
  ])

  useEffect(()=> {
    fetch('http://localhost:4000/city/all')
    .then(res => res.json())
    .then(data => setCity(data.data))
    .catch(err => console.log(err))
  },[])




  return (
    <div>
      <label htmlFor="uuidCity">uuidCity</label>
      <select 
      name="uuidCity"
      value={uuidCity}
      onChange={(env) => setUuidCity(env.target.value)}
      >
        <option value=" ">Seleccionar un valor</option>
        {
          city.map(({uuid, name}) => (
            <option key={uuid} value={uuid}>{name}</option>
          ))
        }
      </select>

      <label htmlFor="addressLine1">addressLine1</label>
      <input 
        id="addressLine1" 
        type="text" 
        name="addressLine1"
        value={addressLine1}
        onChange={(env)=> setAddressLine1(env.target.value)} 
      />

      <label htmlFor="addressLine2">addressLine2</label>
      <input 
        id="addressLine2" 
        type="text" 
        name="addressLine2" 
        value={addressLine2}
        onChange={(env) => setAddressLine2(env.target.value)}
      />

      <label htmlFor="phoneNumber">phoneNumber</label>
      <input 
        id="phoneNumber" 
        type="text" 
        name="phoneNumber" 
        value={phoneNumber}
        onChange={(env)=> setPhoneNumber(env.target.value)}
      />

      <CKEditor
        editor={ClassicEditor}
        data={CkeditorComment}
        onInit={editor => {
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setCkeditorComment(data)
        }}
      />

      <label htmlFor="attachment">attachment</label>
      <input 
        id="attachment" 
        type="file" 
        onChange={(env) => setImage(env.target.value)}
      />
    </div>
  )
}

export default Step3