const numbers=[1,2,4,5];

const max =getMax([]);

console.log(max);

function getMax(array){
if (array.length===0)return 'empty array';

let max =array[0];

for (let i=1; i<array.length;i++)
  if (array[i]>max);
  max=array[i];

  return max;
}

//using reduce(if u have a array of values and u want to get single 
// result value from that array by iterating it then think of reduce)
function getMax(array){
  if (array.length===0)return 'empty array';
  
array.reduce((accumulator,current)=>{
  return (current>accumulator)?current:accumulator;
});
}

