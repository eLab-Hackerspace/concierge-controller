const store = require('../../../store/clients')

module.exports = (client) => {
  store.add(client.id)
}
