// const numbers = prompt("Enter your inputs separated by a tilde ~").split("~");
// console.log(numbers);
let inputs =[50,70,80,90];

// let inputs=numbers.split(" ");
console.log(calculateGrade(inputs));

function calculateGrade(inputs){
  let sum=0;
  for (let mark of inputs)
    sum+=mark;
      let average=sum/inputs.length;
     /*  
      if (average >=0 && average <=59 )
      return 'c grade';
      else if (average >=60 && average <=75)
      return 'b grade';
      else if (average>=76 && average<=100)
      return 'A Grade';
      */
     if (average<60) return 'c grade';
     else if (average<75)return 'B grade';
     else if (average<100) return ' A Grade';
}