/*
The instanceof operator
The instanceof operator returns true if the object belongs to the specified type.
*/

class Person{ } 
var obj = new Person() 
var isPerson = obj instanceof Person; 
console.log(" obj is an instance of Person " + isPerson);
