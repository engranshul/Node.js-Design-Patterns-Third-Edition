exports.loaded = false

const b = require('./b')

module.exports = {
  b,
  loaded: true // overrides the previous export
}

// console.log("loaded : "+exports.loaded);
// console.log("loaded : "+module.exports.loaded);

// Think about how java handles circular dependency
// means two classes importing each other..
// see why unlike above example,java import is first line..