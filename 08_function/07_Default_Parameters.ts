

/* 
Default Parameters

function function_name(param1[:type],param2[:type] = default_value) { 
}

*/

function calculate_discount(price:number,rate:number = 0.70) { 
    var discount = price * rate; 
    console.log("Discount Amount: $",discount); 
 } 

 calculate_discount(100)
 calculate_discount(100,0.76)
 calculate_discount(100,0.80)