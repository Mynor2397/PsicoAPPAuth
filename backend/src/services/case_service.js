const uuid = require('uuid')
const StoreCase = require('../storage/case_storage')
const Case = require('../models/ncase.model')

const nId = require('../lib/utils/uuid_psa')
const { prototype } = require('../models/case.model')

const CaseService = {}


CaseService.filter = async (FilterCase)=>{
    let CaseFilter = FilterCase
    
   

    var query = `SELECT * FROM grid_casos `

    if(CaseFilter.filter == 0){
        query += `;` 
    }
    if(CaseFilter.filter == 1){
        if(CaseFilter.order == 1){
        query += ` ORDER BY age ASC;`
        }else{
            if(CaseFilter.order == 2){
        query += ` ORDER BY age DESC;`
        }
        }
        
    }
    if(CaseFilter.filter == 2){
        if(CaseFilter.order == 1){
        query += ` ORDER BY creationDate ASC;`
        }else{
            if(CaseFilter.order == 2){
        query += ` ORDER BY creationDate DESC;`
        }
        }
        
    }
    if(CaseFilter.filter == 3){
        query += ` WHERE uuidAssignedUser = NULL; `
        
    }
    if(CaseFilter.filter == 4){
        query += ` WHERE desisted = TRUE; `
        
    }

 /*    todos 0,0
    edad 1, 1 o 2
    fecha 2, 1 o 2
    assigner 3,0
    desisted 4,0 */

    return await StoreCase.filter(query)

}


module.exports = CaseService
