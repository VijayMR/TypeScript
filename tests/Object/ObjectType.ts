//Object - It is the collection of variables and methods
//       - object is the collection of key and value pair in the typescript
//       - It is also defined as it contains the group of properties and behaviour

//Types:
// 1)Object type --> Directly defines the value for the variables
// 2)Inline type object --- >We define data type of each key
// 3)Type aliases
// 4)classes


//Object type
//Example1:
let dev:Object={ //object keyword is not mandatory....during the run time it would be assigned.
    name:"Raja", //----->key and value pair (eg:name is key and Raja is the value)
    age: "30", //----> directly we are assigning the values to the property
    job:"Engineer",
    getemployeedetails:function(){
        return `${this.name} age is ${this.age} and working as ${this.job}`;
    }
}
console.log(typeof dev);
//console.log(dev.name); //Error is due to the keyword **Object** used as the datatype.

//Example2:
let employee={
    name:"John",
    age: "30", 
    job:"Pilot",
    getemployeedetails:function(){
        return `${this.name} age is ${this.age} and working as ${this.job}`;
    }
}

//Retrieve the value from the employee object
console.log(typeof employee);
console.log();
console.log("==>Using the dot notation")
console.log(employee.name);
console.log(employee.job);
console.log(employee.age);
console.log(employee.getemployeedetails());
console.log();
console.log("==>Using the dot notation")
console.log(employee["name"]);
console.log(employee["job"]);
console.log(employee["age"]);
console.log(employee["getemployeedetails"]());