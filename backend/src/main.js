const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express()

const routes = require('./routes/paciente.routes')

app.set('port', process.env.PORT || 3000)

app.use(cors())

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(routes)

//Starting the server
app.listen(app.get('port'), () => {
    console.log(`Listen and server on port: ${ app.get('port')}`);
});