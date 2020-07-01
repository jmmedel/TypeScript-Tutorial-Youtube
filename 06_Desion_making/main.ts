
/*

if statement
if...else statement
else…if and nested if statements
switch statement
*/


let num:number = 2;

if(num > 0 ){
  console.log("Possitive");
}else if (num < 0 ){
    console.log("negative");
}else {
    console.log("Possitive nor negative");
}

let grade:string = "A";

switch(grade){

 case "A": {
     console.log("You got A Grade");
    break;
 }
 
 case "B": {
    console.log("You got A Grade");
   break;
}
case "C": {
    console.log("You got A Grade");
   break;
}
 default: {
     console.log("Defaults ");
     break;
 }

}
