function check_prime(x){
  count=0;
  for(let i=1;i<=x;i++){
    if(x%i==0){
      count++;
    }
  }
  if(count==2){
    console.log(x,"is prime");
  }
  else{
    console.log(x,"is not prime");
  }
}
check_prime(19);
check_prime(18);