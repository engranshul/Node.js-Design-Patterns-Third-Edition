import { ImmutableBuffer } from './immutableBuffer.js'

const hello = 'Hello!'
// amazing concept of being able to write only at object construction time
const immutable = new ImmutableBuffer(hello.length,
  ({ write }) => {
    write(hello)
  })

console.log(String.fromCharCode(immutable.readInt8(0)))
console.log(String.fromCharCode(immutable.readInt8(1)))
console.log(String.fromCharCode(immutable.readInt8(2)))
console.log(String.fromCharCode(immutable.readInt8(3)))
console.log(String.fromCharCode(immutable.readInt8(4)))

// below line will through error : immutable.write is not a function"
immutable.write('Hello?')
