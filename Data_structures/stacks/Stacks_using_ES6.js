// let _items = Symbol();

class stack{

  constructor(){
    this.items = [];
    }

        push(element){
          this.items.push(element);
        }

        pop(element){
          return collection.pop();
        }

        peek(element){
          return collection[collection.length - 1];
        }

        isEmpty(){
          return collection.length == 0;
        }

        print(){
          console.log(collection.toString());
        }

        size(){
          return collection.length;
        }

        clear(){
          collection = [];
        }


}


stack.push(1);
