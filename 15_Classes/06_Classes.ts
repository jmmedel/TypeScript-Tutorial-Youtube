

/*

The static Keyword
The static keyword can be applied to the data members of a class.
A static variable retains its values till the program finishes execution. 
Static members are referenced by the class name.

*/

class Staticvariable {

    static num:number;
    
    static disp():void{
        console.log("The value of num is " +Staticvariable.num )
    }

}

Staticvariable.num = 26
Staticvariable.disp()
