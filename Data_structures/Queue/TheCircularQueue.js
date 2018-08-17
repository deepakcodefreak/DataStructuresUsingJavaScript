// function Queue(){
//   let items = [];
//
//   this.enqueue = function(item){
//     items.push(item)
//   }
//
//   this.dequeue = function(){
//   return items.shift();
//   }
//
//   this.isEmpty = function(){
//     return items.length == 0 ? true : false;
//   }
//
//   this.size = function(){
//     return items.length;
//   }
//
//   this.print = function(){
//     console.log(items.toString());
//   }
//
//
// }
//
// let namesList  = ['a','b','c','d','e'];
//
// function hotpotato(namesList,num){
// 	let queue  = new Queue();
//
// for (let i = 0; i < namesList.length; i++) {
// 	queue.enqueue(namesList[i]);
// }
//
// // queue.print();
//
// let eliminated = '';
//
// while (queue.size() > 1) {
// for (let i = 0; i < num; i++) {
// 	queue.enqueue(queue.dequeue());
// }
// // queue.print();
//
// eliminated = queue.dequeue();
// // console.log(eliminated);
// console.log(`${eliminated} was removed`);
//
// }
//
// return queue.dequeue();
//
// }
//
// console.log(hotpotato(namesList,3));

function Queue(){
	let items = [];

	this.Enqueue = function(item){
		items.push(item);
	}

	this.Dequeue = function(){
		return items.shift();
	}

	this.print = function(){
		console.log(items.toString());
	}

	this.size = function(){
		return items.length;
	}

}

function hotpotato(namesList,num){

	let queue = new Queue();

	for (let i = 0; i < namesList.length; i++) {
		queue.Enqueue(namesList[i]);
	}


	while (queue.size()>1) {
		let eliminated = '';

		for (let i = 0; i < num ; i++) {
			queue.Enqueue(queue.Dequeue());

		}

		eliminated = queue.Dequeue();
		console.log(`${eliminated} is Eliminated`);


	}

		return queue.Dequeue();

}

let names = ['Deepak','Abhishek','Subham','Nishant','Girish'];
console.log(`Winner is ${hotpotato(names,13)}`);
