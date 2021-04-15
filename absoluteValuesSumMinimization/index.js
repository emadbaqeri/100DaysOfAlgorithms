function absoluteVauesSumMinimization(a) {
    var isEven = a.length % 2 === 0;
    return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
}
var result = absoluteVauesSumMinimization([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    98,
    10,
    11,
]);
console.log("something that can change", result);
