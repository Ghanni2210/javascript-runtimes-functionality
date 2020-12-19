const array =[0,undefined,2,3,4,6,7,8,4];
console.log(countTruthy(array));

function countTruthy(array){
  let count=0;
  for (let value of array)
  if (value)
  count++;
  return count;
  
}