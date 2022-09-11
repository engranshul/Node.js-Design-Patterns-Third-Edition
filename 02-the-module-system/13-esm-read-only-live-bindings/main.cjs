// common js example
const counter = require('./counter.cjs')

console.log(counter.count) // prints 0
counter.increment()
console.log(counter.count) // prints 1
counter.count++            // no error witnessed here..
console.log(counter.count) // prints 2
counter.increment()
console.log(counter.count) // prints 3

// In commonJS, the entire exports object is copied(shallow copy)
// when required from a module.This means that, if the value of
// primitive variables like numbers or strings is changed at a
// later time, the requiring module wont be able to see those 
// changes..
