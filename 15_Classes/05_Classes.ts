
/*
TypeScript ─ Class inheritance and Method Overriding
*/

class PrinterClass {
    doPrint():void{
        console.log("Parent Print Methods")
    }
}

class ChildPrinterClass extends PrinterClass {

    doPrint():void{
        super.doPrint()
        console.log("ChildPrinterClass Print Methods ")
    }
}

var obj = new ChildPrinterClass()
obj.doPrint()