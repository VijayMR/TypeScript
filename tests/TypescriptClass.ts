// User class definition
class User {
  // Parameter property: shorthand for declaring and assigning 'name'
  constructor(private name: string) {}

  public greet(): string {
    return `****************** User :: Hello, my name is ${this.name} ******************\n`;
  }
}

const user = new User("Alice");
console.log(user.greet()); // "Hello, my name is Alice"

// User class definition
class Person {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person = new Person("Muni");
console.log("***********Person Class *********** \n" + person.getName()); // person.name isn't accessible from outside the class since it's private