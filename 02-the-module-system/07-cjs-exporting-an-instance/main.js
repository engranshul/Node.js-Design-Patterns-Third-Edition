const logger = require('./logger')

// logger is an instance
logger.log('This is an informational message')

// using constructor property to create a new instance
const customLogger = new logger.constructor('CUSTOM')
customLogger.log('This is an informational message')


// It does not guarantee uniqueness of the instance
// across the entire application, as it happens in
// the traditional singleton. When analyzing resolving
// algo, we have seen that a module might be installed
// multiple times inside the dependency tree of the same
// node js application..


