const modules = require('./modules')
const Logger = require('./lib/logger')
const logger = new Logger('CONTROLLER')

modules.bootAll((moduleName) => {
  logger.log('Module "' + moduleName + '" is now ready!')
})
