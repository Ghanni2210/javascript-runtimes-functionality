function maxNum(x,y){
  if (x>y)
  console.log("the max number is "+x);
  else if (x<y)
  console.log("the max number is "+y);
  else if (x=y)
  console.log('x and y both are equal..');
}
maxNum(5,5);

// redifined:
let number = max(2,3);
console.log(number);

function max(a,b){
  if (a>b)return a;
  return b;
}

//more redifined using conditional statements:
function maximum(x,y){
  return (x>y)? x : y ; 
}