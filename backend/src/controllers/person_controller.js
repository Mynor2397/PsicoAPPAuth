const { validationResult } = require('express-validator');
const PersonService = require('../services/person_service')
const errors = require('../lib/utils/database.errors');
const http = require('../lib/utils/status.response')
const { deleteFromS3 } = require('../middlewares/uploadfile')
const Person = require('../models/person.model')
const respondError = require('./respond');

const handPerson = {}

handPerson.create = async (req, res) => {

    const errorsrex = validationResult(req)
    if (!errorsrex.isEmpty()) {
        deleteFromS3(req.filename)
        return res.status(http.StatusBadRequest).json({ errorsrex: errorsrex.array() });
    }

    let DataPerson = new Person()
    DataPerson = req.body;
    DataPerson.attachment = req.filename

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
        deleteFromS3(req.filename)
        if (error == errors.ErrDuplicateRegistry) {
            return res
                .status(http.StatusConflict)
                .json({
                    ok: false,
                    message: "El registro ya existe"
                })
        }

        if (error == errors.ErrForeignKeyViolation) {
            return res
                .status(http.StatusBadRequest)
                .json({
                    ok: false,
                    message: 'El registro asociado no existe!'
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
                data: result
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

        if (error == http.StatusConflict) {
            return res
                .status(http.StatusConflict)
                .json({
                    ok: false,
                    message: "El registro no puede ser borrado!",
                    reason: "Casos asociados a este registro"
                })
        }

        respondError(res, error);
        return
    }
}

handPerson.allPersons = async (req, res) => {
    try {
        let result = await PersonService.allPersons()

        return res
            .status(http.StatusOK)
            .json({
                ok: true,
                data: result
            })

    } catch (error) {

        if (error == http.StatusNotFound) {
            return res
                .status(http.StatusNotFound)
                .json({
                    ok: false,
                    message: "No hay registros!"
                })
        }

        respondError(res, error)
        return
    }
}

handPerson.religion = async (req, res) => {
    try {
        let results = await PersonService.religion()
        return res
            .status(http.StatusOK)
            .json({
                ok: true,
                data: results
            })
    } catch (error) {
        if (error == http.StatusNotFound) {
            return res
                .status(http.StatusNotFound)
                .json({
                    ok: false,
                    message: "Ningún registro encontrado!"
                })
        }

        respondError(res, error)
        return
    }
}


handPerson.cities = async (req, res) => {
    try {
        let results = await PersonService.cities()
        return res
            .status(http.StatusOK)
            .json({
                ok: true,
                data: results
            })
    } catch (error) {
        if (error == http.StatusNotFound) {
            return res
                .status(http.StatusNotFound)
                .json({
                    ok: false,
                    message: "Ningún registro encontrado!"
                })
        }

        respondError(res, error)
        return
    }
}
module.exports = handPerson;