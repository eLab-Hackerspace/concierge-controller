const express = require('express')
const router = express.Router()
const store = require('../../store/clients')
const mqtt = require('../../mqtt')

router.get('/', (req, res) => {
  res.send({
    devices: store.getAll()
  })
})

router.get('/:deviceId/operation/:operationName', (req, res) => {

  const mqttFacade = mqtt.getFacade()
  var channel = mqttFacade.buildTopicFromDevice(
    req.params.deviceId,
    req.params.operationName
  )

  mqttFacade.trigger(channel, null, () => {
    res.send({
      status: 'success'
    })
  })
})

module.exports = router
