const DiagnosticSer = require('../services/DiagnosedProblems_service')
const DiagnosedProblems = require('../models/DiagnosedProblems.model')
const { deleteFromS3 } = require('../middlewares/uploadfile')
const respondError = require('./respond');
const handDiagnosedProblem = {}

handDiagnosedProblem.create = async (req, res) => {
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
        if(error == http.s)
        respondError(res, error)
        return
    }

}

// handDiagnosedProblem.testType = async (req, res) => {
//     try {
//         let result = await DiagnosticSer.testType()
        
//         return res
//             .status(200)
//             .json({
//                 ok: true,
//                 data: result
//             })
//     } catch (error) {
//         respondError(res, error)
//         return
//     }
// }

module.exports = handDiagnosedProblem;