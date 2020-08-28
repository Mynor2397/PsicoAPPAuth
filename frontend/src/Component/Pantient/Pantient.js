import React, {useState, useEffect} from 'react'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


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

        <form onSubmit={(e) => handleSubmit(e)} >

            <label htmlFor="firstName">firstName</label>
            <input id="firstName" type="text" name="firstName"  />
    
            <label htmlFor="secondName">secondName</label>
            <input id="secondName" type="text" name="secondName"  />
    
            <label htmlFor="lastName">lastName</label>
            <input id="lastName" type="text" name="lastName"  />
    
            <label htmlFor="secondLastName">secondLastName</label>
            <input id="secondLastName" type="text" name="secondLastName"  />
    
            <label htmlFor="marriedName">marriedName</label>
            <input id="marriedName" type="text" name="marriedName"  />
    
            <label htmlFor="bornDate">bornDate</label>
            <input id="bornDate" type="date" onChange={(e) => setFechaNacimiento(e.target.value) } />
    
            <label htmlFor="mobilePhone">mobilePhone</label>
            <input id="mobilePhone" type="text" name="mobilePhone"  />
    
            <label htmlFor="email">email</label>
            <input id="email" type="email" name="email22"  />

            <label htmlFor="uuidReligion">uuidReligion</label>
            <select  name="uuidReligion">
                <option value="0">Seleccionar un valor</option>
                <option value="001">Valor 1</option>
            </select>
            {
                Mostrar 
                ? <div>
                <label htmlFor="firstNameFather">firstNameFather</label>
                <input id="email" type="text" name="firstNameFather"  />

                <label htmlFor="secondNameFather">secondNameFather</label>
                <input id="email" type="text" name="secondNameFather"  />

                <label htmlFor="lastNameFather">lastNameFather</label>
                <input id="email" type="text" name="lastNameFather"  />

                <label htmlFor="secondLastNameFather">secondLastNameFather</label>
                <input id="email" type="text" name="secondLastNameFather"  />

                <label htmlFor="firstNameMother">firstNameMother</label>
                <input id="email" type="text" name="firstNameMother"  />

                <label htmlFor="secondNameMother">secondNameMother</label>
                <input id="email" type="text" name="secondNameMother"  />

                <label htmlFor="lastNameMother">lastNameMother</label>
                <input id="email" type="text" name="lastNameMother"  />

                <label htmlFor="secondLastNameMother">secondLastNameMother</label>
                <input id="email" type="text" name="secondLastNameMother"  />

                <label htmlFor="firstNameExtra">firstNameExtra</label>
                <input id="email" type="text" name="firstNameExtra"  />

                <label htmlFor="secondNameExtra">secondNameExtra</label>
                <input id="email" type="text" name="secondNameExtra"  />

                <label htmlFor="lastNameExtra">lastNameExtra</label>
                <input id="email" type="text" name="lastNameExtra"  />

                <label htmlFor="secondLastNameExtra">secondLastNameExtra</label>
                <input id="email" type="text" name="secondLastNameExtra"  />
            </div>
            : <h1></h1>

            }
           

            <label htmlFor="uuidCity">uuidCity</label>
            <select  name="uuidCity">
                <option value="0">Seleccionar un valor</option>
                <option value="001">Valor 1</option>
            </select>

            <label htmlFor="addressLine1">addressLine1</label>
            <input id="email" type="text" name="addressLine1"  />

            <label htmlFor="addressLine2">addressLine2</label>
            <input id="email" type="text" name="addressLine2"  />

            <label htmlFor="phoneNumber">phoneNumber</label>
            <input id="email" type="text" name="phoneNumber"  />

            <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onInit={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();

                        setCkeditorComment(data)
                    } }
                />

            <label htmlFor="attachment">attachment</label>
            <input id="email" type="file" onChange={(e)=>setImage(e.target.files[0])} />

            <button type="submit">Guardar Paciente</button>
        </form>
    )
}

export default Pantient