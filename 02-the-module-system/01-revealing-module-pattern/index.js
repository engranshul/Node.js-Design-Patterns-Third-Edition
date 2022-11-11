console.log("******iffe practice*******");

const result = function add(a,b) {
  return a+b;
}(1,4);
console.log(result);

console.log("***************************");
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
console.log(myModule.privateFoo, myModule.privateBar) // not accessible


// Most successful JS module systems are : asynchronous module definition(amd)
// popularized by RequireJs and later universal module defintion(umd)

// Node.js has two module systems: CommonJS modules and ECMAScript modules.

// Feeling is that ECMAScript modules is going to become the defacto way to
// manage javascript modules in both browser n server landscape

// JavaScript programs started off pretty small — most of its usage in the
// early days was to do isolated scripting tasks, providing a bit of 
// interactivity to your web pages where needed, so large scripts were
// generally not needed. Fast forward a few years and we now have complete 
// applications being run in browsers with a lot of JavaScript, as well as 
// JavaScript being used in other contexts (Node.js, for example).