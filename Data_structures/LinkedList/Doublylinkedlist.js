function DoublyLinkedList(){
  this.head = null;
  this.tail = null;
  this.length = 0;
}

function Node(element,pre,next){
  this.element = element;
  this.pre = pre;
  this.next = next;
}

  DoublyLinkedList.prototype.print = function() {
      let counter =  this.head;
      while (counter != null) {
        console.log(counter.element);
        counter = counter.next;
      }

}

DoublyLinkedList.prototype.insert = function(element,position) {
let temp = this.head;
  if (position >= 0 && position <= this.length) {

        let newnode = new Node(element,null,null)

      if (position === 0) {

          if (!this.head) {
              this.head = newnode;
              this.tail = newnode;
                }
                else {
              newnode.next = temp;
              temp.pre = newnode;
              this.head = newnode;

          }
        this.head = newnode;

      }else if (position === this.length) {

              newnode.pre = this.tail;
              newnode.next = null;
              this.tail = newnode;

      }else {

        let counter = this.head;
        let previous = null;
        let index = 0;
        while (index++ < position) {
          previous = counter;
          counter = counter.next;
        }

        previous.next = newnode;
        newnode.next = counter;

        newnode.pre = previous;
        counter.pre = newnode;

      }

      this.length++;

  }else {
    return null;
  }

};

DoublyLinkedList.prototype.remove = function(position) {

if (position >=0 && position < this.length) {
        let counter = this.head;
        let index = 0;
        let previous = null;
      if (position === 0) {
        this.head = counter.next;
        if (this.length === 1) {
          this.tail = null;
        }else {
          this.head.pre = null;
        }
      }else if (position === this.length - 1) {
        counter = this.tail;
        // console.log(counter);
        this.tail = counter.pre;
        this.tail.next = null;
      }else {

          while (index++< position) {
            previous = counter;
            counter = counter.next
          }

          previous.next = counter.next;
          counter.next.pre = previous;

      }

this.length--;

}else {
  return null;
}




};

let dd = new DoublyLinkedList();
dd.insert(3,0);
dd.insert(2,0);
dd.insert(1,0);
dd.insert(0,0);
dd.insert(1.5,2);

// dd.insert(3,3);
// console.log(dd);
// dd.remove(3)
dd.print();
