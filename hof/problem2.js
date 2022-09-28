//Input = [2, 3, 4, 6, 7]
//Output = [32, 243, 1024, 7776, 16807]
let arr =[2,3,4,6,7];
let new_arr=arr.map(function(item,index){
  return item**5;
})
console.log(new_arr);
