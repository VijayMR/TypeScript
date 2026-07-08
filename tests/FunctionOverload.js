"use strict";
function combine(a, b) {
    return a + b;
}
console.log("\ncombine function Combining numbers:");
console.log(combine(5, 10));
console.log(combine("Hello, ", "World!"));
console.log(combine(true, false));
console.log("combine function Combining numbers\n");
function makeDate(mOrTimestamp, d, y, z) {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    }
    else {
        return new Date(mOrTimestamp);
    }
}
//const d1 = makeDate(12345678);
//const d2 = makeDate(5, 5, 5);
console.log("\nDate passed with single argument: \n" + makeDate(12345678));
console.log("\nDate passed with multiple arguments: \n" + makeDate(5, 5));
console.log("\nDate passed with multiple arguments: \n" + makeDate(5, 5, 5));
