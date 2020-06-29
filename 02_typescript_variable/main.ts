
/* 

Variable Declaration in TypeScript
The type syntax for declaring a variable
in TypeScript is to include a colon (:) 
after the variable name, followed by its type.
Just as in JavaScript, we use the var keyword to declare a variable.

 When you declare a variable, you have four options −
(1)Declare its type and value in one statement.

var [identifier]:[type-annonation] = value ; 

(2) Declare its type but no value. In this case, the variable will be set to undefined.
var [identifier]:[type-annonation] ;

(3) Declare its value but no type. The variable type will be set to the data type of the assigned value.
var [identifier] = value ;

(4)Declare neither value not type. In this case, the data type of the variable will be any and will be initialized to undefined.
var [identifier] ;


*/

let firstname:string = "john";
let alias:string;
let nickname = "kagaya25";
let nickanme2;
let lastname:string = "kagaya";
let salary:number = 7000.00;
let age:number = 26;
let fullname = firstname + lastname;

console.log("-----------------");
console.log(firstname);
console.log(lastname);
console.log(salary);
console.log(age);
console.log(fullname);
console.log("-----------------");
