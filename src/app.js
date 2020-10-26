const express = require('express')
const morgan = require('morgan')


// inicialization
const app = express()

//middlewares
app.use(morgan('dev'))
app.use(express.json())

//routes
app.use(require('./routes/power.routes'))

module.exports = app