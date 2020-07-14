
/*
Anonymous Function

Functions that are not bound to an identifier (function name) 
are called as anonymous functions. 
These functions are dynamically declared at runtime. 
Anonymous functions can accept inputs and return outputs, 

var res = function( [arguments] ) { ... }

*/

var msg = function() { 
    return "hello world";  
} 
 console.log(msg());

let res = function(a:number,b:number){
    return a*b;
} 
console.log(res(2,2));