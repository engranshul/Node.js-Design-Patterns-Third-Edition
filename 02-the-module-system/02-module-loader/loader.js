// In this particular implementation we are using the original
// `resolve()` from Node.js `require`, therefore we have to do the following:

//   1. store a reference to the original require function (`originalRequire`)
//   2. redefine `require` by overriding the global `require` function
//   3. the new `require.resolve()` will essentially need to call the original require `resolve()`

const originalRequire = require

const fs = originalRequire('fs')

function loadModule (filename, module, require) {
  // fs.readFileSync() uses original require
  const wrappedSrc =
    `(function (module, exports, require) {
      ${fs.readFileSync(filename, 'utf8')}
    })(module, module.exports, require)`
  eval(wrappedSrc)
}

// below function simulates the behaviour of the original require()
// function of Nodejs which is used to load a module
require = function require (moduleName) {
  console.log(`Require invoked for module: ${moduleName}`)
  const id = require.resolve(moduleName) // ①
  if (require.cache[id]) { // ②
    return require.cache[id].exports
  }

  // module metadata
  const module = { // ③
    exports: {},
    id
  }
  // Update the cache
  require.cache[id] = module // ④

  // load the module
  loadModule(id, module, require) // ⑤

  // return exported variables
  return module.exports // ⑥
}

require.cache = {}
require.resolve = (moduleName) => {
  // reuse the original resolving algorithm for simplicity
  return originalRequire.resolve(moduleName)
}

// Load the entry point using our homemade 'require'
require(process.argv[2])


// common js: require,exports & module.exports


// comparision with java
// JS require vs Java import
// JS have exports n module.exports..Java has access modifiers
// think how would java import keyword works internally ??


