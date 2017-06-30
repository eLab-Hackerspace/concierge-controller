const logger = require('../logger')

// Accepts the connection if the username and password are valid
const authenticate = function(client, username, password, callback) {
  var authenticated = false

  if (username && password) {
    authenticated = username == password.toString()
  }

  if (authenticated) {
    client.user = username
  }

  callback(null, authenticated);
}

// In this case the client authorized as alice can publish to /users/alice taking
// the username from the topic and verifing it is the same of the authorized user
var authorizePublish = function(client, topic, payload, callback) {
  logger.success('Authorized to Publish to ' + topic)
  callback(null, true);
}

// In this case the client authorized as alice can subscribe to /users/alice taking
// the username from the topic and verifing it is the same of the authorized user
var authorizeSubscribe = function(client, topic, callback) {
  logger.success('Authorized to Subscribe on ' + topic)
  callback(null, true);
}

module.exports = {

  register(server) {
    server.authenticate = authenticate;
    server.authorizePublish = authorizePublish;
    server.authorizeSubscribe = authorizeSubscribe;

  }

}
