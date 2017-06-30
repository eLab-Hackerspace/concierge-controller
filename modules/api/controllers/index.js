const express = require('express')
const router = express.Router()

router.use('/device', require('./device'))

module.exports = router
