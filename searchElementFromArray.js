const numbers =[1,2,4,5,66];

// console.log(numbers.includes(1));
console.log(includes(numbers,-1));

function includes (array,searchElement){
  for (let element of array)
  if (element===searchElement)
  return true;
return false;
}