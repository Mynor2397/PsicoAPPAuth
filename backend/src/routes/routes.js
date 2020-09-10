const Router = require('express').Router()
const testingapp = require('./testingapp.route')

Router.use(testingapp)

module.exports = Router;