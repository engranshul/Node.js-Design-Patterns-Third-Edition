function addCps (a, b, callback) {
  callback(a + b)
}

console.log('before')
addCps(1, 2, result => console.log(`Result: ${result}`))
console.log('after')


// The addCps() function is synchronous CPS function.
// Its synchronous because it will complete its 
// execution only when the callback completes its 
// execution too..

// Think if we can pass method to another method in 
// java ??...:)