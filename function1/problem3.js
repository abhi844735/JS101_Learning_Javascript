function print_prime(num){
  count=0;
  for(let i=1;i<=num;i++){
    if(num%i==0){
      count++;
    }
  }
  if(count>2 ||num==1){
     return true;
  }
  else{
    return false;
  }
}

for(let i=1;i<=15;i++){
  let ans = print_prime(i)
  if(ans==true){
    console.log(i);
  }
}
