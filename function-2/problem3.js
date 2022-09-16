let arr = ["mango","papaya","cat","dog","king"];
function slicing(x,y){
  let new_arr=[]
  for(let i=0;i<arr.length;i++){
    if(i>=x && i<=(y-1)){
      new_arr.push(arr[i]);
    }else if(i>=x && y==undefined){
      new_arr.push(arr[i]);
    }
  }console.log(new_arr);
}
slicing(-2,4)