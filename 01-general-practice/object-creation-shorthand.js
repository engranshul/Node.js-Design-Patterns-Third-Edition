console.log("******shorthand*****");
function getObject(name,age) {
  return {name,age};
}

const result = getObject("anshul",32);
console.log(result);

console.log("******creating employee object********");
const emp = {
  "fname" : "anshul",
  "lname" : "chauhan",
  "emp_id":128877,
  "func" : function getfullName() {
      return this.fname +" "+this.lname;
  }
}

console.log(emp.func());
