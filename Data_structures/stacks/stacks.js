function stacks(){
  let collection = [];

  this.push = function(element){
    return collection.push(element);
  }

  this.pop = function(element){
    return collection.pop();
  }

  this.peek = function(element){
    return collection[collection.length - 1];
  }

  this.isEmpty = function(){
    return collection.length == 0;
  }

  this.print = function(){
    console.log(collection.toString());
  }

  this.size = function(){
    return collection.length;
  }

  this.clear = function(){
    collection = [];
  }
}

var mystack = new stacks();
mystack.push(5);
mystack.print();
mystack.push(4);
mystack.print();
mystack.push(11);
mystack.print();
console.log(mystack.size());
console.log(mystack.peek());
console.log(mystack.isEmpty());
mystack.clear();
mystack.print();
