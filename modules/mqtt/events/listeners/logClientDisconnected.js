const logger = require('../../logger')

module.exports = (client) => {
  logger.success('Client Disconnected:  ' + client.id)
}
