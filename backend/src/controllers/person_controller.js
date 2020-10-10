const { validationResult } = require('express-validator');
const PersonService = require('../services/person_service')
const errors = require('../lib/utils/database.errors');
const http = require('../lib/utils/status.response')
const { deleteFromS3 } = require('../middlewares/uploadfile')
const Person = require('../models/person.model')
const respondError = require('./respond');
const s3 = require('../middlewares/uploadfile');

const handPerson = {}

handPerson.create = async (req, res) => {
    console.log(req.body);
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
    const errorsrex = validationResult(req)
    if (!errorsrex.isEmpty()) {
        deleteFromS3(req.filename)
        return res.status(http.StatusBadRequest).json({ errorsrex: errorsrex.array() });
    }

    let person = new Person();
    person = req.body;

    if (req.filename && person.changeFile) {
        person.attachment = req.filename
        person.changeFile = person.changeFile
    } else {
        person.attachment = person.changeFile
        person.changeFile = undefined
    }

    let uuid = req.params.id

    if (uuid == undefined || uuid == null) {
        deleteFromS3(req.filename)
        return res
            .status(http.StatusBadRequest)
            .json({
                ok: false
            })
    }

    try {
        let results = await PersonService.update(uuid, person)
        deleteFromS3(results.fileToDelete)
        return res
            .status(http.StatusOK)
            .json({
                ok: true,
                message: "El registro ha sido actualizado correctamente",
                id: results.id
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

handPerson.personwithfulldata = async (req, res) => {

    try {
        let result = await PersonService.personwithfulldata(req.params.id)

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

handPerson.gridStagePerson = async (req, res) => {
    let stage = req.params.stage

    try {

        let results = await PersonService.gridStagePerson(stage);
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
                    message: "Ningún registro encontrado!",
                    data: []
                })
        }

        respondError(res, error)
        return
    }

}

handPerson.gridWithIDPerson = async (req, res) => {
    let id = req.params.id
try {
    let results = await PersonService.gridWithIDPerson(id)
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
                message: "Ningún registro encontrado!",
                data: []
            })
    }

    respondError(res, error)
    return
}
}

handPerson.downloadnAttachmen = async (req, res) => {
    if (req.params.filename) {
        let URL = await s3.getFile(req.params.filename)
        return res
            .status(http.StatusOK)
            .json({
                ok: true,
                url: URL
            })
    }

    return res
        .status(http.StatusBadRequest)
        .json({
            ok: false,
            message: 'El nombre de archivo no fue proporcionado o no existe'
        })
}

module.exports = handPerson;