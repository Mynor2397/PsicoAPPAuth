import React, {useState, useEffect} from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import 'bootstrap/dist/css/bootstrap.min.css';


function Edad(FechaNacimiento) {

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

const Pantient = () => {

    const [CkeditorComment, setCkeditorComment] = useState('')
    const [Image, setImage] = useState()
    const [FechaNacimiento, setFechaNacimiento] = useState()
    const [Mostrar, setMostar] = useState()

  
    
    const handleSubmit = (e) => {
        e.preventDefault()

        console.log( Edad(FechaNacimiento) )

        let formData = new FormData()

        formData.append('firstName', e.target.firstName.value)
        formData.append('secondName', e.target.secondName.value)
        formData.append('lastName', e.target.lastName.value)
        formData.append('secondLastName', e.target.secondLastName.value)
        formData.append('marriedName', e.target.marriedName.value)
        formData.append('bornDate', FechaNacimiento)
        formData.append('mobilePhone', e.target.mobilePhone.value)
        formData.append('email', e.target.email22.value)
        formData.append('uuidReligion', e.target.uuidReligion.value)
        
        formData.append('firstNameFather', e.target.firstNameFather.value)
        formData.append('secondNameFather', e.target.secondNameFather.value)
        formData.append('lastNameFather', e.target.lastNameFather.value)
        formData.append('secondLastNameFather', e.target.secondLastNameFather.value)
        formData.append('firstNameMother', e.target.firstNameMother.value)
        formData.append('secondNameMother', e.target.secondNameMother.value)
        formData.append('lastNameMother', e.target.lastNameMother.value)
        formData.append('secondLastNameMother', e.target.secondLastNameMother.value)
        formData.append('firstNameExtra', e.target.firstNameExtra.value)
        formData.append('secondNameExtra', e.target.secondNameExtra.value)
        formData.append('lastNameExtra', e.target.lastNameExtra.value)
        formData.append('secondLastNameExtra', e.target.secondLastNameExtra.value)
        
        formData.append('uuidCity', e.target.uuidCity.value)
        formData.append('addressLine1', e.target.addressLine1.value)
        formData.append('addressLine2', e.target.addressLine2.value)
        formData.append('phoneNumber', e.target.phoneNumber.value)
        
        formData.append('comment', CkeditorComment)
        formData.append('attachment', Image )

        console.log(formData.getAll('bornDate'))

        fetch('http://localhost:4000/person/create', {
            method: 'POST',
            // headers: {
            //     "Content-Type": "multipart/form-data",
            //     "Accept": "application/json",
            //     "type": "formData"
            // },
            body: formData
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))

    }

    useEffect(()=> {
        const edad = Edad(FechaNacimiento)

        if(edad >=18 ) {
            setMostar(false)
        }else {
            setMostar(true)
        }

    },[FechaNacimiento])

    // useEffect(() => {
    //     fetch('http://localhost:4000/religion/all')
    // }, [input])

    return (
        <div class="container">
            <h4>Datos del Paciente</h4>
            <form onSubmit={(e) => handleSubmit(e)} >
                <div class="bloqueiz">
                    <div class="form-group">
                        <label htmlFor="firstName">Primer Nombre:</label>
                        <input id="firstName" type="text" name="firstName" placeholder="Primer Nombre" class="form-control-file" />
                    </div>
                    <div class="form-group">
                        <label htmlFor="lastName">Primer Apellido</label>
                        <input id="lastName" type="text" name="lastName" placeholder="Primer Apellido" class="form-control-file" />
                    </div>
                    
                    <div class="form-group">
                        <label htmlFor="marriedName">Apellido de Casada</label>
                        <input id="marriedName" type="text" name="marriedName" class="form-control-file" placeholder="Apellido de Casada"  />
                    </div>
                    <div class="form-group">
                        <label htmlFor="bornDate">Fecha de Nacimiento</label>
                        <input id="bornDate" type="date" class="form-control-file" onChange={(e) => setFechaNacimiento(e.target.value) } />
                    </div>
                    <div class="form-group">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" name="email22" class="form-control-file" placeholder="Email"  />
                    </div>
                    <div class="form-group">
                        <label htmlFor="addressLine1">Direccion 1</label>
                        <input id="ddressLine1" type="text" name="addressLine1" class="form-control-file" />
                    </div>
                    <div class="form-group">
                        <label htmlFor="uuidReligion">Religion</label>
                        <select  name="uuidReligion" class="form-control-file">
                            <option value="0">Seleccionar un valor</option>
                            <option value="001">Valor 1</option>
                        </select>
                    </div>
                    
                </div>
                <div class="bloquede">
                <div class="form-group">
                    <label htmlFor="secondName">Segundo Nombre</label>
                    <input id="secondName" type="text" name="secondName" placeholder="Segundo Nombre Nombre" class="form-control-file"  />
                    </div>
                    <div class="form-group">
                        <label htmlFor="secondLastName">Segundo Apellido</label>
                        <input id="secondLastName" type="text" name="secondLastName" placeholder="Segundo Apellido" class="form-control-file" />
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div class="form-group" >
                        <label htmlFor="mobilePhone">Numero de Telefono Movil</label>
                        <input id="mobilePhone" type="text" name="mobilePhone" class="form-control-file" placeholder="Numero de Telefono" />
                    </div>
                    <div class="form-group">
                        <label htmlFor="addressLine2">Direccion 2</label>
                        <input id="addressLine2" type="text" name="addressLine2" class="form-control-file" />
                    </div>
                    <div class="form-group">
                        <label htmlFor="uuidCity">Ciudad</label>
                        <select  name="uuidCity" class="form-control-file">
                            <option value="0">Seleccionar un valor</option>
                            <option value="001">Valor 1</option>
                        </select>
                    </div>
                </div>
                <hr></hr>
                <div class="bloqueiz2">
                    
                    <div class="form-group">
                        <label htmlFor="phoneNumber">Numero de Telefono</label>
                        <input id="phoneNumber" type="text" name="phoneNumber" class="form-control-file"  />
                    </div>
                    

                    <CKEditor
                            editor={ ClassicEditor }
                            data="<p>Escriba un Comentario por favor</p>"
                            onInit={ editor => {
                                // You can store the "editor" and use when it is needed.
                                console.log( 'Editor is ready to use!', editor );
                            } }
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();

                                setCkeditorComment(data)
                            } }
                        />

                    <label htmlFor="attachment">Archivo</label>
                    <input id="email" type="file" class="form-control-file" onChange={(e)=>setImage(e.target.files[0])} />
                </div>       
                <br></br>
                <div>
                    {
                        Mostrar 
                        ? <div>
                        <label htmlFor="firstNameFather">Primer Nombre del Padre</label>
                        <input id="firstNameFather" type="text" name="firstNameFather" placeholder="Primer Nombre del Padre" class="form-control-file" />

                        <label htmlFor="secondNameFather">Segundo Nombre del Padre</label>
                        <input id="secondNameFather" type="text" name="secondNameFather" placeholder="Segundo Nombre del Padre" class="form-control-file" />

                        <label htmlFor="lastNameFather">lastNameFather</label>
                        <input id="email" type="text" name="lastNameFather" class="form-control-file"  />

                        <label htmlFor="secondLastNameFather">secondLastNameFather</label>
                        <input id="email" type="text" name="secondLastNameFather" class="form-control-file"  />

                        <label htmlFor="firstNameExtra">firstNameExtra</label>
                        <input id="email" type="text" name="firstNameExtra" class="form-control-file"  />

                        <label htmlFor="lastNameExtra">lastNameExtra</label>
                        <input id="email" type="text" name="lastNameExtra" class="form-control-file"  />
                        
                        <label htmlFor="firstNameMother">firstNameMother</label>
                        <input id="email" type="text" name="firstNameMother" class="form-control-file"  />

                        <label htmlFor="secondNameMother">secondNameMother</label>
                        <input id="email" type="text" name="secondNameMother" class="form-control-file" />

                        <label htmlFor="lastNameMother">lastNameMother</label>
                        <input id="email" type="text" name="lastNameMother" class="form-control-file" />

                        <label htmlFor="secondLastNameMother">secondLastNameMother</label>
                        <input id="email" type="text" name="secondLastNameMother" class="form-control-file" />

                        <label htmlFor="secondNameExtra">secondNameExtra</label>
                        <input id="email" type="text" name="secondNameExtra" class="form-control-file" />

                        <label htmlFor="secondLastNameExtra">secondLastNameExtra</label>
                        <input id="email" type="text" name="secondLastNameExtra" class="form-control-file" />

                        
                    </div>
                    : <h1></h1>

                    }
                
                </div>    
                

                <button type="submit">Guardar Paciente</button>
            </form>
        </div>
        
    )
}

export default Pantient