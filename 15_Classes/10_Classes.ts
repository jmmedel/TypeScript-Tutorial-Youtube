/*
Classes and Interfaces
Classes can also implement interfaces

*/

interface ILoan{
    interest:number
}

class Student implements ILoan{
    interest:number
    rebate:number
    constructor(interest:number,rebate:number){
        this.interest = interest
        this.rebate = rebate
    }
} 

var Student09971 = new Student(80,30)
console.log("The Interest is : " + Student09971.interest + "The Rebate is : " + Student09971.rebate)


