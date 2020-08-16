

/*
Updating Tuples
Destructuring a Tuple
*/

let blogposts =[1,"hello wolrd","john","7/20/2020",123]
console.log(blogposts);
console.log(blogposts[0]);
console.log(blogposts[1]);
console.log(blogposts[2]);
console.log(blogposts[3]);
blogposts[1] = "How to update Tuples";
blogposts[3] = "7/21/2020";
console.log(blogposts);

// a = index 0 b = index 1 .....  
let [a,b,c,d,e] = blogposts
console.log("-------------------------------------")
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log("-------------------------------------")
