
/*
Different type of Inheritances

Single − Every class can at the most extend from one parent class

Multiple − A class can inherit from multiple classes. TypeScript doesn’t support multiple inheritance.

Multi-level − The following example shows how multi-level inheritance works.

*/

class Root { 
    
 } 
 
 class Child extends Root {
    
 } 
 class Leaf extends Child {
     
 } //indirectly inherits from Root 
 
 
