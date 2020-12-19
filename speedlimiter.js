/* speed limit=70
for every +5 ->1point 
12points->licence suspended
math.floor(1.3)use this math method */
let capturedValue =prompt('Please input the captured speed..');
let capturedSpeed = parseInt(capturedValue);
const output=checkSpeed(capturedSpeed);

function checkSpeed(capturedSpeed){
  const speedLimit = 70;
  const kmperPoint =5;
  if (capturedSpeed<speedLimit+kmperPoint){
  alert('No fine');
    return;
}
    const points=Math.floor((capturedSpeed-speedLimit)/kmperPoint);
  if (points==11)
  alert('Last warning before suspension')
    if (points>=12)
    alert('License suspended!!!!');
  else 
    alert(`${points} Points`);
    console.log(`${points} Points`);
  }
