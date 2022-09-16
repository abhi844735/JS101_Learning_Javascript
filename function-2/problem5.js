let arr = ["abhi","aditya","ankit"];
function include_method(alphanumeric){
  count=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]==alphanumeric){
      count++;
      break
     
    }
    else if(arr[i]!=alphanumeric){
     count=0;
    }
  }
  if(count==1){
    return true;
  }else{
    return false;
  }
}
console.log(include_method("ankita"));
