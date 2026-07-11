// 2)Inline type object --- >We define data type of each key

let student:{
    name:string,
    class:number,
    grade:string,
    getStudentDetails:()=>string
}={
    name:"Scott",
    class:12,
    grade:'A',
    getStudentDetails:function(){
        return `${this.name} is class ${this.class}`
    }
}

console.log(student.name)
console.log(student.class)
console.log(student.getStudentDetails())

//***Disadvantage - Each time structure has to be created for the new object creation.

let student1:{  //---->This is structure
    name:string,
    class:number,
    grade:string,
    getStudentDetails:()=>string
}={
    name:"Sins",
    class:11,
    grade:'B',
    getStudentDetails:function(){
        return `${this.name} is class ${this.class}`
    }
}

console.log(student1.name)
console.log(student1.class)
console.log(student1.getStudentDetails())