const http = require('../lib/utils/status.response')
const { deleteFromS3 } = require('../middlewares/uploadfile')
const respondError = require('./respond');
const TherapeuticPlanService = require('../services/therapeuticplan_service')
const TherapeuticPlanActivity = require('../models/therapeuticplan.model')

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

module.exports = handTherapeuticplan;