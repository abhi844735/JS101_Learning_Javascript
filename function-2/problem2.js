let arr =["abhi","aditya","pulkit","nitin","abhi","pulkit"];
function last_index(str){
  let last_index_no=0;
  for(let i=0;i<arr.length;i++){
    if(str==arr[i]){
      last_index_no=i;
    }else if (str!=arr[i]){
      last_index_no = -1;
    }
  }
  console.log(last_index_no);
  
}
last_index("panchal")