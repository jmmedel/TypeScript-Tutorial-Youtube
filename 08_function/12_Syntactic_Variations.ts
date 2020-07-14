

/*
Syntactic Variations
It is not mandatory to specify the data type of a parameter.
In such a case the data type of the parameter is any. 


*/
var func = (x:any)=> { 
    if(typeof x=="number") { 
       console.log(x+" is numeric") 
    } else if(typeof x=="string") { 
       console.log(x+" is a string") 
    }  
 } 
 func(26) 
 func("john")
