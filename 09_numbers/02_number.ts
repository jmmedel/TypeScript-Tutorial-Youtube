
/*
1.	toExponential()
Forces a number to display in exponential notation, even if the number is in the range in which JavaScript normally uses standard notation.

2.	toFixed()
Formats a number with a specific number of digits to the right of the decimal.

3.	toLocaleString()
Returns a string value version of the current number in a format that may vary according to a browser's local settings.

4.	toPrecision()
Defines how many total digits (including digits to the left and right of the decimal) to display of a number. A negative precision will throw an error.

5.	toString()
Returns the string representation of the number's value. The function is passed the radix, an integer between 2 and 36 specifying the base to use for representing numeric values.

6.	valueOf()
Returns the number's primitive value.

*/


//1 toExponential() 
var num1 = 125.30 
var val = num1.toExponential(); 
console.log(val)

//2 toFixed()
var num3 = 17.1234 
console.log("num3.toFixed() is "+num3.toFixed()) 
console.log("num3.toFixed(2) is "+num3.toFixed(2)) 
console.log("num3.toFixed(6) is "+num3.toFixed(6))
//3.	toLocaleString()
var num = new Number(121.1234); 
console.log( num.toLocaleString());
//4.	toPrecision()
var num = new Number(7.12234456); 
console.log(num.toPrecision()); 
console.log(num.toPrecision(1)); 
console.log(num.toPrecision(2));

//5.	toString()
var num = new Number(10); 
console.log(num.toString()); 
console.log(num.toString(2)); 
console.log(num.toString(8));

//6.	valueOf()
var num = new Number(10); 
console.log(num.valueOf());
