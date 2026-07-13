// TypeScript does not support multiple constructor implementations like Java. Instead, it supports constructor
// overload signatures with a single implementation.

class Student {

    name: string;
    age: number;

    // Overload signatures
    constructor(name: string);
    constructor(name: string, age: number);

    // Single implementation
    constructor(name: string, age?: number) {
        this.name = name;
        this.age = age ?? 0;
    }

    display(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

let s1 = new Student("John");
let s2 = new Student("David", 25);

s1.display();
s2.display();