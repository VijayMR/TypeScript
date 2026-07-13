/*
Module in TypeScript

A Module is a way to organize code into separate files and reuse it using export and import.

Why Modules?

✅ Better code organization
 ✅ Reusability
 ✅ Avoids variable name conflicts
 ✅ Easier maintenance

 A TypeScript module is a separate file containing related code that can be shared with other files using export and import keywords.
*/

//Exporting Variables and Functions
/*
utils.ts -->file
export let company = "Microsoft";

export function add(a:number,b:number):number{
 return a+b;
}

main.ts -----> file
import { company, add } from "./utils";

console.log(company);
console.log(add(10,20));

Output
Microsoft
30
*/
