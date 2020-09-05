const StorageCaseInitial = require('../storage/caseinitial_storage');
const { fieldsForQuery } = require('../lib/utils/rex.files')

const CaseInitialService = {}

CaseInitialService.generateQuery = async (DataForQuery, id) => {
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
            Query += ` PAC_CaseInitialStage SET ${key.split(" ")[0].trim()} = ? WHERE uuid = ?;`
            QuerySelect += ` ${key.split(" ")[0].trim()} FROM PAC_CaseInitialStage WHERE uuid = ?;`
        } else {
            return new Promise((resolve, reject) => reject({
                error: 401,
                errmessage: `El campo: ${key} es desconocido`,
                fileToDelete: DataForQuery[key]
            }))
        }
    }

    return await StorageCaseInitial.extractFieldFile(QuerySelect, value, id)
        .then((NameFile) => {
            return StorageCaseInitial.update(Query, value, id, NameFile)
        })
        .catch(err => {
            return new Promise((resolve, reject) => reject(err))
        })
}

module.exports = CaseInitialService;

