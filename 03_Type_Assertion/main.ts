
/* 
Type Assertion in TypeScript
TypeScript allows changing a variable from one type to another.
TypeScript refers to this process as Type Assertion.
The syntax is to put the target type between < > symbols and place it in front of the variable
or expression.

*/


let str = "26"
let str2:number = <number> <any> str
console.log(typeof(str2))


/* 
The reason why it's not called "type casting" is that casting generally
implies some sort of runtime support while, “type assertions” 
are purely a compile time construct and a way for you to provide hints
to the compiler on how you want your code to be analyzed.

*/