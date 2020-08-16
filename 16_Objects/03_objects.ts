
/*
Example: typescript Type template
*/

var person = {
    firstName:"kagaya", 
    lastName:"john ", 
    sayHello:function() {  }  //Type template 
 } 
 person.sayHello = function() {  
    console.log("hello "+person.firstName)
 }  
 person.sayHello()

