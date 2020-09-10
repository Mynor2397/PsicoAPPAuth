const StorageTherapeuticPlan = require('../storage/therapeuticplan_storage');
const uuid = require('uuid')
const TherapeuticPlan = require('../models/therapeuticplan.model')

const { fieldsForQuery } = require('../lib/utils/rextherapeuticplan.file')

const TherapeuticPlanService = {}

TherapeuticPlanService.generateQuery = async (therapeuticbody, therapeuticfiles, uuidCase) => {
    var therapeuticplan = new TherapeuticPlan()
    therapeuticplan.uuid = uuid.v4()
    therapeuticplan.uuidCaseIntermediateStage = uuidCase
    therapeuticplan.aspectToWork = therapeuticbody.aspectToWork
    therapeuticplan.aspectToWorkFile = therapeuticfiles.aspectToWorkFile
    therapeuticplan.objetives = therapeuticbody.objetives
    therapeuticplan.objetivesFile = therapeuticfiles.objetivesFile
    therapeuticplan.goals = therapeuticbody.goals
    therapeuticplan.goalsFile = therapeuticfiles.goalsFile
    therapeuticplan.focus = therapeuticbody.focus
    therapeuticplan.focusFile = therapeuticfiles.focusFile
    therapeuticplan.techniques = therapeuticbody.techniques
    therapeuticplan.techniquesFile = therapeuticfiles.techniquesFile


    return await StorageTherapeuticPlan.create(therapeuticplan)
}



TherapeuticPlanService.update = async (DataForQuery, uuidCaseIntermediateStage,  id) => {
    var count = 0;
    var Query = `UPDATE `
    var QuerySelect = `SELECT `
    var value;

    for (var key in DataForQuery) {
        count++;
        if (count >= 2) {
            break;
        }
        if (fieldsForQuery.includes(`${key}`)) {
            value = DataForQuery[key]
            Query += ` PAC_TherapeuticPlanActivity SET ${key.split(" ")[0].trim()} = ? WHERE uuidCaseIntermediateStage = ? AND uuid = ?;`
            QuerySelect += ` ${key.split(" ")[0].trim()} FROM PAC_TherapeuticPlanActivity WHERE uuidCaseIntermediateStage = ? AND uuid = ?;`
        } else {
            return new Promise((resolve, reject) => reject({
                error: 401,
                errmessage: `El campo: ${key} es desconocido`,
                fileToDelete: DataForQuery[key]
            }))
        }
    }

    return await StorageTherapeuticPlan.extractFieldFile(QuerySelect, value, uuidCaseIntermediateStage, id)
        .then((NameFile) => {
            return StorageTherapeuticPlan.update(Query, value, uuidCaseIntermediateStage, id, NameFile)
        })
        .catch(err => {
            return new Promise((resolve, reject) => reject(err))
        })
}


module.exports = TherapeuticPlanService;