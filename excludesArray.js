const numbers=[1,2,4,6,8];
const output = except(numbers,[1,3]);
console.log(output);

function except(array,excluded){
  for(let elements of numbers)
  if (!excluded.includes(elements))
  output.push(elements);
 return output; 
}