
/*

Class Inheritance
TypeScript supports the concept of Inheritance. 
Inheritance is the ability of a program to create new classes from an existing class. 
The class that is extended to create newer classes is called the parent class/super class.
 The newly created classes are called the child/sub classes.

A class inherits from another class using the ‘extends’ keyword. 
Child classes inherit all properties and methods 
except private members and constructors from the parent class.

*/

class Shape{
    Area:number
    constructor(a:number){
        this.Area = a
    }
}

class Circle extends Shape{

    displayArea():void{
       console.log("Area of the circle " + this.Area)
    }

}

var obj = new Circle(100)
obj.displayArea();

