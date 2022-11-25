import { Image } from './image.js'

// Factory function
function createImage (name) {
  return new Image(name)
}

// Factory invocation..compare line 1 and line 2..think about adva
const image = createImage('photo.jpeg')    // 1
// const image = new Image('photo.jpeg')   // 2

console.log(image)
