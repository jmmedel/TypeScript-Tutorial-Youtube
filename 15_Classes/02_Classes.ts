

/*
How to Create Classes in Typescripts
*/

class Car {
  //fields
  engine:string;
  
  //Constructor 
  constructor(engine:string){
      this.engine = engine
  }

  //fn

  displayEngine():void{
    console.log("Engine is " + this.engine)
  }


}

let tesla = new Car("Tesla1");
tesla.displayEngine()
console.log(tesla.engine)

