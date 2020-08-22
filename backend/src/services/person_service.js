const uuid = require('uuid')
const StorePerson = require('../storage/person_storage')
const Person = require('../models/person.model')
const { generate } = require('../lib/utils/uuid_psa')

const PersonService = {}

PersonService.create = async (DataPatient) => {
    var person = new Person()
    person = DataPatient
    person.uuid = uuid.v4()
    person.id = await generate()
    person.dateNameUpdated = new Date()
    person.uuidRole = 'f773d0e2-6f64-4957-8ad4-179455994849'

    try {
        let result = await StorePerson.create(person)
        return result
    } catch (error) {
        return error
    }
}

module.exports = PersonService;