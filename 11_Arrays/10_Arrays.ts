

/*

3.	Return array from functions
Allows a function to return an array

*/

function display(){
    return new Array("John","Mario","luggie")
}

let names:string[] = display()

for(var i in names){
   console.log(names[i]);
}