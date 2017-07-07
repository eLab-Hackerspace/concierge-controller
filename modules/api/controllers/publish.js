const express = require('express')
const router = express.Router()
const mqtt = require('../../mqtt')

router.post('/:topic([\w\/\-\_]+)', (req, res) => {
  const topic = req.params.topic

  const message = {
    topic,
    payload: null,
    status: 0
  }

  mqtt.getFacade().trigger(
    message.topic,
    message.payload,
    () => {
      message.status = 'success'
      res.send(message)
    }
  )

})

module.exports = router
