var numbers = [10,50,40,5,80,70,7,69];
numbers.sort(function(a,b){
  return b-a;
});
console.log(numbers);

var alphabets = ['a','b','c',
'z','q','w','s','t','r','f'];
console.log(alphabets.sort());

var friends = [
  {name:'Deepak',age:19},
  {name:'subham',age:18},
  {name:'abhishek',age:17},

]

var comparePerson = function(a,b){
  // if (a.age > b.age) {
  //   return 1;
  // }else if (a.age < b.age) {
  //   return -1;
  // }else{
  //   return 0;
  // }
// return a.age - b.age;
return b.age - a.age;
}

console.log(friends.sort(comparePerson));


var names = ['Deepak','Subham','abhishek','Girish','Nishant']

var compareName = function(a,b){

  if (a.toLowerCase() < b.toLowerCase()) {
    return -1;
  }
  if (a.toLowerCase() > b.toLowerCase()) {
    return 1;
  }
  return 0;

}

console.log(names.sort(compareName));


var names2 = ['This is','This is Deepak Chawla','This is Deepak','This'];
console.log(names2.sort(function(a,b){
  return a.localeCompare(b);
}));

// console.log(names2);

// var dc = 'Deepak ';
// var ac = 'Deepak chawla';
// console.log(dc.localeCompare(ac));

var numbers4 = [1,2,3,1,7,4,6,7,7,8];
console.log(numbers4.indexOf(1));
console.log(numbers4.lastIndexOf(1));

var numbers5 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,26];
function mulitipleOf13(element,index,array){
  return (element%13 ==0) ? true: false;
}

console.log(numbers5.findIndex(mulitipleOf13));

console.log(numbers5.includes(1,0));

var array_string = numbers5.join('-');
// array_string.join('-');
console.log(array_string);
