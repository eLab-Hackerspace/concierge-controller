const mosca = require('mosca')

const events = require('./events')
const auth = require('./auth')

const MqttFacade = require('./facade')

var server = null

module.exports = {

  settings() {
    return {
      backend: {
        type: 'memory',
      },
      port: 1883,
    }
  },

  create() {
      return new mosca.Server(this.settings())
  },

  boot(callback) {

    server = this.create()

    server.on('ready', () => {

      events.register(server)
      auth.register(server)

      callback()
    })
  },

  getFacade() {
    return new MqttFacade(server)
  }

}
