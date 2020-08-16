

/*

2.	Passing arrays to functions
You can pass to the function a pointer
to an array by specifying the array's name without an index.

*/

var names:string[] = ["john","mario","luggie"];

function disp(array_name:string[]){
  
    for (var x in array_name){
        console.log(array_name[x]);
    }
}

disp(names);