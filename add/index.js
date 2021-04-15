function add(numA, numB) {
    return numA + numB;
}
console.log(add(1, 2));
function addArrayItems() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    var total = 0;
    params.forEach(function (num) {
        total += num;
    });
    return total;
}
console.log(addArrayItems(1, 3, 4));
