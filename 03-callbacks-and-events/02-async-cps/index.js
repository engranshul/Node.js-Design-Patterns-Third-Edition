function additionAsync (a, b, callback) {
  setTimeout(() => callback(a + b), 100)
}

console.log('before')
additionAsync(1, 2, result => console.log(`Result: ${result}`))
console.log('after')

// setTimeout() can be used to schedule code execution
// after a designated amount of milliseconds. This 
// function is similar to window.setTimeout() 
// from the browser JavaScript API

// Async function returns immediately and its result
// is passed to a handler at a later cycle of the 
// event loop

