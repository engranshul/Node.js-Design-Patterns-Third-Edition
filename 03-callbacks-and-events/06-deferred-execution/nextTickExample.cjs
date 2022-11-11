const process = require('process');
 
process.nextTick(() => {
  console.log('Executed in the next iteration');
});
 
console.log('Executed in the current iteration');


// setImmediate() and setTimeout() are similar, but behave 
// in different ways depending on when they are called.

// setImmediate() is designed to execute a script once the 
// current poll phase completes.
// setTimeout() schedules a script to be run after a minimum
// threshold in ms has elapsed.