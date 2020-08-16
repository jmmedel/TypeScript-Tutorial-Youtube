/*

A module is a way to create a group of related variables, functions, classes, 
and interfaces, etc. It executes in the local scope, not in the global scope. 
In other words, the variables, functions, classes, and interfaces declared 
in a module cannot be accessible outside the module directly. We can create 
a module by using the export keyword and can use in other modules by using 
the import keyword.

We can divide the module into two categories:

Internal Module
External Module
*/

namespace Sum {   
    export function add(a, b) {   
       console.log("Sum: " +(a+b));  
    }   
 }  