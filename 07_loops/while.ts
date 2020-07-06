
/* 
while(condition) { 
   // statements if the condition is true 
}
*/

let num:number = 5;
let factorial:number = 1;

while(num >= 1 ){
   factorial = factorial * num;
   num--;
}
console.log("The Factorial is " + factorial);
