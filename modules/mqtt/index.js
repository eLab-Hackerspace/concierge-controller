const mosca = require('mosca')

const events = require('./events')
const auth = require('./auth')

const MqttFacade = require('./facade')

const SECURE_KEY = 'certificates/broker.key.pem';
const SECURE_CERT = 'certificates/broker.cert.pem';
const SECURE_CA = 'certificates/ca-chain.cert.pem';

var server = null

module.exports = {

  settings() {
    return {
      backend: {
        type: 'memory',
      },
      secure: {
        port: 8883,
      },
      credentials: {
        keyPath: SECURE_KEY,
        certPath: SECURE_CERT,
        caPaths: [ SECURE_CA ],
        requestCert: true,
        rejectUnauthorized: true,
      }
    }
  },

  create() {
      return new mosca.Server(this.settings())
  },

  boot(callback) {

    server = this.create()

    server.on('ready', function () {

      events.register(server)
      auth.register(server)

      callback()
    })
  },

  getFacade() {
    return new MqttFacade(server)
  }

}
