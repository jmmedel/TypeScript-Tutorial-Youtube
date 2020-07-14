
/*
The do…while loop is similar to the while 
loop except that the do...while loop doesn’t evaluate the
condition for the first time the loop executes. 
However, the condition is evaluated for the subsequent iterations.
In other words, the code block will be executed at least once in a do…while loop.

*/

/** 
 * 
 * 
 * do {
   //statements 
} while(condition)

*/

let n:number = 5
do{
  console.log(n);
  n--;
}while(n>=0);
