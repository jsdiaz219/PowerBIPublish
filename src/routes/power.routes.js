const express = require('express')
const router = express.Router()

const { getVentas } = require('../controllers/power.controllers')

router.get('/ventas', getVentas)

module.exports = router