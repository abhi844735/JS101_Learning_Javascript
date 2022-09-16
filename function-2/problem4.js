let str="Mozilla";
function sub_string(x,y){
  let new_str = "";
  for(let i=0;i<str.length;i++){
    if(i>=x && y==undefined){
   new_str+=str[i];
      
    }
    else if(i>=x && i<=(y-1)){
      new_str+=str[i];
    }
  }
  console.log(new_str);
}
sub_string(1)