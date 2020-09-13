import React, { useState, useEffect } from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Redirect } from 'react-router-dom';
import './Styles.pantient.scss'
import './Style.step.scss'
import Navbar from '../Navbar/Navbar';

export default class MasterForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      IdPantient: this.props.match.params.idpantients  || '1',
      uuidPerson: '',
      active: '',
      currentStep: 1,
      firstName: '',
      secondName: '',
      lastName: '',
      secondLastName: '',
      marriedName: '',
      bornDate: '',
      mobilePhone: '',
      email: '',
      uuidReligion: '',
      firstNameFather: '',
      secondNameFather: '',
      lastNameFather: '',
      secondLastNameFather: '',
      firstNameMother: '',
      secondNameMother: '',
      lastNameMother: '',
      secondLastNameMother: '',
      firstNameExtra: '',
      secondNameExtra: '',
      lastNameExtra: '',
      secondLastNameExtra: '',
      uuidCity: '',
      addressLine1: '',
      addressLine2: '',
      phoneNumber: '',
      comment: '',
      attachment: '',
      Edad: 9,
      City: [],
      Religion: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:4000/city/all')
      .then(res => res.json())
      .then(data => this.setState({ City: data.data }))
      .catch(err => console.log(err))

    fetch('http://localhost:4000/religion/all')
      .then(res => res.json())
      .then(data => this.setState({ Religion: data.data }))
      .catch(err => console.log(err))

    if(this.state.IdPantient !== '1') {
      fetch(`http://localhost:4000/getonly/${this.state.IdPantient}`)
      .then(res => res.json())
      .then(data =>{
        console.log(data.data[0].lastName)
       this.setState({
        uuidPerson: data.data[0].uuidPerson,
        id: data.data[0].id,    
        firstName: data.data[0].firstName,    
        lastName: data.data[0].lastName,    
        secondLastName: data.data[0].secondLastName,    
        marriedName: data.data[0].marriedName,    
        bornDate: data.data[0].bornDate,    
        uuidRole: data.data[0].uuidRole,    
        mobilePhone: data.data[0].mobilePhone,   
        email: data.data[0].email,    
        uuidReligion: data.data[0].uuidReligion, 
        firstNameFather: data.data[0].firstNameFather,    
        secondNameFather: data.data[0].secondNameFather,    
        lastNameFather: data.data[0].lastNameFather,    
        secondLastNameFather: data.data[0].secondLastNameFather,    
        firstNameMother: data.data[0].firstNameMother,    
        secondNameMother: data.data[0].secondNameMother,    
        lastNameMother: data.data[0].lastNameMother,    
        secondLastNameMother: data.data[0].secondLastNameMother,    
        firstNameExtra: data.data[0].firstNameExtra,    
        secondNameExtra: data.data[0].secondNameExtra,   
        lastNameExtra: data.data[0].lastNameExtra,    
        secondLastNameExtra: data.data[0].secondLastNameExtra,    
        attachment: data.data[0].attachment, 
        comment: data.data[0].comment,  
        uuidCity: data.data[0].uuidCity,    
        addressLine1: data.data[0].addressLine1,     
        addressLine2: data.data[0].addressLine2,   
        phoneNumber: data.data[0].phoneNumber,  
        active: data.data[0].active
      })})
      .catch(err => console.log(err))
    }  
  }

  handleChange = event => {

    if(event.is) {
      const { name, value } = event
      if (name === 'bornDate') {
        this.setState({ Edad: this.EdadF(value) })
      }
  
      this.setState({
        [name]: value
      })

    }else {

      const { name, value } = event.target

      if (name === 'bornDate') {
        this.setState({ Edad: this.EdadF(value) })
      }

      if(name === 'attachment') {
        const value1 = event.target.files[0]
        this.setState({
          [name]: value1
        })
      }else {
        this.setState({
          [name]: value
        })
      }

  
  
    }
    
  }

  EdadF(FechaNacimiento) {

    var fechaNace = new Date(FechaNacimiento);
    var fechaActual = new Date()

    var mes = fechaActual.getMonth();
    var dia = fechaActual.getDate();
    var año = fechaActual.getFullYear();

    fechaActual.setDate(dia);
    fechaActual.setMonth(mes);
    fechaActual.setFullYear(año);

    var edad = Math.floor(((fechaActual - fechaNace) / (1000 * 60 * 60 * 24) / 365));

    return edad;
  }

  handleSubmit = event => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('firstName',this.state.firstName)
    formData.append('secondName',this.state.secondName)
    formData.append('lastName',this.state.lastName)
    formData.append('secondLastName',this.state.secondLastName)
    formData.append('marriedName',this.state.marriedName)
    formData.append('bornDate',this.state.bornDate)
    formData.append('mobilePhone',this.state.mobilePhone)
    formData.append('email',this.state.email)
    formData.append('uuidReligion',this.state.uuidReligion)
    formData.append('firstNameFather',this.state.firstNameFather)
    formData.append('secondNameFather',this.state.secondNameFather)
    formData.append('lastNameFather',this.state.lastNameFather)
    formData.append('secondLastNameFather',this.state.secondLastNameFather)
    formData.append('firstNameMother',this.state.firstNameMother)
    formData.append('secondNameMother',this.state.secondNameMother)
    formData.append('lastNameMother',this.state.lastNameMother)
    formData.append('secondLastNameMother',this.state.secondLastNameMother)
    formData.append('firstNameExtra',this.state.firstNameExtra)
    formData.append('secondNameExtra',this.state.secondNameExtra)
    formData.append('lastNameExtra',this.state.lastNameExtra)
    formData.append('secondLastNameExtra',this.state.secondLastNameExtra)
    formData.append('uuidCity',this.state.uuidCity)
    formData.append('addressLine1',this.state.addressLine1)
    formData.append('addressLine2',this.state.addressLine2)
    formData.append('phoneNumber',this.state.phoneNumber)
    formData.append('comment',this.state.comment)
    formData.append('attachment',this.state.attachment)

    fetch('http://localhost:4000/person/create', {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(data => {
        console.log(data.ok)
        
        if(data.ok){
          return <Redirect to="/pantient" />
        }
    })
    .catch(err => console.log(err))

  }

  _next = () => {
    let currentStep = this.state.currentStep
    console.log(this.state.Edad)
    if (this.state.Edad >= 18) {
      currentStep = currentStep >= 1 ? 3 : currentStep + 1
    } else {
      currentStep = currentStep >= 2 ? 3 : currentStep + 1
    }
    this.setState({
      currentStep: currentStep
    })
  }

  _prev = () => {
    let currentStep = this.state.currentStep
    if (this.state.Edad >= 18) {
      currentStep = currentStep === 3 ? 1 : currentStep - 1
    } else {
      currentStep = currentStep <= 1 ? 1 : currentStep - 1
    }
    this.setState({
      currentStep: currentStep
    })
  }

  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-secondary"
          type="button" onClick={this._prev}>
          Regresar
        </button>
      )
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button" onClick={this._next}>
          Siguiente
        </button>
      )
    }
    return null;
  }

  render() {
    console.log(this.state.lastName)
    return (
      <React.Fragment>
        <Navbar />
        <div className="ed-container mt-6">
          <div className="ed-item">
            <h1>Crear pacientes</h1>
            {
              this.state.Edad >= 18 
              ?
                <p>Etapa {this.state.currentStep-1} </p>  
              :
                <p>Etapa {this.state.currentStep} </p>
            }
          </div>
        </div>
            <form className="ed-container mb-6" onSubmit={this.handleSubmit}>
              <Step1
                Religion={this.state.Religion}
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                firstName={this.state.firstName}
                secondName={this.state.secondName}
                lastName={this.state.lastName}
                secondLastName={this.state.secondLastName}
                marriedName={this.state.marriedName}
                bornDate={this.state.bornDate}
                mobilePhone={this.state.mobilePhone}
                email={this.state.email}
                uuidReligio={this.state.uuidReligio}
              />

              <Step2
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                firstNameFather={this.state.firstNameFather}
                secondNameFather={this.state.secondNameFather}
                lastNameFather={this.state.lastNameFather}
                secondLastNameFather={this.state.secondLastNameFather}
                firstNameMother={this.state.firstNameMother}
                secondNameMother={this.state.secondNameMother}
                lastNameMother={this.state.lastNameMother}
                secondLastNameMother={this.state.secondLastNameMother}
                firstNameExtra={this.state.firstNameExtra}
                secondNameExtra={this.state.secondNameExtra}
                lastNameExtra={this.state.lastNameExtra}
                secondLastNameExtra={this.state.secondLastNameExtra}
              />

              <Step3
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                City={this.state.City}
                uuidCity={this.state.uuidCity}
                addressLine1={this.state.addressLine1}
                addressLine2={this.state.addressLine2}
                phoneNumber={this.state.phoneNumber}
                comment={this.state.comment}
                attachment={this.state.attachment}
              />
              {this.previousButton()}
              {this.nextButton()}

            </form>


      </React.Fragment>
    );
  }
}

function Step1({
  Religion,
  currentStep,
  handleChange,
  firstName,
  secondName,
  lastName,
  secondLastName,
  marriedName,
  bornDate,
  mobilePhone,
  email,
  uuidReligio
}) {
  if (currentStep !== 1) {
    return null
  }
  return (
    <>
        <div className="ed-item ed-container">
          <div className="ed-item s-100 m-50">
            <label htmlFor="firstName">Primer Nombre</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Primer Nombre"
              value={firstName}
              onChange={handleChange}
            />
          </div>

          <div className="ed-item s-100 m-50">
            <label htmlFor="secondName">Segundo Nombre</label>
            <input placeholder="Segundo Nombre"
              id="secondName"
              type="text"
              name="secondName"
              onChange={handleChange}
              value={secondName}
            />
          </div>
        </div>

        <div className="ed-item ed-container">
          <div className="ed-item s-100 m-50">
            <label htmlFor="lastName">Primer Apellido</label>
            <input placeholder="Primer Apellido"
              id="lastName"
              type="text"
              name="lastName"
              onChange={handleChange}
              value={lastName}
            />
          </div>
          <div className="ed-item s-100 m-50">
            <label htmlFor="secondLastName">Segundo Apellido</label>
            <input placeholder="Segundo Apellido"
              id="secondLastName"
              type="text" name="secondLastName"
              onChange={handleChange}
              value={secondLastName}
            />
          </div>
        </div>

        <div className="ed-item ed-container">
          <div className="ed-item s-100 m-50">
            <label htmlFor="marriedName">Apllido de Casada</label>
            <input placeholder="Apellido de Casada"
              id="marriedName"
              type="text"
              name="marriedName"
              onChange={handleChange}
              value={marriedName}
            />
          </div>
          <div className="ed-item s-100 m-50">
            <label htmlFor="bornDate">Fecha de Nacimiento</label>
            <input
              id="bornDate"
              type="date"
              name="bornDate"
              onChange={handleChange}
              value={bornDate}
            />
          </div>
        </div>

        <div className="ed-item ed-container">
          <div className="ed-item s-100 m-50">
            <label htmlFor="mobilePhone">Número de Teléfono</label>
            <input placeholder="Número de Teléfono"
              id="mobilePhone"
              type="text"
              name="mobilePhone"
              onChange={handleChange}
              value={mobilePhone}
            />
          </div>
          <div className="ed-item s-100 m-50">
            <label htmlFor="email">Dirección de Email</label>
            <input placeholder="Email"
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="ed-item s-100 m-50">
            <label htmlFor="uuidReligion" >Religion </label>
            <select className="select-css"
              value={uuidReligio}
              name="uuidReligion"
              onChange={handleChange}
            >
              <option value="0">Seleccionar un valor</option>
              {
                Religion.map(({ uuid, name }) => (
                  <option key={uuid} value={uuid}>{name}</option>
                ))
              }
            </select>
          </div>
        </div>
    </>
  );
}

function Step2({
  currentStep,
  handleChange,
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
}) {

  if (currentStep !== 2) {
    return null
  }

  return (
    <div className="form-group">

      <div className="ed-container">
        <div className="ed-item ed-container">
          <div className="ed-item s-100 m-50">
            <label htmlFor="firstNameFather">Primer Nombre del Padre</label>
            <input placeholder="Primer Nombre del Padre"
              id="firstNameFather"
              className="form-control"
              type="text"
              onChange={handleChange}
              name="firstNameFather"
              value={firstNameFather}
            />
          </div>
          <div className="ed-item s-100 m-50">
            <label htmlFor="secondNameFather">Segundo Nombre del Padre</label>
            <input placeholder="Segundo Nombre del Padre"
              id="secondNameFather"
              type="text"
              className="form-control"
              onChange={handleChange}
              name="secondNameFather"
              value={secondNameFather}
            />
          </div>
        </div>
        <div className="ed-item ed-container">
          <div className="ed-item s-100 m-50">
            <label htmlFor="lastNameFather">Primer Apellido del Padre</label>
            <input placeholder="Primer Apellido del Padre"
              id="lastNameFather"
              type="text"
              className="form-control"
              onChange={handleChange}
              name="lastNameFather"
              value={lastNameFather}
            />
          </div>
          <div className="ed-item s-100 m-50">
            <label htmlFor="secondLastNameFather">Segundo Apellido del Padre</label>
            <input placeholder="Segundo Apellido del Padre"
              id="secondLastNameFather"
              type="text"
              className="form-control"
              onChange={handleChange}
              name="secondLastNameFather"
              value={secondLastNameFather}
            />
          </div>
        </div>

        <div className="ed-item ed-container">
          <div className="ed-item s-100 m-50">
            <label htmlFor="firstNameMother">Primer Nombre de la Madre</label>
            <input placeholder="Primer Nombre de la Madre"
              id="firstNameMother"
              type="text"
              className="form-control"
              onChange={handleChange}
              name="firstNameMother"
              value={firstNameMother}
            />
          </div>
          <div className="ed-item s-100 m-50">
            <label htmlFor="secondNameMother">Segundo Nombre de la Madre </label>
            <input placeholder="Segundo Nombre de la Madre"
              id="secondNameMother"
              className="form-control"
              type="text"
              onChange={handleChange}
              name="secondNameMother"
              value={secondNameMother}
            />
          </div>
        </div>
        <div className="ed-item ed-container">
          <div className="ed-item s-100 m-50">
            <label htmlFor="lastNameMother">Primer Apellido de la Madre</label>
            <input placeholder="Primer Apellido de la Madre"
              id="lastNameMother"
              type="text"
              className="form-control"
              onChange={handleChange}
              name="lastNameMother"
              value={lastNameMother}
            />
          </div>
          <div className="ed-item s-100 m-50">
            <label htmlFor="secondLastNameMother">Segundo Apellido de la Madre</label>
            <input placeholder="Segundo Apellido de la Madre"
              id="secondLastNameMother"
              type="text"
              className="form-control"
              onChange={handleChange}
              name="secondLastNameMother"
              value={secondLastNameMother}
            />
          </div>
        </div>
        <div className="ed-item ed-container">
          <div className="ed-item s-100 m-50">
            <label htmlFor="firstNameExtra">Primer Nombre Extra</label>
            <input placeholder="Primer Nombre Extra"
              id="firstNameExtra"
              type="text"
              className="form-control"
              onChange={handleChange}
              name="firstNameExtra"
              value={firstNameExtra}
            />
          </div>
          <div className="ed-item s-100 m-50">
            <label htmlFor="secondNameExtra">Segundo Nombre Extra</label>
            <input placeholder="Segundo Nombre Extra"
              id="secondNameExtra"
              type="text"
              className="form-control"
              onChange={handleChange}
              name="secondNameExtra"
              value={secondNameExtra}
            />
          </div>
        </div>

        <div className="ed-item ed-container">
          <div className="ed-item s-100 m-50">
            <label htmlFor="lastNameExtra">Primer Apellido Extra</label>
            <input placeholder="Primer Apellido Extra"
              id="lastNameExtra"
              type="text"
              className="form-control"
              onChange={handleChange}
              name="lastNameExtra"
              value={lastNameExtra}
            />
          </div>
          <div className="ed-item s-100 m-50">
            <label htmlFor="secondLastNameExtra">Segundo Apellido Extra </label>
            <input placeholder="Segundo Apellido Extra"
              id="secondLastNameExtra"
              type="text"
              className="form-control"
              onChange={handleChange}
              name="secondLastNameExtra"
              value={secondLastNameExtra}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const Step3 = ({
  City,
  currentStep,
  handleChange,
  uuidCity,
  addressLine1,
  addressLine2,
  phoneNumber,
  comment,
  attachment
}) => {
  if (currentStep !== 3) {
    return null
  }

  return (
    <React.Fragment>
      <div className="form-group">

        <div className="ed-container">
          <div className="ed-item">

            <label htmlFor="uuidCity">Ciudad</label>
            <select className="select-css"
              name="uuidCity"
              value={uuidCity}
              onChange={handleChange}
            >
              <option value=" ">Seleccionar un valor</option>
              {
                City.map(({ uuid, name }) => (
                  <option key={uuid} value={uuid}>{name}</option>
                ))
              }
            </select>

            <label htmlFor="addressLine1">Dirección Principal</label>
            <input placeholder="Dirección Principal"
              id="addressLine1"
              type="text"
              name="addressLine1"
              value={addressLine1}
              onChange={handleChange}
            />

            <label htmlFor="addressLine2">Dirección Secundaria</label>
            <input placeholder="Dirección Secundaria"
              id="addressLine2"
              type="text"
              name="addressLine2"
              value={addressLine2}
              onChange={handleChange}
            />

            <label htmlFor="phoneNumber">Número de Teléfono</label>
            <input placeholder="Número de Teléfono"
              id="phoneNumber"
              type="text"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChange}
            />
            <label>Comentario </label>
            <CKEditor
              editor={ClassicEditor}
              data={comment}
              onInit={editor => {
              }}
              onChange={(event, editor) => {
                const data = {
                  value:editor.getData(),
                  is: true,
                  name:'comment'
                }
                
                handleChange(data)
              }}
            />

            <label htmlFor="attachment">Seleccione Archivo</label>
            <input
              id="attachment"
              type="file"
              name='attachment'
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <button className="btn btn-success btn-block form1">Crear Pacientes</button>
    </React.Fragment>
  );
}