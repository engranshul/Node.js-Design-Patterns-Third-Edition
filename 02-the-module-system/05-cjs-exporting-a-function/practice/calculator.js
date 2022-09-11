function operation(type) {
  if(type == "add") {
    return add;
  }
  else {
    return mul;
  }
}

function add(a,b) {
    return a+b;
}

function mul(a,b) {
    return a*b;
}

module.exports = operation;