const express = require('express')
const router = express.Router()

router.use('/device', require('./device'))
router.use('/publish', require('./publish'))

module.exports = router
