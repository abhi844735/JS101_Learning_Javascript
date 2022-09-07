let sentence = ("the");
let total_spaces = 0;
for(let i=0;i<sentence.length;i++){
 if(sentence[i]==" "){
    total_spaces++;
  }

}
if(sentence.length==0){
  console.log(0);
}else{
console.log(total_spaces+1);
}
