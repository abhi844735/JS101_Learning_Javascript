function remove_space(x){
  let new_str ="";
  for(let i=0;i<x.length;i++){
    if(x[i]==" "){
      new_str+="-";
    }else{
      new_str+=x[i];
    }
  }
  console.log(new_str);
}
remove_space("I am Abhi")