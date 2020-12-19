function getRandomArbitary(min,max){
  return Math.round(Math.random()*(max-min)+min);
}
console.log(getRandomArbitary(3,7));