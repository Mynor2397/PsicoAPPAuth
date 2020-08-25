const CaseService = require('../services/case_service')
const errors = require('../lib/utils/database.errors')
const http = require('../lib/utils/status.response')
const Response = require('../models/response.model')
const Case = require('../models/ncase.model')

const handCase = {}

handCase.create = async (req, res) => {

    try {
        let result = await CaseService.create(req.body)
        return res.status(http.StatusOK)
            .json(
                {
                    ok: true,
                    message: "solicitud exitosa",
                    data: result
                })
    } catch (error) {

        return res
            .status(http.StatusInternalServerError)
            .json({
                error: "Internal Server Error"
            })
    }
}


module.exports = handCase;