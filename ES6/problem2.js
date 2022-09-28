//Write code to calculate the average of an array
//If there are no items in the array it should return 0
//NOTE: Create a function to find the sum of elements in an array and use that function to find out the average
let arr=[3,5,4,5,23];

let add_sum = (num)=>{
  let sum=0;
  arr.forEach((elem,index)=>{
    sum+=elem;
  })
  return sum;
}
let total_sum=add_sum(arr);
console.log(total_sum);
 let average;
arr.forEach((elem,index)=>{
  average = Math.floor(add_sum(arr)/arr.length);
})
console.log(average);