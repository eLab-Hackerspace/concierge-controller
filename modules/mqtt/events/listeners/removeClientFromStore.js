const store = require('../../../store/clients')

module.exports = (client) => {
  store.remove(client.id)
}
