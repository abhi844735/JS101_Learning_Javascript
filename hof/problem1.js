let arr = [10, 24, 56, 72, -10, -88, 100, 564];
let bag=0;
let total_index=0;
let new_arr=arr.map(function(item,index){
      if(index%2!=0){
        bag+=item;
        total_index++;
      }

  
});
console.log(bag/total_index);