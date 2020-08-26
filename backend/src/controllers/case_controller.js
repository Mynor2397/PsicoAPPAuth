const CaseService = require('../services/case_service')
const errors = require('../lib/utils/database.errors')
const http = require('../lib/utils/status.response')
const Response = require('../models/response.model')
const Case = require('../models/ncase.model')

const handCase ={}


handCase.filter = async(req, res)=>{
   dataFilter = req.params
    try{
        console.log(dataFilter)
        let result = await CaseService.filter(dataFilter)
        return res
            .status(http.StatusOK)
            .json({
                ok: true,
                message: "Consulta exitosa",
                data: result
        })

    }catch(error){
        if (error == http.StatusNotFound) {
            return res
                .status(http.StatusNotFound)
                .json(new Response(false, "Registros no encontrados"))
        }
        return res
        .status(http.StatusInternalServerError)
        .json({
            error: "Internal Server Error"
        })
    }
    
}



module.exports = handCase;