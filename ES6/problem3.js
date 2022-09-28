//Write a function to convert a character to lower case
//Use this function to convert a given word to lower case
//Use that function to convert an array of strings to array of lower case strings
//Sample Input ["MA", "SA", "I", "SCH", "OOL"]
//Sample Output ["ma", "sa", "i", "sch", "ool"]
let convert_lower = (ch)=>{
  let cap="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let small ="abcdefghijklmnopqrstuvwxyz";
  for(let i =0;i<cap.length;i++){
    ch==cap[i]?ch=small[i]:null;
   }
  return ch;
}
let converted = convert_lower("H");
console.log(converted);
let str = "MASAI";
let new_str="";
for(let j=0;j<str.length;j++){
  new_str+=convert_lower(str[j]);
}
console.log(new_str);
let arr = ["MA", "SA", "I", "SCH", "OOL"];
let new_arr=[];
for(let m=0;m<arr.length;m++){
  let new_char="";
  for(let n=0;n<arr[m].length;n++){
    new_char+=convert_lower(arr[m][n])
  }
  new_arr.push(new_char);
  
}
console.log(new_arr);
