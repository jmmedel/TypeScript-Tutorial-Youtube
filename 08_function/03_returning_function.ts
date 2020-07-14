

/*
function function_name():return_type { 
   //statements 
   return value; 
}

*/

//function defined 
function test():string { //the function returns a string 
    return "Hello World" 
 } 
 
 function test2():number { //the function returns a string 
    let variable = 20; 
    return variable
 } 
  
 function caller() { 
    var msg = test() //function test() invoked 
    console.log(msg) 
    var msg2 = test2() //function test2() invoked 
    console.log(msg2)
   
 } 
 
 //invoke function 
 caller()
