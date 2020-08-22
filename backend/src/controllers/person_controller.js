const PersonService = require('../services/person_service')
const errors = require('../lib/utils/database.errors')
const http = require('../lib/utils/status.response')
const Response = require('../models/response.model')
const Person = require('../models/person.model')

const handPerson = {}

handPerson.create = async (req, res) => {
    let DataPerson = new Person()
    DataPerson = req.body;

    let result = await PersonService.create(DataPerson)

    if (result == errors.ErrDuplicateRegistry) {
        return res
            .status(http.StatusConflict)
            .json(new Response(false, "El registro ya existe"))
    }

    return res
        .status(http.StatusCreated)
        .json(new Response(true, 'El registro ha sido creado satisfactoriamente'))
}

module.exports = handPerson;