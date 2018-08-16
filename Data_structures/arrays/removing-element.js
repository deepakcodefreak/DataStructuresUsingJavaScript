var numbers = [0,1,2,3,4,5,6,7,8,9];
// numbers.pop();
// console.log(numbers);
// console.log(numbers.length);


//Removing element form starting...
//
// for (let i = numbers.length; i>=0; i--) {
//   numbers[i] = numbers[i-1];
// }

// for (let i = 0; i < numbers.length; i++) {
//   numbers[i] = numbers[i+1];

//super easy method
numbers.shift();
//=================//
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);

}


console.log('length is',+ numbers.length);

var num = [0,10,20,30,40,50,60,70,80,90];
num.splice(2,4);
console.log(num);
num.splice(2,0,20,30,40,50);
console.log(num);
