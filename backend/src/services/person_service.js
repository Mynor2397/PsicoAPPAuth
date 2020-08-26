const uuid = require('uuid')
const StorePerson = require('../storage/person_storage')
const { generate } = require('../lib/utils/uuid_psa')
const Person = require('../models/person.model')

const PersonService = {}

PersonService.create = async (DataPatient) => {
    var person = new Person()
    person = DataPatient
    person.uuid = uuid.v4()
    person.id = await generate('PAS_Person', 'PAS')
    person.dateNameUpdated = new Date()
    person.uuidRole = 'f773d0e2-6f64-4957-8ad4-179455994849'

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

module.exports = PersonService;