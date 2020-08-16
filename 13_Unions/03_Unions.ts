/*

Union Type and Arrays

*/

let names:number[]|string[];
names = [1,2,3,4,5]
console.log("This is numeric Arrays");
console.log("---------------------------");
for(let i in names){
    console.log(names[i]);
}
console.log("This is String Arrays");
console.log("---------------------------");
names = ["john","mori","mai"]
for(let i in names){
    console.log(names[i]);
}
