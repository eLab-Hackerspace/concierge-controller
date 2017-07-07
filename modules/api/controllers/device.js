const express = require('express')
const router = express.Router()
const store = require('../../store/clients')

router.get('/', (req, res) => {
  res.send({
    devices: store.getAll()
  })
})

module.exports = router
