const uuid = require('uuid')
const StorageDiagnosedProblem = require('../storage/diagnosedproblem_storage')
const DiagnosedProblem = require('../models/diagnosedproblems.model')

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

    return await StorageDiagnosedProblem.getNameFile(UUID, data.descriptionOfProblemFile)
        .then((nameFileDB) => {
            return StorageDiagnosedProblem.update(data, UUID, nameFileDB)
        })
        .catch(err => {
            return new Promise((resolve, reject) => reject(err))
        })
<<<<<<< HEAD
}

ServiceDiagnosedProblem.getall = async () => {
    return await StorageDiagnosedProblem.getall()
}

ServiceDiagnosedProblem.getdsm = async () => {
    return await StorageDiagnosedProblem.getdsm()
=======
}

ServiceDiagnosedProblem.datadiag = async () => {
    return await StorageDiagnosedProblem.dataDiag()
>>>>>>> 643d7b479a48ba81a3a31f1f1fe342415a52e417
}

module.exports = ServiceDiagnosedProblem;