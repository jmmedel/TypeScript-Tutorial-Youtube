

/*

Example: Multiple Interface Inheritance

*/


interface IPersons {
   
    id:number
}

interface IParent {
    lastname:string
    fistname:string
}

interface Child extends IPersons , IParent {}
let Children:Child = {id:123,lastname:"kagaya",fistname:"kagaya"}
console.log(Children.id)
console.log(Children.lastname)
console.log(Children.fistname)