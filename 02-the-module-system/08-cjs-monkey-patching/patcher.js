require('./logger').customMessage = function () {
  console.log('This is a new functionality')
}


// A module can modify other modules or objects in global
// scope; this is called monkey patching

// See how using patcher.js we didnt modify logger.js and
// still added customMessage function in it..
