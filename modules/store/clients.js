var clients = []

module.exports = {

  getAll() {
    return clients
  },

  add(clientId) {
    clients.push(clientId)
  },

  remove(clientId) {
    var index = clients.indexOf(clientId)
    clients.splice(index, 1)
  }

}
