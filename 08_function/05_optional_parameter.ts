function disp_details(id:number,name:string,mail_id?:string) { 
    console.log("ID:", id + " Name" , name); 
    
    if(mail_id!=undefined){
        console.log("Email Id",mail_id); 
    }  
    
 }
 disp_details(6548,"John");
 disp_details(123,"mori","mori@gmail.com");