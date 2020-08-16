
/*

TypeScript Namespaces

The namespace is a way which is used for logical 
grouping of functionalities. It encapsulates the 
features and objects that share common relationships. 
It allows us to organize our code in a much cleaner way.

A namespace is also known as internal modules. 
A namespace can also include interfaces, classes, functions, 
and variables to support a group of related functionalities.

Unlike JavaScript, namespaces are inbuilt into TypeScript.
 In JavaScript, the variables declarations go into 
 the global scope. If the multiple JavaScript files 
 are used in the same project, then there will 
 be a possibility of confusing new users by overwriting 
 them with a similar name. Hence, the use of TypeScript 
 namespace removes the naming collisions.

*/

/// <reference path = "../17_Namespaces/studentCalc.ts"/>  
  
let TotalFee = studentCalc.AnualFeeCalc(1500, 4);  
  
console.log("Output: " +TotalFee); 
