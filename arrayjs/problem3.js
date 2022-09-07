let array = [3,4,5,23,45,3,53,56,35,4,32,];
let  sum=0;
let count = 0;
for(let i=0;i<array.length;i++){
  if(array[i]%2==0){
    count++;
   sum+=array[i];
  }
}
console.log(sum/count);