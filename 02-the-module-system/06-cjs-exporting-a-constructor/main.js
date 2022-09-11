const Logger = require('./logger')

// As its a class than we have to first create object of it
const dbLogger = new Logger('DB')
dbLogger.info('This is an informational message')
const accessLogger = new Logger('ACCESS')
accessLogger.verbose('This is a verbose message')

// Exposing a class still provides a single entry point for the
// module but compared to the substack pattern, it exposes a lot
// more of the module internals. On the other hand, it allows 
// much more power when it comes to extending its functionality




