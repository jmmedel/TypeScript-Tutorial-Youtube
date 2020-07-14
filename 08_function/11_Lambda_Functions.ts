
/*
Lambda Functions
Lambda refers to anonymous functions in programming. 
Lambda functions are a concise mechanism to represent anonymous functions. 
These functions are also called as Arrow functions.

There are 3 parts to a Lambda function −

Parameters − A function may optionally have parameters

The fat arrow notation/lambda notation (=>) − It is also called 
as the goes to operator

Statements − represent the function’s instruction set

( [param1, parma2,…param n] )=>statement;


*/

var test = (x:number)=>10 + x 
let test2 = (x:number,y:number)=> x + y
console.log(test(100))      //outputs 110 
console.log(test2(1,1))      //outputs 2

