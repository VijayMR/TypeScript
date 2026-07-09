//Function - Set of code inside the block is called as a function.

//Types
        //==> Named function
        //==> Ananymous function
        //==> Lamda function

//Named functions are one which is defined with name for the function
console.log("====>Named function<=====")

console.log("=>Named function with no parameter and no return type")
function nicosia(){
    console.log("Printed nicosia")
}
nicosia();
                            //or
function city():void{
    console.log("Printed city")
}
city();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("=>Named function with parameter no return type")
function tavantt(X:number,Y:number){
    console.log(`The Value of X: ${X} and Y: ${Y} with no return type`)
}
tavantt(2,3);
                            //or
function tavant(X:number,Y:number):void{
    console.log(`The Value of X: ${X} and Y: ${Y} with no return type and as void`)
}
tavant(2,3);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("=>Named function with **Single** rest parameter with no return type")
// Where in the rest parameter we are not going to restrict the count of parameter/ argument values that
//  can be used for the single datatype it count be for any n number 1 to 10000000000000.......even more
function classmate(...classmate:number[]){
    console.log("The Count Of classmate with no return type is",classmate.length);
}
classmate(1);
classmate(1,2);
classmate(1,2,3);
                             //or
console.log("=>Named function with **Single** rest parameter with no return type and as void")
function classmatenote(...classmate:number[]):void{
    console.log("The Count Of classmatenote with no return type as void is",classmate.length);
}
classmatenote(1,2,3,4,5);
classmatenote(1,2,3,4,5,6);
classmatenote(1,2,3,4,5,6,7);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("=>Named function with **Single** rest parameter with return type")
// Where in the rest parameter we are not going to restrict the count of parameter/ argument values that
//  can be used for the single datatype
function cyprus(...classmate:number[]):number{
    return classmate.length;
}
console.log(cyprus(1));
console.log(cyprus(1,2));
console.log(cyprus(1,2,3)); //It can be verified for the n numbers
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("=>Named function with **Multiple** rest parameter with no return type")
// Where in the rest parameter we are not going to restrict the count of parameter/ argument values that
//  can be used for the multiple datatype
function cover(...cover:(String|number)[]){
    console.log(cover.length);
}
cover(1);
cover(1,2);
cover(1,2,3);
                            //or
console.log("=>Named function with **Multiple** rest parameter with no return type and as void")
function at(...at:(String|number)[]):void{
    console.log(at.length);
}
at(1);
at(1,2);
at(1,2,3);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("=>Named function with **Multiple** rest parameter with return type")
// Where in the rest parameter we are not going to restrict the count of parameter/ argument values that
//  can be used for the multiple datatype
function yours(...yours:(String|number)[]):number{
    return yours.length;
}
console.log(yours(1));
console.log(yours(1,2));
console.log(yours(1,"Goes",3));
console.log(yours(1,"Goes",3,"*Challenge"));
console.log(yours("for","Goes","Luyb","*Challenge","Eshwar"));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("=>Named function with Optional parameter with no return type")
// Optional parameter is declared in the function we need not assign the value or it is not mandatory to get the parameter assigned
function department(x:number,y?:number){
    console.log(`Optional Parameter: x: ${x} and y: ${y}`);
}
department(10,20);
department(100);
                                //or
console.log("=>Named function with Optional parameter with no return type as void")
// Optional parameter is declared in the function we need not assign the value or it is not mandatory to get the parameter assigned
function of(x:number,y?:number):void{
    console.log(`Optional Parameter: x: ${x} and y: ${y}`);
}
of(1000,2000);
of(1000);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("=>Named function with Optional parameter with return type")
// Optional parameter is declared in the function we need not assign the value or it is not mandatory to get the parameter assigned
function ok(x:number,y:number=10):number{
   return x+y;
}
console.log(ok(1000,2000));
console.log(ok(1000));// this will use the default value as the y value is not assigned.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

