

/*
Function Overloads
Functions have the capability to operate differently on the basis
of the input provided to them. In other words, a program can have 
multiple methods with the same name with different implementation. 
This mechanism is termed as Function Overloading. TypeScript 
provides support for function overloading.


The data type of the parameter

function disp(string):void; 
function disp(number):void;
The number of parameters

function disp(n1:number):void; 
function disp(x:number,y:number):void;
The sequence of parameters

function disp(n1:number,s1:string):void; 
function disp(s:string,n:number):void;


*/

function dispplay(name:string):void; 
function dispplay(age:number,name:string):void; 
function dispplay(x:any,y?:any):void { 
   console.log(x); 
   console.log(y); 
} 
dispplay("abc") 
dispplay(1,"xyz");

