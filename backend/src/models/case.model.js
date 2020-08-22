/**
 * Represent a model of InitialCaseState.
 *
 *
 * @param {string} uuid varchar(36) PK 
 * @param {string} premorbidPersonality text 
 * @param {string} premorbidPersonalityFile text 
 * @param {string} currentProblem text 
 * @param {string} currentProblemFile text 
 * @param {string} healthHistory text 
 * @param {string} healthHistoryFile text 
 * @param {string} sexualHistory text 
 * @param {string} sexualHistoryFile text 
 * @param {string} growthHistory text 
 * @param {string} growthHistoryFile text 
 * @param {string} perinatalHistory text 
 * @param {string} perinatalHistoryFile text 
 * @param {string} familyHistory text 
 * @param {string} familyHistoryFile text 
 * @param {string} genogramFile text 
 * @param {string} schoolHistory text 
 * @param {string} schoolHistoryFile text 
 * @param {string} workHistory text 
 * @param {string} workHistoryFile text 
 * @param {string} mentalEvaluationTest text 
 * @param {string} mentalEvaluationTestFile text 
 * @param {string} clinicalInterpretation text 
 * @param {string} clinicalInterpretationFile text 
 * @param {string} interpreationOfEvidence text 
 * @param {string} interpreationOfEvidenceFile text 
 * @param {string} therapeuticContract text 
 * @param {string} therapeuticContractFile text
 */

class CaseInitialStage {

    constructor(
        uuid,
        premorbidPersonality,
        premorbidPersonalityFile,
        currentProblem,
        currentProblemFile,
        healthHistory,
        healthHistoryFile,
        sexualHistory,
        sexualHistoryFile,
        growthHistory,
        growthHistoryFile,
        perinatalHistory,
        perinatalHistoryFile,
        familyHistory,
        familyHistoryFile,
        genogramFile,
        schoolHistory,
        schoolHistoryFile,
        workHistory,
        workHistoryFile,
        mentalEvaluationTest,
        mentalEvaluationTestFile,
        clinicalInterpretation,
        clinicalInterpretationFile,
        interpreationOfEvidence,
        interpreationOfEvidenceFile,
        therapeuticContract,
        therapeuticContractFile
    ) {
        this.uuid = uuid
        this.premorbidPersonality = premorbidPersonality
        this.premorbidPersonalityFile = premorbidPersonalityFile
        this.currentProblem = currentProblem
        this.currentProblemFile = currentProblemFile
        this.healthHistory = healthHistory
        this.healthHistoryFile = healthHistoryFile
        this.sexualHistory = sexualHistory
        this.sexualHistoryFile = sexualHistoryFile
        this.growthHistory = growthHistory
        this.growthHistoryFile = growthHistoryFile
        this.perinatalHistory = perinatalHistory
        this.perinatalHistoryFile = perinatalHistoryFile
        this.familyHistory = familyHistory
        this.familyHistoryFile = familyHistoryFile
        this.genogramFile = genogramFile
        this.schoolHistory = schoolHistory
        this.schoolHistoryFile = schoolHistoryFile
        this.workHistory = workHistory
        this.workHistoryFile = workHistoryFile
        this.mentalEvaluationTest = mentalEvaluationTest
        this.mentalEvaluationTestFile = mentalEvaluationTestFile
        this.clinicalInterpretation = clinicalInterpretation
        this.clinicalInterpretationFile = clinicalInterpretationFile
        this.interpreationOfEvidence = interpreationOfEvidence
        this.interpreationOfEvidenceFile = interpreationOfEvidenceFile
        this.therapeuticContract = therapeuticContract
        this.therapeuticContractFile = therapeuticContractFile
    }
}

module.exports = CaseInitialStage;