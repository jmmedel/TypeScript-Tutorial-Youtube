/*

programs the ability to combine one or two types. 
Union types are a powerful way to express a value
that can be one of the several types. 
Two or more data types are combined using the pipe symbol (|) to denote a Union Type.
In other words,
 a union type is written as a sequence of types separated by pipe line .
*/

let val:string|number;
val = 26
console.log("numeric value of val = " + val);
val = "kagaya john";
console.log("String value of val = " + val);


