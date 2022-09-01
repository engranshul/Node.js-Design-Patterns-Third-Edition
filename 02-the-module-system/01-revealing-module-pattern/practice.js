console.log("****simple object example*****");
const obj = {
    name : "anshul",
    age : 10
}
console.log(obj);

console.log("*****object with function****");
const myObj = {
    fname : "anshul chauhan",
    func : function() {
        return this.fname;
    } 
}
// see how in this case fname is directly accessible from myObj
// any way to make fname private n make it accessible only by function func
console.log(myObj.fname);
console.log(myObj.func);
console.log(myObj.func());


console.log("*****can i access variables inside function*********");

function random() {
  const myRandom = Math.random();
  return myRandom;
}
// in js,variables created inside a function r not accessible from outer
// scope..function can use return statement to selectively propogate info
// to outer scope..can we use this way to keep variables private..:)


