//Normal function
function Success(){
console.log("Success");
}
Success();

//Function with parameter
function anonyms(name:string,standard:string){
console.log(`Name is : ${name} and class is : ${standard}`);
}
console.log(anonyms("vijay","12"));

//Function with parameter and retyurn type
function anonymslittle(name:string,standard:string):string{
console.log(`Name is : ${name} and class is : ${standard}`);
return name + " "+ standard;
}
console.log(anonymslittle("John","10"));

//Optional Parameter
function Optional(name:string,standard:number,rollno?:number):string{
    console.log(`student name is ${name} studying in class ${standard} and rollno is ${rollno} `)
    return "Pass";
}
console.log(Optional("Ashok",10,21));
console.log(Optional("Ashok",10));//rollno is optional

//Default parameter
function DefaultParameter(a:number,b:number,c:number=10):number{
console.log(`Number to be added is ${a}+${b}+${c}`);
return a+b+c;
}
console.log(DefaultParameter(10,10));//As already default value added
console.log(DefaultParameter(10,10,30));//Adding the value to check the count of c is in the consideration.

//Ananymous function
let M=()=> console.log("Ananymous Function without parameter")
//Ananymous function with parameter
let N=(x:number,y:number)=>{ console.log(N(2,2)); }
//Ananymous function with parameter and return type.
let B=(K:number,L:string):string=>{
console.log(`Ananymous function with parameter and return type : ${K}+${L}`);
return K+L;
}
console.log(B(12,"Hello"));

//Ananymous function without mandatory and return type and return keyword
let V=(K:number,L:string)=>{
console.log(`Ananymous function with parameter and return type : ${K}+${L}`);
K+L;
}
console.log(B(100,"Hiiii!!!!!"));

//Rest parameter
function greet(name:string,...value:string[]){
   return name + "  "+value.join(", ");
}
console.log(greet("Vijay","Success"));// for name and one value
console.log(greet("Vijay"));
console.log(greet("Vijay","Success","victory"));// for name and multiple value