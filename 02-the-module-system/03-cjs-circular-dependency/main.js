// processing starts here
// try reordering below 2 imports
const a = require('./a')
const b = require('./b')

console.log("*******");
console.log("value in a is "+JSON.stringify(a));
console.log("value in b is "+JSON.stringify(b));
console.log("*******");

console.log('a ->', JSON.stringify(a, null, 2))
console.log('b ->', JSON.stringify(b, null, 2))


// Issue here is module b.js has a partial view of module a.js and this partial
// view gets propogated over when b.js is required in main.js
