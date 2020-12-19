console.log(sum(1,3,5,6,7));

function sum(...items){  
  if (items.length===1 && Array.isArray(items[0]))
  items=[...items[0]];
  return items.reduce((a,b)=>a+b); 
}
/* here we use rest ... operator (will get array of inputs)
so we dont need to worry about number of input

 The reduce() method reduces the array to a single value.

The reduce() method executes a provided function
 for each value of the array (from left-to-right).

The return value of the function is stored in 
an accumulator (result/total)

 then if the input is array then we break it using spread
 operator */