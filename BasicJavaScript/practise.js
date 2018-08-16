// // var num = 1;
// // console.log('type of num is',typeof num );
// // console.log('type of packt is',typeof 'packt' );
// // console.log('type of num is',typeof true );
// // console.log('type of num is',typeof [1,2,3] );
// // console.log('type of num is',typeof {name:'Deepak'} );
// //
// // var myObj = {name:'Deepak',
// // age:19,class:'BE CSE'}
// // delete myObj.age;
// // console.log(myObj);
// //
// // function test(val){
// //   return val ? console.log('true'): console.log('falsy');;
// // }
// //
// // test(true);
// // test(false);
// // test('packt');
// // test('');
// // test(new String(''));
// // test(new String(false));
// // test(NaN);
// // test(new Number(NaN));
// // var obj = {name:'john'}
// // test(obj.name);
// // test(obj.age);
// // console.log('###########');
// // var month = 5;
// // switch (month) {
// //   case 1:
// //     console.log('Jan');
// //     break;
// //   case 2:
// //     console.log('feb');
// //     break;
// //   case 3:
// //     console.log('Mar');
// //     break;
// //   case 4:
// //     console.log('April');
// //     break;
// //   case 5:
// //     console.log('May');
// //     break;
// //
// //   default:
// //     console.log('Wrong Input');
// // }
// //
// // var i = 0;
// // do{
// //   console.log(i);
// //   i++;
// // }while(i<10)
// // console.log('@@@@@@@@@');
// // function sum(num1,num2){
// //   return num1+num2;
// // }
// //
// // console.log(sum('abc','abc'));
// var numbers = [10,20,30];
// function sum(a=1,b=2,c=3){
//   return a+b+c;
// }
// // console.log(sum.apply(undefined,numbers));
// console.log(sum(...numbers));
// // console.log(sum(1,2));
//
// var myarray = [1,2,3,4,5];
// console.log(myarray.slice(0,3));
//
// //
// // function restParamanterfunction(x,y){
// //   var a = Array.prototype.slice.call(arguments,2);
// //   return (x+y)*a.length;
// // }
//
// function restParamanterfunction (x,y,...a){
//   return (x+y)*a.length;
// }
//
//
// console.log(restParamanterfunction(1,2,3,4,5,8,7));
//
//
// var [x,y] = ['a','b']
// console.log([x,y]);
// console.log(x);
// var obj = {
//   x,
//   y
// }
//
// console.log(obj);
//
// var hello = {
//   name:'Deepak',
//   hell(){
//     console.log('hello');
//   }
// }
//
// console.log(hello.hell());
//
// var hello2 = {
//   name:'Deepak',
//     hell:function(){
//       return console.log('hello');
//     }
//   }
//
// console.log(hello2.hell());
//
//
// class Books {
//   constructor(title,pages,isbtn){
//     this.title = title;
//     this.pages = pages;
//     this.isbtn = isbtn;
//   }
// }
//
// class ITBook extends Books {
//   constructor(title,pages,isbtn,technology){
//     super(title,pages,isbtn);
//     this.technology = technology;
//
//   }
// printTechnology(){
//   console.log(this.technology);
// }
//
// }
//
// let jsBook = new ITBook('Data structures in JS',350,'12356890','JavaScript')
// console.log(jsBook);
// console.log(jsBook.printTechnology());


class Person{
  constructor(name){
    this.name = name;
}

  // get name(){
  //   return this._name;
  // }
  // set name(name){
  //   this._name = name;
  // }

}

var p1 = new Person('Deepak')
console.log(p1);
p1.name = 'abhishek';
console.log(p1.name);
