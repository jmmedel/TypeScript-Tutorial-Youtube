
/*
The Function Constructor
TypeScript also supports defining a function with the built-in
JavaScript constructor called Function ().

var res = new Function([arguments]) {...}
*/

var Addition = new Function("a", "b", "return a + b"); 
var x = Addition(4, 3); 
console.log(x);

var Substraction = new Function("a", "b", "return a - b"); 
var x = Substraction(4, 3); 
console.log(x);

var Division = new Function("a", "b", "return a / b"); 
var x = Division(4, 3); 
console.log(x);

var Multiplication = new Function("a", "b", "return a * b"); 
var x = Multiplication(4, 3); 
console.log(x);
