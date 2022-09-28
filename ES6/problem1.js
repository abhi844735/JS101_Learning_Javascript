//Write a function isOdd which returns a boolean value based on the number is odd or not
//Use this function to print the odd numbers from 0 to a given limit(included)
let no =13;
let check_odd = (num)=>{
  let answer = num%2!=0?true:false;
  return answer;
}
for(let i=0;i<=no;i++){
  check_odd(i)?console.log(i):null;
  
}
let second_ans = check_odd(no);
console.log(second_ans);