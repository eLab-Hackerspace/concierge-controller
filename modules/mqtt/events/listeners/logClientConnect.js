const logger = require('../../logger')

module.exports = (client) => {
  logger.success('Client Connected: ' + client.id)
}
