function isOdd(num){
  if(num%2!=0){
    return true;
  }
  else{
    return false;
  }
}
for(let i=0;i<=23;i++){
  let ans =isOdd(i);
  if(ans==true){
    console.log(i);
  }

}
