const express =require('express');
const morgan = require('morgan');
const cors = require('cors');
const app =express()



app.set('port', process.env.PORT||3000)

app.use(cors())

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))


//Starting the server
app.listen(app.get('port'), ()=>{
    console.log('Server on port', app.get('port'));
});