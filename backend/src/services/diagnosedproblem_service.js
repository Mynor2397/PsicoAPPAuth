const uuid = require('uuid')
const StorageDiagnosedProblem = require('../storage/diagnosedproblem_storage')
const DiagnosedProblem = require('../models/diagnosedproblem.model')

const ServiceDiagnosedProblem = {}

ServiceDiagnosedProblem.create = async (DataDiagnostic, IDCase) => {
    let data = new DiagnosedProblem()
    data = DataDiagnostic;
    data.uuidDiagnosedProblems = uuid.v4()
    data.uuidCaseDiagnosticStage = IDCase

    return await StorageDiagnosedProblem.create(data)
}

ServiceDiagnosedProblem.update = async (DataUpdate, UUID) => {
    let data = new DiagnosedProblem()
    data = DataUpdate;


    return await StorageDiagnosedProblem.update(data, UUID)
}

ServiceDiagnosedProblem.getall = async () => {
    return await StorageDiagnosedProblem.getall()
}

ServiceDiagnosedProblem.getdsm = async () => {
    return await StorageDiagnosedProblem.getdsm()
}

ServiceDiagnosedProblem.getdiagnosed = async (uuid) => {
    return await StorageDiagnosedProblem.getdiagnosed(uuid)
}

ServiceDiagnosedProblem.getsinglediagnosed = async (uuid) => {
    return await StorageDiagnosedProblem.getsinglediagnosed(uuid)
}

module.exports = ServiceDiagnosedProblem;