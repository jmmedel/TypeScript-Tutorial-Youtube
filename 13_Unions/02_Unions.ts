/*

Union Type and function parameter

*/

function displayname(names:String|String[]){

    if(typeof names == "string"){
        console.log(names);
    }else {
        
        for(var i in names){
           console.log(names[i]);
        }
    }
}

displayname("john");
console.log("-------------------------");
let arraynames = ["john","mori","ryouka"];
displayname(arraynames);

