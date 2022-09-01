// immediately invoked function example
const myModule = (() => {
  const privateFoo = () => {}
  const privateBar = []

  const exported = {
    publicFoo: () => {},
    publicBar: () => {}
  }

  return exported
})() // once the parenthesis here are parsed, the function will be invoked

console.log(myModule)
console.log(myModule.privateFoo, myModule.privateBar)


// CommonJS defines a module format. Unfortunately, it was defined without 
// giving browsers equal footing to other JavaScript environments

// RequireJS tries to keep with the spirit of CommonJS, with using string 
// names to refer to dependencies, and to avoid modules defining global 
// objects, but still allow coding a module format that works well natively 
// in the browser
