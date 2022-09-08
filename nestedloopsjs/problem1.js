//Print the Calendar date in the below format


for(let i=1;i<=12;i++){
  let days;
  if(i==2){
    days=28;
  }else if(i==4 ||i==6||i==9){
    days=30;
  }else{
    days=31;
  }
  for(let j=1;j<=days;j++){
    console.log(j+"-"+i);
  }
}