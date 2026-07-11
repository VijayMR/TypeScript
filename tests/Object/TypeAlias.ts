//type alias - asing the keyword type we can create the multiple objects refering one structure.

type structure={
    name:string,
    age:number,
    id:string,
    getDetails:()=>String
};

let requiredStudent:structure={
    name:"Steve",
    age:1,
    id:"T001",
    getDetails:function(){
        return `name is ${this.name} and age is ${this.age}, id is ${this.id}`
    }
}
console.log(requiredStudent.getDetails());

let requiredStudent1:structure={
    name:"Cindrella",
    age:2,
    id:"T002",
    getDetails:function(){
        return `name is ${this.name} and age is ${this.age}, id is ${this.id}`
    }
}
console.log(requiredStudent1.getDetails());

//Multiple types of type alias

type multiple1={
    name:string,
    age:number
};

type multiple2={
    emailid:string,
    phonenumber:number,
}

type multiple3=multiple1 & multiple2;

let multiple4:multiple3={
    name:"Papa",
    age:8,
    emailid:"xcv@gmail.com",
    phonenumber:1234568
}
console.log(multiple4.name);