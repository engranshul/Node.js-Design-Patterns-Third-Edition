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
