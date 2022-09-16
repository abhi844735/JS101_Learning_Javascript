function check_small(x){
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  for(let i=0;i<alpha.length;i++){
    count=0;
    if(x==alpha[i]){
      count=1;
      break
    }
   
  }
  if(count==1){
    console.log("Yes");
  }
  else{
    console.log("No");
  }
}

check_small("A");
