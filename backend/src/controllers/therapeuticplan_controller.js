const http = require('../lib/utils/status.response')
const { deleteFromS3 } = require('../middlewares/uploadfile')
const respondError = require('./respond');
const TherapeuticPlanService = require('../services/therapeuticplan_service')


const handTherapeuticplan = {}

handTherapeuticplan.create = async (req, res) => {

    let therapeuticbody = JSON.parse(JSON.stringify(req.body))
    let therapeuticfiles = req.datafiles
    let uuidCase = req.params.uuid

    if (uuidCase == undefined || uuidCase == null) {
        return res
            .status(http.StatusBadRequest)
            .json({
                ok: false
            })
    }
    try {
        let results = await TherapeuticPlanService.generateQuery(therapeuticbody, therapeuticfiles, uuidCase)
        return res
            .status(http.StatusOK)
            .json({
                ok: true,
                data: results
            })

    } catch (error) {
        deleteFromS3(error.fileToDelete)

        respondError(res, error)
        return
    }

}

handTherapeuticplan.update = async (req, res) => {
    let DataQuery;
    let uuid = req.params.uuid
    let uuidCaseinitial = req.params.uuidCaseinitial
    if (uuidCaseinitial == undefined || uuidCaseinitial == null || uuid == undefined || uuid == null) {
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
        let results = await TherapeuticPlanService.update(DataQuery, uuidCaseinitial, uuid)
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
                .status(http.StatusBadRequest)
                .json({
                    ok: false,
                    error: 'Ningun registro encontrado!'
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

module.exports = handTherapeuticplan;