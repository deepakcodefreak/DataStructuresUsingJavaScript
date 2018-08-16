// for...of Loop in ES6

var numbers = [0,1,2,3,4,5,6,7,8,9];
//
// for(let n of numbers){
//   console.log( (n%2 ==0)?'even':'odd' );
// }
//
// console.log('===========');
// //ES6 iteratores
// var iterator = numbers[Symbol.iterator]();
// console.log(iterator.next().value);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
//
//
//
// while(iterator.next().done == false){
//   var it = iterator.next().value;
//   console.log(it);
// }


// =========================//
//
// let Entries = numbers.entries();
// console.log(Entries.next().value);
// console.log(Entries.next().value);
// console.log(Entries.next().value);
//
// let aEntries = numbers.keys();
// console.log(aEntries.next());
// console.log(aEntries.next());
// console.log(aEntries.next());

//es6 syntax sometimes does not work on local environment
// let vEntries = numbers.values();
// console.log(vEntries.next());
// console.log(vEntries.next());
// console.log(vEntries.next());
// console.log(vEntries.next());
// console.log(vEntries.next());
// console.log(vEntries.next());

var numbers2 = Array.from(numbers);
console.log(numbers2);
var evens = Array.from(numbers,x=>x%2==0);
console.log(evens);

var numbers3 = Array.of(50,40,30,20,10);
console.log(numbers3);

var number4 = Array.of(...numbers);
console.log(number4);

number4.fill(0);
console.log(number4);

number4.fill(1,2);
console.log(number4);

number4.fill(10,2,6);
console.log(number4);

copyArray = [1,2,3,4,5,6,7,8];
copyArray.copyWithin(1,5,8);
console.log(copyArray);

console.log(numbers.reverse());
console.log(numbers3.sort());

//Bubble sorting in array...

var a = [90,50,40,30,10,20,70,60,5]

for (let j = 0; j < a.length; j++) {


  for (let i = 0; i < a.length-j-1; i++) {
    if (a[i+1]>a[i]) {
      let temp = a[i+1];
      a[i+1] = a[i];
        a[i] = temp;
    }
  }
}


console.log(a);
