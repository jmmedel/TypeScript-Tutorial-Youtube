
/*
String Methods
A list of the methods available in String object along with their

charAt()
charCodeAt()
concat()
indexOf()
lastIndexOf()
localeCompare()
replace()
search()
slice()
split()
substr()
substring()
toLocaleLowerCase()
toLocaleUpperCase()
toLowerCase()
toString()
toUpperCase()
valueOf()

*/


//String charAt()
var str = new String("This is string need to check"); 
console.log("str.charAt(0) is:" + str.charAt(0)); 
console.log("str.charAt(1) is:" + str.charAt(1)); 
console.log("str.charAt(2) is:" + str.charAt(2)); 
console.log("str.charAt(3) is:" + str.charAt(3)); 
console.log("str.charAt(4) is:" + str.charAt(4)); 
console.log("str.charAt(5) is:" + str.charAt(5));



//String charCodeAt()
var str = new String("This is string need to check"); 
console.log("str.charAt(0) is:" + str.charCodeAt(0)); 
console.log("str.charAt(1) is:" + str.charCodeAt(1)); 
console.log("str.charAt(2) is:" + str.charCodeAt(2)); 
console.log("str.charAt(3) is:" + str.charCodeAt(3)); 
console.log("str.charAt(4) is:" + str.charCodeAt(4)); 
console.log("str.charAt(5) is:" + str.charCodeAt(5));

//String concat()
var str1 = new String( "This is string one" ); 
var str2 = new String( "This is string two" ); 
var str3 = str1.concat(str2.toString());
console.log("str1 + str2 : "+str3)


//String lastIndexOf()
var str1 = new String( "This is string one and again string" ); 
var index = str1.lastIndexOf( "string" );
console.log("lastIndexOf found String :" + index ); 
  
index = str1.lastIndexOf( "one" ); 
console.log("lastIndexOf found String :" + index );


//String localeCompare()
var str1 = new String( "This is beautiful string" );
var index = str1.localeCompare( "This is beautiful string");  
console.log("localeCompare first :" + index );


//String replace()
var re = /apples/gi; 
var str3 = "Apples are round, and apples are juicy.";
var newstr = str3.replace(re, "oranges"); 
console.log(newstr)

//String search()
var re = /apples/gi; 
var str4 = "Apples are round, and apples are juicy.";
if (str4.search(re) == -1 ) { 
   console.log("Does not contain Apples" ); 
} else { 
   console.log("Contains Apples" ); 
} 


//String slice()
var str5 = "Apples are round, and apples are juicy."; 
var sliced = str5.slice(3, -2); 
console.log(sliced);

//String split()
var str6 = "Apples are round, and apples are juicy."; 
var splitted = str6.split(" ", 3); 
console.log(splitted)

//String substr()
var str7 = "Apples are round, and apples are juicy."; 
console.log("(1,2): "    + str7.substr(1,2)); 
console.log("(-2,2): "   + str7.substr(-2,2)); 
console.log("(1): "      + str7.substr(1)); 
console.log("(-20, 2): " + str7.substr(-20,2)); 
console.log("(20, 2): "  + str7.substr(20,2));


//String substring()
var str8 = "Apples are round, and apples are juicy."; 
console.log("(1,2): "    + str8.substring(1,2)); 
console.log("(0,10): "   + str8.substring(0, 10)); 
console.log("(5): "      + str8.substring(5));



//String toLocaleLowerCase()

var str9 = "Apples are round, and Apples are Juicy."; 
console.log(str9.toLocaleLowerCase( ));


//String toLocaleUpperCase()
var str10 = "Apples are round, and Apples are Juicy."; 
console.log(str10.toLocaleUpperCase( ));



//String toLowerCase()
var str11 = "Apples are round, and Apples are Juicy."; 
console.log(str11.toLowerCase( ))



//String toString()
var str12 = "Apples are round, and Apples are Juicy."; 
console.log(str12.toString( ));


// String toUpperCase()
var str13 = "Apples are round, and Apples are Juicy."; 
console.log(str13.toUpperCase( ));

//String valueOf()
var str14 = new String("Hello world"); 
console.log(str14.valueOf( ));


