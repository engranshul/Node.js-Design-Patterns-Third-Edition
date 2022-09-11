import fs, { readFileSync } from 'fs'
import { syncBuiltinESMExports } from 'module'

fs.readFileSync = () => Buffer.from('Hello, ESM')
syncBuiltinESMExports()

console.log(fs.readFileSync === readFileSync) // true


// The module.syncBuiltinESMExports() method updates all the 
// live bindings for builtin ES Modules to match the 
// properties of the CommonJS exports. It does not add 
// or remove exported names from the ES Modules.

