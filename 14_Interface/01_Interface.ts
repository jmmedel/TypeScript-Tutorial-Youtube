
/*


Declaring Interfaces
The interface keyword is used to declare an interface.
Here is the syntax to declare an interface −

Syntax
interface interface_name { 
}

always put I on the begginner name of the interface name 
*/

interface IPerson {

    firstname:string,
    lastname:string,
    age:number,
    sayhi:()=>string
   
}


var customer:IPerson = {
    
    firstname:"john",
    lastname:"kagaya",
    age:26,
    sayhi:():string=> {return "hi there"}

}

console.log(customer.firstname);
console.log(customer.lastname);
console.log(customer.age);
console.log(customer.sayhi());
