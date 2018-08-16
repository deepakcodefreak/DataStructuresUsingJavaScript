// joining  multiple arrays...
var negativeNumbers = [-3,-2,-1];
var Zero = [0];
var positiveNumbers = [1,2,3];

var num = negativeNumbers.concat(Zero,positiveNumbers);
// console.log(num);0

// =======================================

// Iterator functions

var isEven = function(value){
  return (value%2 == 0)?true:false;
}

var numbers = [1,2,3,4,5,6,,7,8,9,10];

// a) using every method
// console.log(numbers.every(isEven));

//b) using some method
// console.log(numbers.some(isEven));

// c) using forEach Loop
numbers.forEach((x)=>{
  if (x%2 == 0) {
    console.log(`${x} : Even`);
  }else {
    console.log(`${x} : Odd`);
  }
})

//d) map method

var myMap = numbers.map(isEven);
console.log(myMap);


// e) filter method

var evenNumbers = numbers.filter(isEven)
console.log(evenNumbers);

var dc = numbers.reduce(function(previous,current,index){
  return previous + current;
});

console.log(dc);
