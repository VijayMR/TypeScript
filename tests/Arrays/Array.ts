//Array 
//---> where multiple or n number of value of the same datatype can be stored in the single variable
//---> It is also the collection in the typescript and the javascript

//2 types
    //-->Dynamic Array
    //-->Fixed Array (Tuple)

//Arrays
console.log();
console.log("==>Arrays with declaration and intitilization seperately")
let bear:string[]=[];
bear[0]="bear1";
bear[1]="bear2";
bear[2]="bear3";
console.log(bear);

console.log();
console.log("==>Arrays with declaration and intitilization combined")
let camel: string[] = ["camel1", "camel2", "camel3", "camel4"];
console.log(camel)

console.log();
console.log("==>Approach using the Array<T>") //---------> Very specific to the typescript and javascript and it is special loop
let snake:Array<string>=["Hello","World","Good","Morning"]
let rabbit:Array<number>=[101,102,103]
let rat:Array<boolean>=[true,false]
let all:Array<any>=["Hello",102,true,null]

console.log();
console.log("Iterate using the for loop") //-------this for is based on the **index**
for(let i=0;i<snake.length;i++){
    console.log("The words in the snake variable is : ",snake[i]);
}

console.log();
console.log("Iterate using the for..in loop") //-------this for..in is based on the **index**
for(let index in rabbit){
    console.log("The numbers in the rabbit is : ",rabbit[index])
}

console.log();
console.log("Iterate using the for..of loop") //-------this for..of is based on the **Value**
for(let value of rat){
    console.log("The condition in the rat is : ",value);
}

console.log();
console.log("==> Using Array in the function without return type")
function spider(a:number,value:string[]){
    console.log(`The array code used is ${a}`)
    for(let index in value){
        console.log("words : ",value[index])
    }
}

spider(1,["Hello","Welcome"])

console.log();
console.log("==> Using Array in the function with return type")
function spid(a:number,value:string[]):boolean{
    console.log(`The array code used is ${a}`)
    for(let index in value){
        console.log(value[index])
       if(value[index] === "Hello"){
        return true;
       }
    }
    return false
}

console.log(spid(1,["Hellos","Welcome"]));

console.log();
console.log("==> Using Array as input and return type as array")
function giff(value:string[]):string[]{
    let newvalue:string[]=[];
    for(let index in value){
       newvalue[index]=value[index].toUpperCase();
    }
   return newvalue;
}
console.log(giff(["hello","world","good","morning"]))



