let array=[1,2,4,6,4,6,1];

const count = countOccurrences(array,1);

console.log(count);

function countOccurrences(array,searchElement){
//   let count=0;
//   for (let element of array)
//   if (element===searchElement)
//   count++;
//   return count;
// }

//using reduce method

array.reduce((accumulator,current)=>{
const occurrence=(current===searchElement)?1:0;
console.log(accumulator,current,searchElement);
return accumulator+occurrence;
},0);
}