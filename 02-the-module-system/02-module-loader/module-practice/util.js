const order_count = 10;

function add(a,b) {
    return a+b;
}

module.exports.add =add;
module.exports.myConst = order_count;

// below line wont have any effect and wont effect what is 
// being exported..
exports = {}

// concept that how exports points to the same object that
// module.exports point to