
/**
 * @param {string} uuid varchar(36) PK 
 *  {string} uuidCaseDiagnosticStage varchar(36) 
 * @param {string} uuidDSM5 varchar(36) 
 * @param {string} descriptionOfProblem text 
 * @param {string} descriptionOfProblemFile varchar(500)
 * 
 * @param {string} uuidCaseDiagnosticStage varchar(36) PK
 */

class Diagnosedproblems {
    constructor(
        uuid,
        uuidDSM5,
        descriptionOfProblem,
        descriptionOfProblemFile,

        uuidCaseDiagnosticStage
    ) {
        this.uuid = uuid
        this.uuidDSM5 = uuidDSM5
        this.descriptionOfProblem = descriptionOfProblem
        this.descriptionOfProblemFile = descriptionOfProblemFile

        this.uuidDiagnosticStage = uuidCaseDiagnosticStage
    }
}

module.exports = Diagnosedproblems