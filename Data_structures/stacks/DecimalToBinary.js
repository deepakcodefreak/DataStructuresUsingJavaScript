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

//decimal to binary

function DivideBy2(decNumber){
  var remStack = new stacks(),
  rem,
  binarystring = '';

  while (decNumber > 0) {
    rem = Math.floor(decNumber%2);
    remStack.push(rem);
    decNumber = Math.floor(decNumber/2);
  }

  while(!remStack.isEmpty()){
    binarystring += remStack.pop().toString();
  }
  return binarystring;
}

console.log(DivideBy2(13));

//change to any base

function toBinary(decNumber,base){
  var remStack = new stacks(),
  rem,
  binarystring = '';
  digits = '0123456789ABCDEF';

  while (decNumber>0) {
    rem = Math.floor(decNumber%base);
    remStack.push(rem);
    decNumber = Math.floor(decNumber/base);

  }

while (!remStack.isEmpty()) {
  binarystring += digits[remStack.pop()];
}
  return binarystring;
}


console.log(toBinary(100345,8));
