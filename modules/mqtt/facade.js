module.exports = class MqttFacade {
  constructor (server) {
    this.server = server
  }

  trigger (topic, payload = null, callback = null) {
    var message = {
      topic,
      payload,
      qos: 0, // 0, 1, or 2
      retain: false // or true
    }

    return this.server.publish(message, callback)
  }

  buildTopicFromDevice (device, operation) {
    return 'elab/' + device + '/' + operation
  }
}
