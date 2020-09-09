const uuid = require('uuid')
const StorageDiagosedProblems = require('../storage/diagnosedproblem_storage')
const DiagnosedProblem = require('../models/DiagnosedProblems.model')

const ServiceDiagnosedProblem = {}

ServiceDiagnosedProblem.create = async (DataDiagnostic, IDCase) => {

    let data = new DiagnosedProblem()
    data = DataDiagnostic;

    data.uuid = uuid.v4()
    data.uuidCaseDiagnosticStage = IDCase
    
    return await StorageDiagosedProblems.create(data)
}

ServiceDiagnosedProblem.dataDiag = async () => {
    return await StorageDiagosedProblems.dataDiag()
}

module.exports = ServiceDiagnosedProblem;