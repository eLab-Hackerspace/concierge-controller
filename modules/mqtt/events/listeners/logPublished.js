const logger = require('../../logger')

module.exports = (packet, client) => {
  logger.success('Published to -> ' + packet.topic);
}
