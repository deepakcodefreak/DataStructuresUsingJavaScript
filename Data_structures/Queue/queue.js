function Queue(){
  let items = [];

  this.enqueue = function(item){
    items.push(item)
  }

  this.dequeue = function(){
    return items.shift();
  }

  this.isEmpty = function(){
    return items.length == 0 ? true : false;
  }

  this.size = function(){
    return items.length;
  }

  this.print = function(){
    console.log(items.toString());
  }


}

var  names = new Queue();
names.enqueue('Deepak');
names.enqueue('Subham');
names.enqueue('Abhishek');
names.print();
console.log(names.dequeue());
names.print();
console.log(names.isEmpty());
console.log(names.size());
