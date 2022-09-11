import * as a from './a.js'
import * as b from './b.js'

console.log('a ->', a)
console.log('b ->', b)

// The interesting bit here is that the modules a.js and b.js
// have a complete picture of each oter,unlike what would happen
// with CommonJS..

// Every module is visited only once..


