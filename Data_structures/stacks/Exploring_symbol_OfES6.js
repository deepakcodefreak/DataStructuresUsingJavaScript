let _items = Symbol();

class stacks{
  constructor(){
    this[_items] = [];

}


    push = function(element){
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





stack.push(1);
