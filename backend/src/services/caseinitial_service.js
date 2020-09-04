const StoreCaseInitial = require('../storage/caseinitial_storage')

const CaseInitialService = {}

CaseInitialService.generateQuery = async (DataForQuery, id) => {
    var count = 0;
    var Query = `UPDATE `
    var value;

    for (var key in DataForQuery) {
        count++;
        if (count >= 2) {
            break;
        }
        value = DataForQuery[key]
        Query += ` PAC_CaseInitialStage SET ${key.split(" ")[0].trim()} = ? WHERE uuid = ?;`
    }

    console.log(Query);
    return await StoreCaseInitial.update(Query, value, id)
}

module.exports = CaseInitialService;

