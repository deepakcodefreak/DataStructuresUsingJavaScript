function linkedList(){
  this.head = null;
  this.length = 0;
}

function Node(element,next){
  this.element = element;
  this.next = next;
}

linkedList.prototype.AddToHead = function (element) {

  if (!this.head) {
      let newnode = new Node(element,null)
      this.head = newnode;

  }else {
    let newnode = new Node(element,this.head);
    this.head = newnode;

  }
  this.length++;
}

linkedList.prototype.removeHead = function() {
  let value = this.head.value;

  if (!this.head) {
    return null;
  }
  this.head = this.head.next;
  return value;
};



linkedList.prototype.removeAt = function(position) {

  if (position > -1 && position < this.length) {

    let current = this.head;
    let previous = 0;
    let index = 0;

      if (position === 0) {
        this.head = this.head.next;
      }else {

            while (index++ < position) {
              previous = current;
              current = current.next;
            }

            previous.next = current.next;

      }
    this.length--;
    return current.element;
  }else {
    return null;
  }
};

linkedList.prototype.append = function(element) {
   let newnode = new Node(element,null);
   let current = this.head;
   if (this.head) {
     while (current.next != null) {

       current = current.next;
     }

      current.next = newnode;

   }else {
     this.head = newnode;
   }
        this.length++;
        // console.log('hello');
};

linkedList.prototype.PrintList = function() {
  let counter = this.head;
  // console.log(counter);
  while(counter != null){
    console.log(counter.element);
    counter = counter.next;
  }
};

linkedList.prototype.insert = function(element,position) {


  if (position > -1 && position < this.length) {

          let counter = this.head;
          let index = 0;
          let previous = null;
          let newnode  = new Node(element,null);

          if (position === 0) {
            newnode.next = this.head;
            this.head = newnode;

          }else {
            while (index++ < position) {
              previous = counter;
              counter = counter.next;

            }
              newnode.next = counter;
              previous.next = newnode;
              this.length++;

              return true;

          }




            }

  else {
    return null;
  }

};

linkedList.prototype.tostring = function() {

      let counter = this.head;
      let string = '';
      while(counter){
        string = `${string}${counter.element}, `
        counter = counter.next;
      }
    return string;
  };

  linkedList.prototype.indexOf = function(element){
    let counter = this.head;
    let index = 0;
    let value =-1;
    while(counter){
        if (counter.element === element) {
          return index;
        }else {
          value = -1;
        }

      // console.log(counter.element + index);
      counter = counter.next;
      index++;
    }
    return value;
  }

  linkedList.prototype.remove = function(element) {
    let position = this.indexOf(element);
    let item = this.removeAt(position);
    return item;
  };

  linkedList.prototype.isEmpty = function() {
    return this.length === 0;
  };

  linkedList.prototype.size = function() {
    return this.length;
  };

  linkedList.prototype.getHead = function() {
    return this.head;
  };

let ll = new linkedList();
ll.AddToHead('c')
ll.AddToHead('b')
ll.AddToHead('a')
ll.append('e')
// ll.removeHead();
// console.log(`${ll.remove(3)} is removed`);
// console.log(ll);
ll.insert('d',3)   //also applicable for starting
// ll.PrintList();
// console.log(ll);
// ll.remove('b')

let link = new linkedList();

console.log(ll.tostring());
console.log(link.isEmpty());
console.log(ll.getHead());
console.log(ll.size());


// console.log(ll.indexOf('e'));
