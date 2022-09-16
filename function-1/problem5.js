
function case_change(ch,str,arr){
  let cap="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let small = "abcdefghijklmnopqrstuvwxyz"
  for(let i=0;i<cap.length;i++){
    if(ch==cap[i])
      ch=small[i]
  }
  console.log(ch);
  let new_str="";
  for(let j=0;j<str.length;j++){
    for(let k=0;k<cap.length;k++){
       if(str[j]==cap[k]){
         new_str+=small[k];
       }
    }
  }
  console.log(new_str);
  let new_str1 =[];
  for(let m=0;m<arr.length;m++){
    for(let n=0;n<cap.length;n++){
      for(let o=0;o<arr[m].length;o++){
        if(arr[m][o]==cap[n]){
           new_str1.push(small[n]);
        }
      }
    }
  }
  console.log(new_str1);
}
case_change("M","MASAI",["ABHI","KISHAN","SANJU"]);