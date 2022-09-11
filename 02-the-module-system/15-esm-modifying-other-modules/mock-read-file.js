// importing default export
import fs from 'fs'   

// save reference to original implementation
const originalReadFile = fs.readFile

let mockedResponse = null

// actual mocked impl that we want to use to replace the  original impl
function mockedReadFile (path, cb) {
  setImmediate(() => {
    cb(null, mockedResponse)
  })
}

// used to activate mock functionality
// original impl will be swapped wd mocked one
export function mockEnable (respondWith) {
  mockedResponse = respondWith
  fs.readFile = mockedReadFile
}

// used to restore original impl
export function mockDisable () {
  fs.readFile = originalReadFile
}


// import * as fs from 'fs'
// import {readFile} from 'fs'
// The reason why using one of the above two import statements
// would not work is because our mocking utility is altering
// only the copy of the readFile() function that is registered
// inside the object exported as the default export, but 
// not the one available as a named export at the top level
// of the module

// This example shows how mockey patching could be much more
// complicated n unreliable in context of ESM..For this reason,
// testing frameworks just as jest provide special functionalities
// to be able to mock ES modules reliably

// more on mockey patching