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
      if(data, uuidCity) {
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




  return (
    <div>
<<<<<<< HEAD
      <label htmlFor="uuidCity">Ciudad</label>
      <select class="select-css"
=======
      <label htmlFor="uuidCity">uuidCity</label>
      <select 
>>>>>>> master
      name="uuidCity"
      value={uuidCity}
      onChange={(env) => setUuidCity(env.target.value)}
      >
        <option value="0">Seleccionar un valor</option>
        <option value="001">Valor 1</option>
      </select>

<<<<<<< HEAD
      <label htmlFor="addressLine1">Dirección Principal</label>
      <input placeholder="Dirección Principal"
=======
      <label htmlFor="addressLine1">addressLine1</label>
      <input 
>>>>>>> master
        id="addressLine1" 
        type="text" 
        name="addressLine1"
        value={addressLine1}
        onChange={(env)=> setAddressLine1(env.target.value)} 
      />

<<<<<<< HEAD
      <label htmlFor="addressLine2">Dirección Secundaria</label>
      <input placeholder="Dirección Secundaria"
=======
      <label htmlFor="addressLine2">addressLine2</label>
      <input 
>>>>>>> master
        id="addressLine2" 
        type="text" 
        name="addressLine2" 
        value={addressLine2}
        onChange={(env) => setAddressLine2(env.target.value)}
      />

<<<<<<< HEAD
      <label htmlFor="phoneNumber">Número de Teléfono</label>
      <input placeholder="Número de Teléfono"
=======
      <label htmlFor="phoneNumber">phoneNumber</label>
      <input 
>>>>>>> master
        id="phoneNumber" 
        type="text" 
        name="phoneNumber" 
        value={phoneNumber}
        onChange={(env)=> setPhoneNumber(env.target.value)}
      />
<<<<<<< HEAD
      <label>Comentario </label>
=======

>>>>>>> master
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

<<<<<<< HEAD
      <label htmlFor="attachment">Seleccione Archivo</label>
=======
      <label htmlFor="attachment">attachment</label>
>>>>>>> master
      <input 
        id="attachment" 
        type="file" 
        onChange={(env) => setImage(env.target.value)}
      />
    </div>
  )
}

export default Step3