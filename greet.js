let hour =(Math.round(Math.random() * 24));

let currentClock = new Date();
// console.log(currentClock); 
if (currentClock>=1 && currentClock<11)
console.log(currentClock.getHours()+" am");
else 
console.log(currentClock.getHours()+" pm");

if (hour>=1 && hour<11)
console.log(hour +" am");
else 
console.log(hour + " pm");

if (hour>=6 && hour<12 )
  console.log('good morning sir!!!!!!');

else if (hour >=12 && hour<18)
  console.log('Good Afternoon.....');

else if (hour>=18 && hour<23)
  console.log('Good Evening.......');

else 
 console.log('Good Night.....');