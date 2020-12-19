let principle = +(prompt('please enter your principle amount'));

let rateOfintrest= +(prompt('Enter the rate of Intrest'));

let years=+(prompt('Enter the number Years'));

alert(`${principle} $ is the principle amount with
${rateOfintrest}% as Rate of Intrest for ${years} Years`);

function intrest (principle,rateOfintrest,years){
  // function intrest (principle,rateOfintrest=3.5,years=5){
  // rate=rate||3.5;  before we needed to declare like such
  // years=years||5;  but after es6 now we can irectly mention it in parameters
  return principle*rateOfintrest/100*years;
 }
console.log(intrest(principle,rateOfintrest,years)+'$');
alert(`${intrest(principle,rateOfintrest,years)}$ is the total intrest amount to be paid in ${years} years`);