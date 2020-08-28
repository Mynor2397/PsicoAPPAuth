const uuid = require('uuid')
const StorePerson = require('../storage/person_storage')
const { generate } = require('../lib/utils/uuid_psa')
const Person = require('../models/person.model')

const PersonService = {}

PersonService.create = async (DataPatient) => {
    var person = new Person()
    person = DataPatient
    person.uuidPerson = uuid.v4()
    person.id = await generate('PAS_Person', 'PAS')
    person.uuidRole = 'f773d0e2-6f64-4957-8ad4-179455994849'
    person.dateNameUpdated = new Date()
    person.uuidPersonHistory = uuid.v4()
    person.dateEvent = new Date()
    person.uuidAddress = uuid.v4()

    return await StorePerson.create(person)
}

PersonService.get = async (_uuid) => {
    return await StorePerson.get(_uuid)
}

PersonService.update = async (_id, Data) => {
    var person = new Person()
    person = Data;
    person.dateNameUpdated = new Date()

    return await StorePerson.update(_id, person)
}

PersonService.delete = async (_id) => {
    return await StorePerson.delete(_id)
}

PersonService.allPersons= async() =>{
    return await StorePerson.allPersons()
}

PersonService.religion = async () => {
    return await StorePerson.religion()
}

PersonService.cities = async () => {
    return await StorePerson.cities()
}
module.exports = PersonService;