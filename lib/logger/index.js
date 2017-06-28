const chalk = require('chalk')

module.exports = class Logger {

  constructor(moduleName) {
    this.moduleName = moduleName
  }

  log(message) {
    return this.message(message, 'cyan', 'INFO')
  }

  success(message) {
    return this.message(message, 'green', 'OK')
  }

  moduleString(color, type) {
    return chalk[color]('[' + this.moduleName + ' | ' + type + '] ')
  }

  message(message, color, type) {
    return console.log(this.moduleString(color, type) + message)
  }

  getDate() {
    const date = new Date()

    return date.toISOString()
  }

}
