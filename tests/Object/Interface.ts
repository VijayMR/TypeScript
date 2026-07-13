/*
Interface in TypeScript

An interface is a blueprint that defines the structure of an object or class. It specifies what properties and methods
should exist, but not their implementation.

static keyword only can be used for the class not for the interface.
*/

//Example 1: Interface for an Object
interface Stu {
 name: string;
 age: number;
 isPassed: boolean;

}

let student11: Stu= {
 name: "John",
 age: 20,
 isPassed: true
};
console.log(student11);//o/p=>{ name: 'John', age: 20, isPassed: true }

//Example 2: Interface with Method
interface EmployeeInfonew {
    name: string;
    age: number;
    getDetails(): string;
}

let ept: EmployeeInfonew = {
    name: "Scott",
    age: 30,

    getDetails(): string {
        return `${this.name} is ${this.age} years old`;
    }
};
console.log(ept.getDetails());

//Example 3: Class Implementing Interface
interface Animal {
    sound(): void;
}

class Dog implements Animal {
    sound(): void {
        console.log("Bark Bark");
    }
}

let dog = new Dog();
dog.sound();//Bark Bark

//Example 4 : Multiple Interfaces
interface Person {
    name: string;
}

interface EmployeeInfo {
    empId: number;
}

class Developer implements Person, EmployeeInfo {
    name: string;
    empId: number;

    constructor(name: string, empId: number) {
        this.name = name;
        this.empId = empId;
    }
}
