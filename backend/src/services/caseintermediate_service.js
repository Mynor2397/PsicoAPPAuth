const StorageCaseIntermediate = require('../storage/caseintermediate_storage');
const { fieldsForQuery } = require('../lib/utils/rexintermediate.file')

const CaseIntermediateService = {}

CaseIntermediateService.generateQuery = async (DataForQuery, id) => {
    var count = 0;
    var Query = `UPDATE `
    var QuerySelect = `SELECT `
    var value;

    console.log(DataForQuery)

    for (var key in DataForQuery) {
        count++;
        if (count >= 2) {
            break;
        }
        if (fieldsForQuery.includes(`${key}`)) {
            value = DataForQuery[key]
            Query += ` PAC_CaseIntermediateStage SET ${key.split(" ")[0].trim()} = ? WHERE uuid = ?;`
            QuerySelect += ` ${key.split(" ")[0].trim()} FROM PAC_CaseIntermediateStage WHERE uuid = ?;`
        } else {
            return new Promise((resolve, reject) => reject({
                error: 401,
                errmessage: `El campo: ${key} es desconocido`,
                fileToDelete: DataForQuery[key]
            }))
        }
    }
    

    return await StorageCaseIntermediate.extractFieldFile(QuerySelect, value, id)
        .then((NameFile) => {
            return StorageCaseIntermediate.update(Query, value, id, NameFile)
        })
        .catch(err => {
            return new Promise((resolve, reject) => reject(err))
        })
}

module.exports = CaseIntermediateService;