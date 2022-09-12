let  str = "masai";
let  obj = {};

for(var i=0;i<str.length;i++){
    if(obj[str[i]]  === undefined){
         obj[str[i]] = 1;
    }
   else{
       obj[str[i]]++
     }
}


for(var key in obj ){
  console.log(key+"-"+ obj[key])
}
