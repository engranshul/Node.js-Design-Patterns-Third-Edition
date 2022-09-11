module.exports = (message) => {
  console.log(`info: ${message}`)
}

module.exports.verbose = (message) => {
  console.log(`verbose: ${message}`)
}


// One of the most popular module defintion patterns consists of
// reassigning the whole module.exports variable to a function.
// The main strength of this pattern is the fact that it allows 
// you to expose only a single functionality, which provides a 
// clear entry point for the module.It also honours the principle
// of small surface area very well..

// A possible extension of this pattern is using the exported 
// function as a namespace for other public APIs.This is a very
// powerful combination..



