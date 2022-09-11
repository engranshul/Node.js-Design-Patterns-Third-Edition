exports.info = (message) => {
  console.log(`info: ${message}`)
}

exports.verbose = (message) => {
  console.log(`verbose: ${message}`)
}

console.log("***********");
console.log(exports == module.exports);
console.log(exports === module.exports);

// named exports : involves assigning the values we want to make
// public to properties of the object referenced by exports
// In this way, resulting exported object becomes a container
// or namespace for a set of related functionalities

