require('./patcher')
// Above require line is required for monkey patching to work
const logger = require('./logger')

logger.customMessage()
