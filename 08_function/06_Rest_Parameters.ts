/* Rest Parameters */
/* using ... to put how many parameter  */
function addNumbers(...nums:number[]) {  
    var i;   
    var sum:number = 0; 
    
    for(i = 0;i<nums.length;i++) { 
       sum = sum + nums[i]; 
    } 
    console.log("sum of the numbers",sum) 
 } 
 addNumbers(12,23,31) 
 addNumbers(102,102,101,210,310)
 addNumbers(1,1)