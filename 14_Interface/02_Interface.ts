
/*

Union Type and Interface
*/

interface IRunOption {
  
    program:string;
    commandline:string[]|string|(()=>string);
    // using  Union Type with string ,string array function expression
}

//commandline as string
var option:IRunOption ={program:"test1",commandline:"Stringtest"};
console.log(option.commandline);

//coommandline as a string array
var options:IRunOption ={program:"test1",commandline:["gcc run hello.world.c","g++ hello_world.cpp"]};
console.log(options.commandline);
//commandline as a fuction expression
var option:IRunOption ={program:"test1",commandline:()=>{return "*** This is programm is running hacking the programm ***"}};
console.log(option.commandline)
var fn:any = option.commandline;
console.log(fn())


