import MyLogger from './logger.js'

const logger = new MyLogger('info')
logger.log('Hello World')

// key differences btw default n named exports ??
// In default export, a given functionality could have different 
// names in different files, so its harder to make inferences

// The default export is a convenient m/c to communicate what is the
// single most imp functionality for a module

