function PriorityQueue(){
let items = [];

function EnqueueItem(element,priority){
  this.element = element;
  this.priority = priority;
}

this.PriorityEnqueue = function(element,priority){
  let item = new EnqueueItem(element,priority);
  let added = false;

for (let i = 0; i < items.length; i++) {
//use < for min PriorityQueue and > for max PriorityQueue
     if (item.priority < items[i].priority) {
       items.splice(i,0,item);
       added = true;
       break;
     }


    }

    if (!added) {
      items.push(item);
    }

}

this.print = function(){
  for (let i = 0; i < items.length; i++) {
    console.log(items[i].element);
  }
}

this.isEmpty = function(){
  return (items.length == 0) ? true : false;
}

this.size = function(){
  return items.length;
}

this.deQueue = function(){
  return items.pop();
}

}
let names = new PriorityQueue();
names.PriorityEnqueue('Deepak',3)
names.PriorityEnqueue('Prerna',1)
names.PriorityEnqueue('Dilip',2)
// names.deQueue();
// console.log(names);
names.print();
