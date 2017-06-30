const mqtt = require('mqtt')
const clientId = 'test_door'
const client  = mqtt.connect('mqtt://127.0.0.1', {
  username: 'test',
  password: 'test',
  clientId,
})

client.on('connect', function () {
  client.subscribe(channel('lock'))
  client.subscribe(channel('unlock'))
})

function channel(topic) {
  return 'elab/' + clientId + '/' + topic
}

client.on('message', function (topic, message) {

  if (topic === channel('lock')) {
    console.log('Door needs to Lock')
  }

  if (topic === channel('unlock')) {
    console.log('Door needs to Unlock')
  }

})
