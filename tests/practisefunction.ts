//Normal function
function A(){
    console.log("Normal function");
}
A();

//Normal function with parameter
function Bus(x:number){
    return x;
}
console.log(Bus(3));

//Optional parameter
function OptionalP(x:number,y:number,z?:number){
    console.log(` ${x} +   ${y}   +   ${z||0}`);
    return x+y+(z||0);
}
console.log(OptionalP(10,20,30));//With optional value
console.log(OptionalP(10,20));//Without optional value

//Default Parameters
function defaultP(x:number,y:number,z:number=10){
    return x+y+z;
}
console.log(defaultP(10,20,10));//with default value provided
console.log(defaultP(10,30));//with default value provided

//ananymous function without parameters
let me=()=> console.log("Welcome to TypeScript Practise");
me();

//ananymous function with parameters with return type without return keyword
let done=(x:number,y:number)=> console.log(x+y);
done(100,30);

//ananymous function with parameters with return type
let come=(x:number,y:number):number=>{
    return x+y;
}
console.log(come(100,40));

//MethodsOverloading.
function Practisenew(x:number,y:number):number;
function Practisenew(x:string,y:string):string;

function Practisenew(x:number,y:number):number{
    console.log(x+y);
    return x+y;
}
Practisenew(1,3);

//Rest parameter
function greetings(name:string,...value:string[]){
   return name + "  "+value.join(", ");
}
console.log(greetings("Vijay","Success"));// for name and one value
console.log(greetings("Vijay"));
console.log(greetings("Vijay","Success","victory"));// for name and multiple value