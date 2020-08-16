

/*

Interfaces and Inheritance

Syntax: Single Interface Inheritance
Child_interface_name extends super_interface_name

Syntax: Multiple Interface Inheritance
Child_interface_name extends super_interface1_name, 
super_interface2_name,…,super_interfaceN_name

*/

interface IPerson{
    fistname:string
    lastname:string
    age:number
    
}

interface Iprogrammer extends IPerson {
    salary:number
}


let john= <Iprogrammer>{};
john.age = 26;
john.fistname = "john";
john.lastname = "kagaya";
john.salary = 1500

console.log("the Firstname is " + john.fistname);
console.log("the lastname is " + john.lastname);
console.log("the salary is " + john.salary);
console.log("the age is " + john.age);