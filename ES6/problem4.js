//Given a string swap the case and print the output
//Sample Input - Test
//Sample Output - tEST
//NOTE: Use multiple functions to achieve the result, NOT one single code block

let str = "Test";

const changeCase = ch =>{
    let small = 'abcdefghijklmnopqrstuvwxyz';
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for(let i=0; i<small.length; i++){
        (ch === small[i])?ch = upper[i]:(ch === upper[i]?ch=small[i]:null)
    }
    return ch;
}
let new_str="";
for(let k=0;k<str.length;k++){
  new_str+=changeCase(str[k])
}
console.log(new_str);