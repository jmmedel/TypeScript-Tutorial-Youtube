var global_num = 26          //global variable 
class Numbers { 
   num_val = 23;             //class variable  // defaults is publics
   static sval = 100;         //static field 
   
   storeNum():void { 
      var local_num = 141;    //local variable 
      console.log("local number"+ local_num);
   } 
} 
console.log("Global num: "+global_num)  
console.log(Numbers.sval)   //static variable  
var obj = new Numbers(); 
console.log("class variable: "+obj.num_val) 
