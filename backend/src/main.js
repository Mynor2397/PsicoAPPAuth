const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express()

const server = require('./lib/utils/env.config')

app.set('port', process.env.PORT || server.portserver || 3000)

app.use(cors())

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(require('./routes/person.route'))
app.use(require('./routes/case.route'))
app.use(require('./routes/ncase.route'))
app.use(require('./routes/caseinitial.route'))
app.use(require('./routes/testingapp.route'))
app.use(require('./routes/diagnosedproblem.route'))

//Starting the server
app.listen(app.get('port'), () => {
    console.log(`Listen and server on port: ${ app.get('port')}`);
});