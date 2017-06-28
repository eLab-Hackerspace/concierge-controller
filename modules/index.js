const api = require('./api')
const mqtt = require('./mqtt')
const socketio = require('./socketio')

const modules = {
  api,
  mqtt,
  socketio
}

module.exports = {
  bootAll(callback) {
    const moduleNames = Object.keys(modules)

    moduleNames.forEach((moduleName) => this.boot(moduleName, () => {
      callback(moduleName)
    }))
  },

  boot(module, callback) {
    return modules[module].boot(callback)
  }
}
