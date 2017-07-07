const listeners = {

  // When a new Client Connects to the Broker
  'clientConnected': [
    require('./listeners/logClientConnect'),
    require('./listeners/addClientToStore'),
  ],

  // When a connected client is on the proccess of disconnecting
  // from the broker
  'clientDisconnecting': [

  ],

  // When a connected client gets Disconnected from the broker
  'clientDisconnected': [
    require('./listeners/logClientDisconnected'),
    require('./listeners/removeClientFromStore'),
  ],

  // When a message is published
  'published': [
    require('./listeners/logPublished')
  ],

  // When a message is delivered
  'delivered': [

  ],

  // When a topic is subscribed
  'subscribed': [

  ],

  // When a topic is unsubscribed
  'unsubscribed': [

  ],

}

module.exports = {
  register(server) {
    const eventNames = Object.keys(listeners)

    eventNames.forEach((eventName) => {
      listeners[eventName].forEach((listener) => {
        server.on(eventName, listener)
      })
    })
  }
}
