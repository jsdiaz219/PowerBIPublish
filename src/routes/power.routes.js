const express = require('express')
const router = express.Router()

const { getVentas, postVenta } = require('../controllers/power.controllers')

router.get('/ventas', getVentas)
router.get('/postventa', postVenta)

module.exports = router