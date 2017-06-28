const express = require('express')
const app = express()
const logger = require('./logger')

module.exports = {

  boot(callback) {

    app.get('/', (req, res) => {
      res.send({message: 'test'})
    })

    app.listen(3000, () => {
      logger.success('Controller API listening on port 3000!')
      callback()
    })

  }

}
