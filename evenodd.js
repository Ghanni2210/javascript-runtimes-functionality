let capturedValue =prompt('Please input the captured speed..');
let capturedSpeed = parseInt(capturedValue);
const output=showNumbers(capturedSpeed);

function showNumbers(capturedSpeed){
  for (let i=0; i<=capturedSpeed; i++){
    const message = (i%2===0)? 'Even' : 'Odd';
    console.log(i,message);
  }
}



