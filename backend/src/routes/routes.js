const Router = require('express').Router()
const testingapp = require('./testingapp.route')

Router.use(testingapp)
Router.use('/therapeuticplan', require('./therapeuticplan.route'))
module.exports = Router;