var sales = [
  { item: 'PS4 Pro', stock: 3, original: 399.99 },
  { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
  { item: 'Nintendo Switch', stock: 4, original: 299.99 },
  { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
  { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
];

let arr = [];

function calculateSalesTotals(){
  for(let i=0; i<sales.length; i++){
    let obj = {};

    if(sales[i].discount == undefined){
      obj.item = sales[i].item;
      obj.stock = sales[i].stock;
      obj.original = sales[i].original;
      obj.total = sales[i].original*sales[i].stock;
    } else{
      obj.item = sales[i].item;
      obj.stock = sales[i].stock;
      obj.original = sales[i].original;
      obj.discount = sales[i].discount;
      obj.total = sales[i].original*sales[i].stock;
      obj.sale = sales[i].original*sales[i].discount;
    }

    arr.push(obj);
  }
  
  return arr;
}

console.log(calculateSalesTotals());