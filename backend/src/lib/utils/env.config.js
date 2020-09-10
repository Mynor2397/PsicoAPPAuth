var enviroment = require('../../../config/env.config.json');
var node_env = process.env.NODE_ENV || 'development';

const ConfigServer = {
    portserver: enviroment[node_env].PORT_SERVER,
    host: enviroment[node_env].HOST_DATABASE,
    user: enviroment[node_env].DB_USER,
    password: enviroment[node_env].DB_PASSWORD,
    database: enviroment[node_env].DB_NAME,
    accesskey: enviroment[node_env].ACCESS_KEY,
    secretkey: enviroment[node_env].SECRET_KEY
}

// const ConfigServer = {
//     portserver:  '3000',
//     host: 'psicoappdev.chw3xl7zxry2.us-east-1.rds.amazonaws.com',
//     user: 'admin',
//     password:'h3H8SP74tn8eGB8q' ,
//     database: 'PsicoAppTemp',
//     accesskey:'AKIAYDDFLX7V2EEB33WU' ,
//     secretkey: 'ChrehezXUrwa3tqmj8Gj7+aavVyxQZGGcoF6bvC'
// }

module.exports = ConfigServer;