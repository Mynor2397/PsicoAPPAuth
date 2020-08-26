const uuid = require('uuid')
const StoreCase = require('../storage/case_storage')
const Case = require('../models/ncase.model')
const nId = require('../lib/utils/uuid_psa')
const storageCase = require('../storage/case_storage')

const CaseService = {}


CaseService.create = async (dataCase) => {
    var cases = new Case()
    cases = dataCase

    cases.uuid = uuid.v4()
    cases.caseNumber = await nId.generate('PAC_Case', 'PSACase' )
    cases.creationDate = new Date()
    cases.desisted = 1

    console.log(cases)

    return await StoreCase.create(cases)
    
}

CaseService.update = async (id, dataUpd) => {
    var update_data = new Case()
    update_data = dataUpd

    update_data.uuid = id


    console.log(update_data);
    return await storageCase.update(update_data)
}

CaseService.get = async (getCase) => {
    return await storageCase.get(getCase)
}

CaseService.getid = async (_uuid) => {
    return await StoreCase.getid(_uuid)
}

CaseService.getstage = async (getStage) =>{
    return await storageCase.getstage(getStage)
}

CaseService.getpersonuser = async (getPersonU) =>{
    return await storageCase.getpersonuser(getPersonU)
}

CaseService.getpersonpatient = async (getPersonP) => {
    return await storageCase.getpersonpatient(getPersonP)
}
module.exports = CaseService