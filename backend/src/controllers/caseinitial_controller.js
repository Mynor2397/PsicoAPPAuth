const caseInitialStage = require('../models/caseinitial.model')
const http = require('../lib/utils/status.response')

const handCaseInitial = {}

handCaseInitial.create = async (req, res) => {
    return res.status(http.StatusOK).json({
        ok: true,
        data: req.body
    })
}

module.exports = handCaseInitial;