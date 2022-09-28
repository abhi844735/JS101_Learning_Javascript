let rectangle={
  len:5,
  wid:10,
  perimeter1:function(){
    return 2*(this.len+this.wid);
  },
  area:function(){
    return (this.len*this.wid);
  }
  
};
let peri =rectangle.perimeter1();
let ar=rectangle.area();
console.log("The perimeter of rectangle is :",peri);
console.log("The area of rectangle is :",ar)