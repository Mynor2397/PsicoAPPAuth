const { validationResult } = require('express-validator');
const DiagnosticSer = require('../services/diagnosedproblems_service')
const DiagnosedProblems = require('../models/diagnosedproblems.model')
const { deleteFromS3 } = require('../middlewares/uploadfile')
const respondError = require('./respond');
const handDiagnosedProblem = {}

handDiagnosedProblem.create = async (req, res) => {
    console.log(req.body);
    const errorsrex = validationResult(req)
    if (!errorsrex.isEmpty()) {
        deleteFromS3(req.filename)
        return res.status(http.StatusBadRequest).json({ errorsrex: errorsrex.array() });
    }

    let AppData = new DiagnosedProblems()
    AppData = req.body
    AppData.descriptionOfProblemFile = req.filename
    let uuid = req.params.uuid

    if (uuid == undefined || uuid == null) {
        deleteFromS3(req.filename)
        return res
            .status(http.StatusBadRequest)
            .json({
                ok: false
            })
    }

    try {
        let result = await DiagnosticSer.create(AppData, uuid)

        return res
            .status(201)
            .json({
                ok: true,
                data: result
            })

    } catch (error) {
        deleteFromS3(error.fileToDelete)
        respondError(res, error)
        return
    }

}

handDiagnosedProblem.update = async (req, res) => {
    const errorsrex = validationResult(req)
    if (!errorsrex.isEmpty()) {
        deleteFromS3(req.filename)
        return res.status(http.StatusBadRequest).json({ errorsrex: errorsrex.array() });
    }

    let AppData = new DiagnosedProblems()
    AppData = req.body
    AppData.descriptionOfProblemFile = req.filename
    let uuid = req.params.uuid

    if (uuid == undefined || uuid == null) {
        deleteFromS3(req.filename)
        return res
            .status(http.StatusBadRequest)
            .json({
                ok: false
            })
    }

    try {
        let result = await DiagnosticSer.update(AppData, uuid)
        deleteFromS3(result.fileToDelete)
        return res
            .status(201)
            .json({
                ok: true,
                data: result.data
            })
    } catch (error) {
        deleteFromS3(error.fileToDelete)
        if (error.error == 404) {
            return res
                .status(404)
                .json({
                    ok: false,
                    message: 'Registro no encontrado!'
                })
        }

        respondError(res, error.error)
        retur
    }
}


handDiagnosedProblem.getAll = async (req, res) => {
    try {
        let results = await DiagnosticSer.getall()
        return res
            .status(http.StatusOK)
            .json({
                ok: true,
                data: results
            })
    } catch (error) {
        respondError(res, error)
        return
    }
}

handDiagnosedProblem.getdsm = async (req, res) => {
    try {
        let results = await DiagnosticSer.getdsm()
        return res
            .status(http.StatusOK)
            .json({
                ok: true,
                data: results
            })
    } catch (error) {
        respondError(res, error)
        return
    }
}
module.exports = handDiagnosedProblem;