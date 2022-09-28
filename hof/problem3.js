//Problem 3: Taking the following array into consideration get the output as given below:
//arr = [3,4,5,6,7]
//Output ==> 3 - 5 - 7
//Hint: You have to use forEach and conditional statement over here.
let arr=[3,4,5,6,7];
let bag="";
let new_arr=arr.forEach(function(item,index){
  if(index%2==0){
    if(index==arr.length-1){
      bag+=item;
    }else{
      bag=bag+item+"-";
    }
  }
})
console.log(bag);