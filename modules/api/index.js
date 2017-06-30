const express = require('express')
const app = express()
const logger = require('./logger')

module.exports = {

  boot(callback) {

    app.use('/', require('./controllers'))

    app.listen(3000, () => {
      logger.success('Controller API listening on port 3000!')
      callback()
    })

  }

}
