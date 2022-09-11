const app = require("./calculator.js") 

// looks like monkey patching
app.div = function(a,b) {
    return a/b;
}

console.log("***");
console.log(app);
console.log("***");

const result = app("add")(10,15);
console.log(result);


const result1 = app("mul")(10,15);
console.log(result1);


const result2 = app.div(4,2);
console.log(result2);
