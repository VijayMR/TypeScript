/*
TypeScript provides 3 access modifiers:

1)public (default) → Accessible everywhere.
2)private → Accessible only within the same class.
3)protected → Accessible within the class and its child classes.

| Modifier  | Same Class | Child Class | Outside Class |
| --------- | ---------- | ----------- | ------------- |
| public    | ✅          | ✅           | ✅             |
| private   | ✅          | ❌           | ❌             |
| protected | ✅          | ✅           | ❌             |

*/
class Employee {

    public name: string;
    private salary: number;
    protected department: string;

    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    showDetails(): void {
        console.log(this.name);       // ✅
        console.log(this.salary);     // ✅
        console.log(this.department); // ✅
    }
}

class Manager extends Employee {

    display(): void {
        console.log(this.name);       // ✅ public
        // console.log(this.salary);  // ❌ private
        console.log(this.department); // ✅ protected
    }
}

let emp = new Employee("John", 50000, "QA");

console.log(emp.name);        // ✅ public
// console.log(emp.salary);   // ❌ private
// console.log(emp.department);// ❌ protected