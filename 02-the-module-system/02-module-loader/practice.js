console.log("***require.resolve example***");
const id = require.resolve("./package.json");
console.log("***path for package.json is****"+id);


console.log("*****eval example******")
const x =10;
const y =20;
const equation = "x+y";
const result = eval(equation);
console.log(result);


console.log("***require*******");
console.log(require);
