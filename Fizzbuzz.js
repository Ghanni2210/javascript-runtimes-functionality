//div by 3 fizz,by5 buzz, 
// by both then fizzbuzz,
// if not divisible with both then number


let userInput=prompt(`please enter a number`);
let intInput= parseInt(userInput);
const output=fizzbuzz(intInput);
console.log(output);

function fizzbuzz(intInput){

  // if (typeof intInput !=='number')
  // alert('Please enter a number type value');
  // return 'Please enter a number type value';

  if ((intInput%3===0)&&(intInput%5===0))
  return 'bhoom!!! Fizzbuzz';

  if (intInput%3===0)return 'its a Fizz';

  if (intInput%5===0)return 'its a Buzz';

  return intInput;
 
}