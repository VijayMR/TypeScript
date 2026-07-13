// Inheritance -  where we extend one class property and use into the other class using the extendeds keyword.

import { Interface } from "node:readline"

/*
Rules:
class -> Extends -> class
Interface -> Extends -> Interface
class -> implements -> Interface
Interface cannot implement a class.
*/

class a{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }

    getName(){
        console.log(`The Name is ${this.name}`)
    }
    getAge(){
        console.log(`The Name is ${this.age}`)
    }
    
}
let qa=new a("Gana",30);
console.log(qa.name);
console.log(qa.age);

class b extends a{
    grade:string;

    //constructor(grade:string){ //Error - We can have only one constructor as we inherit the class a
     constructor(name:string,age:number,grade:string){ //We have to pass the parameters of the class a constructor in the class b.
        super(name,age); //super() keyword should be used in the first line of the constructor.
        this.grade=grade;
        console.log(`The name is ${this.name} and age is ${this.age} and grade is ${this.grade}`);
    }

    getGrade(){
        console.log("The grade is ",this.grade)
    }
     getName(){ // getName is there in the class a and b it will take the class b as the method is overrided.
        console.log(`The Name is MethodOverrided`)
    }
}

let bq=new b("Vijay",28,"A"); // o/p=> on invoking the object alone "The name is Vijay and age is 28 and grade is A";
console.log(bq.getAge());
console.log(bq.getName());
console.log(bq.getGrade());