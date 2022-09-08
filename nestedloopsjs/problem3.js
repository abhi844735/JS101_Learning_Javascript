for(row=1;row<=10;row++){
  let bag=""
for(col=1;col<=10;col++){
  
  if(row==1 ||row==10){
    bag=bag+"*";
  }else{
    if(col==1 ||col==10){
      bag=bag+"*";
    }else{
      bag=bag+" "
    }
  }
}
console.log(bag);

  
}
