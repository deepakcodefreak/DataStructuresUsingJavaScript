var days = ['mon','tues','thurs','fri','Sat','Sun'];

for (let i = 0; i < days.length; i++) {
  console.log(days[i]);

}

let fibbonaci = [];
// fibbonaci[0] = null;6
fibbonaci[1] = 1;
fibbonaci[2] = 2;

for (let i = 3; i < 20; i++) {
  fibbonaci[i] = fibbonaci[i-1] + fibbonaci[i-2];
}

for (let i = 0; i < fibbonaci.length; i++) {
  console.log(fibbonaci[i]);
}


console.log(fibbonaci);
