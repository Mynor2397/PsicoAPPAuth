const caseInitialStage = require('../models/caseinitial.model')
const http = require('../lib/utils/status.response')
const CaseInitialStage = require('../models/caseinitial.model')
const rexFiles = require('../lib/utils/rex.files')

const CaseInitialService = require('../services/caseinitial_service')
const handCaseInitial = {}

handCaseInitial.create = async (req, res) => {
    let DataQuery;
    let id = req.params.uuid
    if (req.datafiles == undefined || req.datafiles == null) {
        DataQuery = req.body
    } else {
        DataQuery = req.datafiles
    }
    try {
        let result = await CaseInitialService.generateQuery(DataQuery, id)
        return res.status(http.StatusOK).json({
            ok: true,
            data: result
        })

    } catch (error) {
        console.log(error);
    }

}

module.exports = handCaseInitial;