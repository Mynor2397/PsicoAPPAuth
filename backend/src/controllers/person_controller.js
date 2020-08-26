const { validationResult } = require('express-validator');
const PersonService = require('../services/person_service')
const http = require('../lib/utils/status.response')
const { deleteFromStorage } = require('../services/documents_service')
const Person = require('../models/person.model')
const respondError = require('./respond')

const handPerson = {}

handPerson.create = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        deleteFromStorage(req.filename)
        return res.status(http.StatusBadRequest).json({ errors: errors.array() });
    }

    let DataPerson = new Person()
    DataPerson = req.body;

    try {
        let ress = await PersonService.create(DataPerson)
        return res
            .status(http.StatusCreated)
            .json({
                ok: true,
                message: 'El registro ha sido creado satisfactoriamente',
                id: ress
            })

    } catch (error) {
        deleteFromStorage(req.filename)
        if (error == errors.ErrDuplicateRegistry) {
            return res
                .status(http.StatusConflict)
                .json({
                    ok: false,
                    message: "El registro ya existe"
                })
        }


        respondError(res, error)
        return
    }

}

handPerson.read = async (req, res) => {
    try {
        let result = await PersonService.get(req.params.uuid)

        return res
            .status(http.StatusOK)
            .json({
                ok: true,
                data: result[0]
            })

    } catch (error) {

        if (error == http.StatusNotFound) {
            return res
                .status(http.StatusNotFound)
                .json({
                    ok: false,
                    message: "No existe ningun registro!"
                })
        }

        respondError(res, error)
        return
    }

}

handPerson.update = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(http.StatusBadRequest).json({ errors: errors.array() });
    }

    let person = new Person();
    person = req.body;
    try {
        let results = await PersonService.update(req.params.id, person)
        return res
            .status(http.StatusOK)
            .json({
                ok: true,
                message: "El registro ha sido actualizado correctamente",
                id: results
            })

    } catch (error) {

        if (error == http.StatusNotFound) {
            return res
                .status(http.StatusNotFound)
                .json({
                    ok: false,
                    message: "El registro no ha sido encontrado!"
                })
        }

        respondError(res, error)
        return
    }
}

handPerson.deletePerson = async (req, res) => {
    try {
        let results = await PersonService.delete(req.params.id)
        return res
            .status(http.StatusOK)
            .json({
                ok: true,
                message: "El registro ha sido borrado satisfactoriamente",
                data: results
            })

    } catch (error) {

        if (error == http.StatusNotFound) {
            return res
                .status(http.StatusNotFound)
                .json({
                    ok: false,
                    message: "El registro no ha sido encontrado!"
                })
        }

        respondError(res, error);
        return
    }
}

module.exports = handPerson;