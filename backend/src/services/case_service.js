const uuid = require('uuid')
const StoreCase = require('../storage/case_storage')
const Case = require('../models/ncase.model')
const nId = require('../lib/utils/uuid_psa')

const CaseService = {}


CaseService.create = async (dataCase) => {
    var cases = new Case()
    cases = dataCase

    cases.uuid = uuid.v4()
    cases.caseNumber = await nId.generate()
    cases.creationDate = new Date()
    cases.desisted = 1

    console.log(cases)

    return await StoreCase.create(cases)
    
}

module.exports = CaseService