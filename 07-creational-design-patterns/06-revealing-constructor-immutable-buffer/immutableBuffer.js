const MODIFIER_NAMES = ['swap', 'write', 'fill']

// Our immutable buffer is acting as a proxy between its
// consumers and the internal buffer object
export class ImmutableBuffer {
  constructor (size, executor) {
    // allocate a Nodejs buffer
    const buffer = Buffer.alloc(size);
    console.log(buffer);
    // object to hold all the methods that can mutate buffer
    const modifiers = {}
    // iterate over properties of our buffer
    for (const prop in buffer) {
      console.log(prop);
      // skip all properties that are not functions
      if (typeof buffer[prop] !== 'function') {
        continue
      }

      // The Array type provides you with an instance method called 
      // some() that allows you to test if an array has at least one
      // element that meets a condition.
      if (MODIFIER_NAMES.some(m => prop.startsWith(m))) {
        // method is a modifier method
        modifiers[prop] = buffer[prop].bind(buffer)
      } else {
        // method is not modifier method
        console.log(this);  // immutable buffer
        this[prop] = buffer[prop].bind(buffer)
      }
    }
    console.log("*******************");
    console.log(modifiers);
    executor(modifiers)
  }
}
