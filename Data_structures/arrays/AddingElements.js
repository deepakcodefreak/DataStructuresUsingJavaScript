var numbers = [0,1,2,3,4,5,6,7,8,9];
numbers.push(10);
numbers.push(11,12)

for (let i = numbers.length;i>=0;i--) {
  numbers[i]=numbers[i-1];
}


numbers[0] = -1;
// direct function to add at the starts...
numbers.unshift(-3,-2);

console.log(numbers);
