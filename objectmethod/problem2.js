let object = {
  data: [
    {name:"Rice",quantity:2,price:60},
    {name:"Dal",quantity:3,price:50},
    {name:"Salt",quantity:1,price:20}
  ],

  total: function(){
    let sum = 0;
    for(i=0;i<this.data.length;i++){
      sum +=  (this.data[i].price)*(this.data[i].quantity);
    }

    return sum;
  }
};

let total = object.total();
console.log(total);