//constructor overloading, TypeScript supports method overload signatures but only one implementation.

class Calculator {

    // Overload Signatures
    add(a: number, b: number): number;
    add(a: string, b: string): string;

    // Implementation
    add(a: any, b: any): any {
        return a + b;
    }
}

let c = new Calculator();

console.log(c.add(10, 20));
console.log(c.add("Hello ", "World"));

//Example 2:
class Sstudent {

    getDetails(name: string): string;
    getDetails(name: string, age: number): string;

    getDetails(name: string, age?: number): string {
        if (age !== undefined) {
            return `${name} is ${age} years old`;
        }
        return `${name}`;
    }
}

let s = new Sstudent();

console.log(s.getDetails("John"));
console.log(s.getDetails("John", 25));