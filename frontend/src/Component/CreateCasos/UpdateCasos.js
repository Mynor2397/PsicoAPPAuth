import React, {Component} from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Navbar from '../Navbar/Navbar';
import {URLI} from '../../config/option'
import './Casos.scss'


export default class UpdateCasos extends Component {
  constructor(props) {
    super(props)

    this.state = {
      idCasos: this.props.match.params.idcases ,
      Cases: {
        uuid: '',
        caseNumber: '',
        uuidAssignedUser: '',
        uuidOwnerUser: '',
        uuidPersonPatient: '',
        creationDate: '',
        uuidStage: '',
        reasonForConsultation: '',
        desisted: ''
      },
      ckeditorComment: '',
      ownerUserInput:'',
      personPatientInput:'',
      stageInput:'',
      ownerUser: [],
      personPatient:[],
      stage: [],

    }
  }

  componentDidMount() {
    fetch(`${URLI}personpatient`)
		.then(rest => rest.json())
		.then(data => this.setState({ personPatient:data.data}))
    .catch(err => console.log(err))
    
    fetch(`${URLI}personuser`)
		.then(rest => rest.json())
		.then(data => this.setState({ownerUser:data.data}))
		.catch(err => console.log(err))

		fetch(`${URLI}stage/allstages`)
		.then(rest => rest.json())
		.then(data => this.setState({stage: data.data}) )
    .catch(err => console.log(err))

    fetch(`${URLI}case/viewcase/${this.state.idCasos}`)
		.then(rest => rest.json())
		.then(data => this.setState({Cases: {
      uuid: data.data[0].uuid,
      caseNumber: data.data[0].caseNumber,
      uuidAssignedUser: data.data[0].uuidAssignedUser,
      uuidOwnerUser: data.data[0].uuidOwnerUser,
      uuidPersonPatient: data.data[0].uuidPersonPatient,
      creationDate: data.data[0].creationDate,
      uuidStage: data.data[0].uuidStage,
      reasonForConsultation: data.data[0].reasonForConsultation,
      desisted: data.data[0].desisted
    }}) )
    .catch(err => console.log(err))
    
  }

  render(){
    
    // const history = useHistory()
    const handleSubmit = (e) => {
      e.preventDefault()
  
      const caso = {
        uuidAssignedUser: this.state.Cases.uuidAssignedUser,
        uuidOwnerUser: this.state.Cases.uuidOwnerUser,
        uuidPersonPatient: this.state.Cases.uuidPersonPatient,
        uuidStage: this.state.Cases.uuidStage,
        reasonForConsultation: this.state.ckeditorComment,
        desisted: 0
      }
  
 
  
      fetch(`${URLI}case/update/${this.state.idCasos}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(caso)
      }) 
      .then(rest => rest.json())
      .then(data => {
        if ( data.ok ) {
         alert('Sea Actualizado Correctamente')
        }
      } )
      .catch(err => console.error(err))
    }

    return (
      <>
      <div className="ed-grid mt-6">
        <div className="ed-item">
          <h1>Actualizar caso</h1>
          <hr/>
        </div>
        <div className="ed-item">
          <form onSubmit={handleSubmit} className="form">
            <div className="ed-item">
              <label htmlFor="">
                OwnerUser
                </label>
                <select 
                  name="uuidOwnerUser" 
                  className="select-css" 
                  id=""
                  value={this.state.Cases.uuidOwnerUser}
                  onChange={(env) => this.setState({Cases:{
                    uuidOwnerUser: env.target.value,
                    uuidAssignedUser: this.state.Cases.uuidAssignedUser,
                    uuidPersonPatient: this.state.Cases.uuidPersonPatient,
                    uuidStage: this.state.Cases.uuidStage,
                    reasonForConsultation: this.state.Cases.reasonForConsultation,
                    desisted: 0
                  }
                  })}
                >
                  <option value="0">Selecione Estado</option>
                  {
                    this.state.ownerUser.map(({uuid,userName}) => (
                      <option key={uuid} value={uuid}>{userName}</option>
                    ))
                  }
              </select>
                
            </div>
            <div className="ed-item">
              <label htmlFor="">
                PersonPatient
              </label>
              <select 
                className="select-css" 
                name="uuidPersonPatient" 
                id=""
                value={this.state.Cases.uuidPersonPatient}
                onChange={(env) => this.setState({Cases:{
                  uuidOwnerUser: this.state.Cases.uuidOwnerUser ,
                  uuidAssignedUser: this.state.Cases.uuidAssignedUser,
                  uuidPersonPatient: env.target.value,
                  uuidStage: this.state.Cases.uuidStage,
                  reasonForConsultation: this.state.Cases.reasonForConsultation,
                  desisted: 0
                }})}
              >
                <option value="0">Selecione Estado</option>
                {
                  this.state.personPatient.map(({uuid,name}) => (
                    <option key={uuid} value={uuid}>{name}</option>
                  ))
                }
              </select>
            </div>
            <div className="ed-item">
              <label htmlFor="">
                Stage
              </label>
              <select 
                className="select-css" 
                name="uuidStage" 
                id=""
                value={this.state.Cases.uuidStage}
                onChange={(env) => this.setState({Cases:{
                  uuidOwnerUser: this.state.Cases.uuidOwnerUser ,
                  uuidAssignedUser: this.state.Cases.uuidAssignedUser,
                  uuidPersonPatient: this.state.Cases.uuidPersonPatient,
                  uuidStage: env.target.value,
                  reasonForConsultation: this.state.Cases.reasonForConsultation,
                  desisted: 0
                }})}
              >
                <option value="0">Selecione Estado</option>
                {
                  this.state.stage.map(({uuid, name}) => (
                    <option key={uuid} value={uuid}>{name}</option>
                  ))
                }
              </select>
              <div className="message-error"></div>
            </div>
            <div className="ed-item">
              <label htmlFor="">
                reasonForConsultation
              </label>
              <CKEditor
                editor={ClassicEditor}
                data={`${this.state.Cases.reasonForConsultation} `}
                onInit={editor => {
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  this.setState({ckeditorComment: data})
                }}
              />
            
            </div>
  
            <div className="ed-item">
              <button className="button1 mt-1" type='submit'>Crear Caso</button>
            </div>
          </form>
        </div>
      </div>
      </>
    )

  }

}