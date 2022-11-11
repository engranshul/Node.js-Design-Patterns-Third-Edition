// There r several circumstances in which the presence
// of a callback argument might make us think that a
// function is async or is using a CPS

const result = [1, 5, 7].map(element => element - 1)
console.log(result) // [0, 4, 6]

// Clearly the callback is used to iterate over the
// elements of the array n not to pass the result 
// of the operation.In fact, the result is returned
// synchronously using a direct style.

