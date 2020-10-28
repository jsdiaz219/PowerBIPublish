const express = require('express')
const router = express.Router()

const { getVentas, postVenta, homePage } = require('../controllers/power.controllers')

router.get('/', homePage)
router.get('/ventas', getVentas)
router.get('/postventa', postVenta)


module.exports = router