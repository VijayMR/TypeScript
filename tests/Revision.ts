//normal function
function newadd():void{
    console.log("revision normal function");
}
newadd();

//function with parameter
function newfunctionadd(x:number,y:number):void{
    console.log(`the Value of ${x} and ${y}`);
}
console.log(newfunctionadd(10,20));

//function with return tyoe
function newfunctionadding(x:number,y:number):number{
    console.log(`the Value of ${x} and ${y}`);
    return x+y;
}
console.log(newfunctionadding(10,20));

//anonyms function
let aaa=()=>{
    console.log("Ananymous function");
}
aaa();

//anonyms function with parameter with out return
let bbb=(x:number,y:number):void=>{
    console.log(`Ananymous function with parameter : ${x} and ${y}`);
}
console.log(bbb(20,20));

//anonyms function with parameter with return
let ccc=(x:number,y:number):number=>{
    console.log(`Ananymous function with parameter : ${x} and ${y}`);
    return x+y;
}
console.log(ccc(20,20));

//normal function optional
function revisionAdding(x:number,y:number,z?:number):void{
    console.log(`The number values ${x} + ${y} + ${z||0}`);
}
revisionAdding(10,10,10);
revisionAdding(10,10);

//normal function optional
function revisionAddingParameter(x:number,y:number,z?:number):number{
   // console.log(`The number values ${x} + ${y} + ${z||0}`);
    return x+y+(z||0);
}
 console.log(revisionAddingParameter(10,10,10));
 console.log(revisionAddingParameter(10,10));

 //Default Value
 function defaultvaluefunction(x:number,y:number,z:number=10):number{
    return x+y+z;
 }
 console.log(defaultvaluefunction(11,11,11));
 console.log(defaultvaluefunction(11,11));