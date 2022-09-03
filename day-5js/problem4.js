let regMail="abhi@gmail.com";
let regPass="abhi123";

let entMail="abhi@gmail.com";
let entPass="abhi23";
if(entMail==regMail){
  if(entPass==regPass){
    console.log("logged in successfully");
  }
  else{
    console.log("password is incorrect,cant login");
  }
  
}else{
  console.log("gmail is incorrect,cant login");
}