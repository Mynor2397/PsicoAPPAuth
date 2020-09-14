const http = require('../lib/utils/status.response')
const { deleteFromS3 } = require('../middlewares/uploadfile')
const respondError = require('./respond');
const CaseIntermediateService = require('../services/caseintermediate_service')

const handCaseIntermediate = {}

handCaseIntermediate.create = async (req, res) => {
    let DataQuery ={};
    let uuid = req.params.uuid

    if (uuid == undefined || uuid == null) {
        return res
            .status(http.StatusBadRequest)
            .json({
                ok: false
            })
    }
    console.log(req)
    if (req.file == undefined || req.file == null) {
        DataQuery = req.body

    } else {
        // DataQuery = req.file
        DataQuery.therapeuticPlanFile = req.file.key
    }
    try {
        let results = await CaseIntermediateService.generateQuery(DataQuery, uuid)
        deleteFromS3(results.fileToDelete)
        return res
            .status(http.StatusOK)
            .json({
                ok: true,
                data: results.results
            })

    } catch (error) {
        deleteFromS3(error.fileToDelete)
        if (error == 404) {
            return res
                .status(http.StatusBadRequest)
                .json({
                    ok: false,
                    error: 'Ningun registro encontrado!'
                })
        }

        if (error == 401) {
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

module.exports = handCaseIntermediate;