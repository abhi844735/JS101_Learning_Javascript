let char="a";
const alpha=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
for(let i=0;i<alpha.length;i++){
  if(char==alpha[i]){
    char= char.toUpperCase()
  }
}
console.log(char);