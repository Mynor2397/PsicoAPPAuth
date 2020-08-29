const multerS3 = require('multer-s3')
const multer = require('multer')
const aws = require('aws-sdk')
const path = require('path')
const uuid = require('uuid')

const database = require('../lib/utils/env.config')
const { rejects } = require('assert')
const s3 = {}
var S3 = new aws.S3({
    accessKeyId: database.accesskey,
    secretAccessKey: database.secretkey
})


s3.uploadFileS3 = multer({
    storage: multerS3({
        s3: S3,
        bucket: 'documentspsicoapp',
        key: function (req, file, cb) {
            cb(null, uuid.v4() + path.extname(file.originalname))
        }
    })
})

s3.getFile = async (filename) => {

    var params = {
        Bucket: 'documentspsicoapp',
        Key: filename,
        Expires: 60
    };

    var url = S3.getSignedUrl('getObject', params);
    return url;
}


s3.deleteFromS3 = (fileName) => {
    if (fileName == undefined || fileName == '') {
    } else {
        var params = {
            Bucket: 'documentspsicoapp',
            Key: fileName
        };
        console.log(params);
        S3.deleteObject(params, (err, data) => {
            if (err) console.log(err, err.stack);
            else console.log('delete', data);
        })
    }
}

s3.uploadFile = (req, res, next) => {
    if (req.file === undefined || req.file === '') {
        next()
    } else {
        req.filename = req.file.key
        next()
    }
}



module.exports = s3