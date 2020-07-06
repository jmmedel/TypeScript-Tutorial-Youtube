/* 
①　For loops


break 
continue

*/

/*
for (initial_count_value; termination-condition; step) {
   //statements 
}
*/

/*

for (var val in list) { 
    //statements 
 }

*/

let num:number = 5;
let i:number = 0;
let factorial = 1;

for(i = num; i>=1; i-- ){
  factorial *= i;
}
console.log(factorial);

let j:any;
let n:any = "a b c d e f g h "

for(j in n){
   console.log(n[j]);
}

