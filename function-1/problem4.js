
function avgarray(array){
  let sum=0;
  let len = array.length;
  if(len==0){
    let empty = console.log(0);
    return empty;
  }
  
  else {
  for(let i=0;i<array.length;i++){
    sum+=array[i]
  }
  let avg = (sum/len);
  console.log(avg);
       }
}
avgarray([]);