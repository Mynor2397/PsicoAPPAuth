const http = require('../lib/utils/status.response')
const { deleteFromS3 } = require('../middlewares/uploadfile')
const respondError = require('./respond');
const CaseInitialService = require('../services/caseinitial_service')

const handCaseInitial = {}

handCaseInitial.create = async (req, res) => {
    let DataQuery;
    let uuid = req.params.uuid
    if (uuid == undefined || uuid == null) {
        return res
            .status(http.StatusBadRequest)
            .json({
                ok: false
            })
    }

    if (req.datafiles == undefined || req.datafiles == null) {
        DataQuery = req.body
    } else {
        DataQuery = req.datafiles
    }
    try {
        let results = await CaseInitialService.generateQuery(DataQuery, uuid)
        deleteFromS3(results.fileToDelete)
        return res
            .status(http.StatusOK)
            .json({
                ok: true,
                data: results.results
            })

    } catch (error) {
        deleteFromS3(error.fileToDelete)
        if (error.error == 404) {
            return res
                .status(http.StatusNotFound)
                .json({
                    ok: false,
                    error: error.error
                })
        }

        if (error.error == 401) {
            return res
                .status(http.StatusBadRequest)
                .json({
                    ok: false,
                    error: error.errmessage
                })
        }

        respondError(res, error)
        return
    }

}

handCaseInitial.getAll = async (req, res) => {
    try {
        let results = await CaseInitialService.getAll()
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

handCaseInitial.getOnly = async (req, res) => {
    let uuid = req.params.uuid
    console.log(uuid);
    if (uuid == undefined || uuid == null) {
        return res
            .status(http.StatusBadRequest)
            .json({
                ok: false
            })
    }

    try {
        let results = await CaseInitialService.getOnly(uuid)
        return res
            .status(http.StatusOK)
            .json({
                ok: true,
                data: results
            })
    } catch (error) {

        if (error == 404) {
            return res
                .status(http.StatusNotFound)
                .json({
                    ok: false,
                    error: 'Ningún registro encontrado!'
                })
        }

        respondError(res, error)
        return
    }
}


module.exports = handCaseInitial;