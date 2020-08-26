const multer = require('multer')
const path = require('path')
const uuid = require('uuid')

var store = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, uuid.v4() + path.extname(file.originalname))
    }
})

var upload = multer({ storage: store }).single('document')

const uploadFile = (req, res, next) => {

    upload(req, res, (err) => {
        if (err) {
            err.message = 'Error en la carga del archivo'
            return res.send(err)
        }
        
        req.filename = req.file.filename
        next()
    })

}

module.exports = uploadFile;