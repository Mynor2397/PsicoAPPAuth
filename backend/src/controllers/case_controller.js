const { validationResult } = require('express-validator');
const CaseService = require('../services/case_service')
const errors = require('../lib/utils/database.errors')
const http = require('../lib/utils/status.response')
const respondError = require('./respond');
const Case = require('../models/ncase.model')


const handCase = {}

handCase.create = async (req, res) => {
    const NewCase = validationResult(req)
    if (!NewCase.isEmpty()) {
        return res.status(http.StatusBadRequest).json({ errors: NewCase.array() });
    }

    try {
        let result = await CaseService.create(req.body)
        return res.status(http.StatusOK)
            .json(
                {
                    ok: true,
                    message: "solicitud exitosa",
                    data: result
                })
    } catch (error) {
        respondError(res, error)
        return 
    }
}

handCase.update = async (req, res) => {
    const UpdateCase = validationResult(req)
    if (!UpdateCase.isEmpty()) {
        return res.status(http.StatusBadRequest).json({ errors: UpdateCase.array() });
    }

    try {
        let result = await CaseService.update(req.params.id, req.body)
        return res.status(http.StatusOK)
            .json({
                ok: true,
                message: "Actualizción exitosa",
                data: result
            })
    } catch (error) {
        respondError(res, error)
        return 
    }
}

handCase.get = async (req, res) => {
    try {
        let result = await CaseService.get(req.body)
        return res.status(http.StatusOK)
            .json({
                ok: true,
                message: "Solicitud exitosa",
                data: result
            })
    } catch (error) {
        return res
            .status(http.StatusInternalServerError)
            .json({
                error: "Internal Server Error"
            })
    }
}

handCase.getid = async (req, res) => {
    try {
        let result = await CaseService.getid(req.params.uuid)

        return res
            .status(http.StatusOK)
            .json({
                ok: true,
                data: result
            })

    } catch (error) {

        if (error == http.StatusNotFound) {
            return res
                .status(http.StatusNotFound)
                .json({
                    ok: false,
                    message: "Verificar que el uuid este correcto",
                    data: error
                })
        }

        respondError(res, error)
        return
    }

}

handCase.getstage = async (req, res) => {
    try {
        let result = await CaseService.getstage(req.body)
        return res.status(http.StatusOK)
            .json({
                ok: true,
                message: "Solicitud exitosa",
                data: result
            })
    } catch (error) {
        return res
            .status(http.StatusInternalServerError)
            .json({
                error: "Internal Server Error"
            })
    }
}

handCase.getpersonuser = async (req, res) => {
    try {
        let result = await CaseService.getpersonuser(req.body)
        return res.status(http.StatusOK)
            .json({
                ok: true,
                message: "Solicitud exitosa",
                data: result
            })
    } catch (error) {
        return res
            .status(http.StatusInternalServerError)
            .json({
                error: "Internal Server Error"
            })
    }
}

handCase.getpersonpatient = async (req, res) => {
    try {
        let result = await CaseService.getpersonpatient(req.body)
        return res.status(http.StatusOK)
            .json({
                ok: true,
                message: "Solicitud exitosa",
                data: result
            })
    } catch (error) {
        return res
            .status(http.StatusInternalServerError)
            .json({
                error: "Internal Server Error"
            })
    }
}

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
                .json({
                    ok: false, 
                    message: "Registros no encontrados"
                })
        }
        return res
        .status(http.StatusInternalServerError)
        .json({
            error: "Internal Server Error"
        })
    }
    
}



module.exports = handCase;