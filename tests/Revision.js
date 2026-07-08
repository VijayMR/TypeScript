"use strict";
//normal function
function newadd() {
    console.log("revision normal function");
}
newadd();
//function with parameter
function newfunctionadd(x, y) {
    console.log(`the Value of ${x} and ${y}`);
}
console.log(newfunctionadd(10, 20));
//function with return tyoe
function newfunctionadding(x, y) {
    console.log(`the Value of ${x} and ${y}`);
    return x + y;
}
console.log(newfunctionadding(10, 20));
//anonyms function
let aaa = () => {
    console.log("Ananymous function");
};
aaa();
//anonyms function with parameter
let bbb = (x, y) => {
    console.log(`Ananymous function with parameter : ${x} and ${y}`);
};
console.log(bbb(20, 20));
