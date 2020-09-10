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
      <label htmlFor="uuidCity">Ciudad</label>
      <select class="select-css"
      name="uuidCity"
      value={uuidCity}
      onChange={(env) => setUuidCity(env.target.value)}
      >
        <option value="0">Seleccionar un valor</option>
        <option value="001">Valor 1</option>
      </select>

      <label htmlFor="addressLine1">Dirección Principal</label>
      <input placeholder="Dirección Principal"
        id="addressLine1" 
        type="text" 
        name="addressLine1"
        value={addressLine1}
        onChange={(env)=> setAddressLine1(env.target.value)} 
      />

      <label htmlFor="addressLine2">Dirección Secundaria</label>
      <input placeholder="Dirección Secundaria"
        id="addressLine2" 
        type="text" 
        name="addressLine2" 
        value={addressLine2}
        onChange={(env) => setAddressLine2(env.target.value)}
      />

      <label htmlFor="phoneNumber">Número de Teléfono</label>
      <input placeholder="Número de Teléfono"
        id="phoneNumber" 
        type="text" 
        name="phoneNumber" 
        value={phoneNumber}
        onChange={(env)=> setPhoneNumber(env.target.value)}
      />
      <label>Comentario </label>
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

      <label htmlFor="attachment">Seleccione Archivo</label>
      <input 
        id="attachment" 
        type="file" 
        onChange={(env) => setImage(env.target.value)}
      />
    </div>
  )
}

export default Step3