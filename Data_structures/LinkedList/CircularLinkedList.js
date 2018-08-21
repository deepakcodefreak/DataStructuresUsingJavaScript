function CircularLinkedList(){
  this.head = null;
  this.tail = null;
  this.length = 0;
}

function Node(element,pre,next){
  this.element = element;
  this.pre = pre;
  this.next = next;
}

CircularLinkedList.prototype.insert = function(element,position) {
  if (position >= 0 && position <= this.length ) {
        let counter = this.head;
        let newnode = new Node(element,null,null);
        let previous = null;
      if (position === 0) {

          if (this.head) {
              newnode.next = counter;
              counter.pre = newnode;

          }else {
              this.tail = newnode;
          }

          this.head = newnode;


      }else if (position === this.length) {

          counter = this.tail;
          counter.next = newnode;
          newnode.pre = counter;
          this.tail = newnode;

      }else {

          while (index++ < this.length) {
            previous = counter;
            counter = counter.next;
          }

          previous.next = newnode;
          counter.pre = newnode;
          newnode.next = counter;
          newnode.pre = previous;

      }

      this.length++;

  }else {
    return null;
  }
  this.head.pre =this.tail;
  this.tail.next = this.head;
};



let cc = new CircularLinkedList();
cc.insert(0,0);
cc.insert(1,0);
cc.insert(2,0);
cc.insert(3,0);
// console.log(cc);
