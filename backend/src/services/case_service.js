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
    cases.caseNumber = await nId.generate('PAC_Case', 'PSACase')
    cases.creationDate = new Date()
    cases.desisted = 1

    return await StoreCase.create(cases)

}

CaseService.update = async (id, dataUpd) => {
    var update_data = new Case()
    update_data = dataUpd

    update_data.uuid = id

    return await storageCase.update(update_data)
}

CaseService.get = async (getCase) => {
    return await storageCase.get(getCase)
}

CaseService.getid = async (_uuid) => {
    return await StoreCase.getid(_uuid)
}

CaseService.getstage = async (getStage) => {
    return await storageCase.getstage(getStage)
}

CaseService.getpersonuser = async (getPersonU) => {
    return await storageCase.getpersonuser(getPersonU)
}

CaseService.getpersonpatient = async (getPersonP) => {
    return await storageCase.getpersonpatient(getPersonP)
}

CaseService.filter = async (FilterCase) => {
    let CaseFilter = FilterCase



    var query = `SELECT * FROM grid_casos `

    if (CaseFilter.filter == 0) {
        query += `;`
    }
    if (CaseFilter.filter == 1) {
        if (CaseFilter.order == 1) {
            query += ` ORDER BY age ASC;`
        } else {
            if (CaseFilter.order == 2) {
                query += ` ORDER BY age DESC;`
            }
        }

    }
    if (CaseFilter.filter == 2) {
        if (CaseFilter.order == 1) {
            query += ` ORDER BY creationDate ASC;`
        } else {
            if (CaseFilter.order == 2) {
                query += ` ORDER BY creationDate DESC;`
            }
        }

    }
    if (CaseFilter.filter == 3) {
        query += ` WHERE uuidAssignedUser = NULL; `

    }
    if (CaseFilter.filter == 4) {
        query += ` WHERE desisted = TRUE; `

    }

    /*    todos 0,0
       edad 1, 1 o 2
       fecha 2, 1 o 2
       assigner 3,0
       desisted 4,0 */

    return await StoreCase.filter(query)

}

CaseService.getManyByFilter = async (value) => {
    return await StoreCase.getManyByFilter(value + '%')
}

module.exports = CaseService
