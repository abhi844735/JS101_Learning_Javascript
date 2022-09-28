let object = {

 arr:[],

  details: function(name,eng,phy,math){
    let obj = {};
    obj.name=name;
    obj.english=eng;
    obj.physics=phy;
    obj.math=math;
    this.arr.push(obj);
  },

  lowest: function(){
    let min = Infinity;
    let least_student;
    for(let i=0; i<this.arr.length;i++){
      let total = (this.arr[i].math + this.arr[i].physics + this.arr[i].english);
      if(min > total){
        min = total;
        least_student = this.arr[i].name;
      }
    }
    console.log(least_student,":",min);
  },

  highest: function(){
    let max = -Infinity;
    let highest_student;
    for(let i=0; i<this.arr.length; i++){
      let total = (this.arr[i].math + this.arr[i].physics +           this.arr[i].english);
      if(max < total){
        max = total;
        highest_student = this.arr[i].name;
      }
    }
    console.log(highest_student,":",max);
  }
};

object.details("Laddu",67,34,87);
object.details("Aman",45,76,89);
object.details("Anshu",99,87,90);

object.lowest();
object.highest();