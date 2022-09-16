function convertArray(str){
  let arr=[];
  for(let i=0;i<str.length;i++){
    arr.push(str[i]);
  }
  return arr;
}
 let array = convertArray("AbHi");
function swapeCase(array){
  let small ="abcdefghijklmnopqrstuvwxyz";
  let cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let new_str ="";
  for(let i=0;i<array.length;i++){
    for(let j=0;j<small.length;j++){
      if(array[i]==small[j]){
        new_str+=cap[j];
      }
      else if(array[i]==cap[j]){
        new_str+=small[j];
      }
    }
  }
  return new_str
}
let answer = swapeCase(array);
console.log(answer);