/***********************************************************************
For this problem you will be writing a function capable of finding the volume
for a rectangle (height * width * length). In order to enter the
required measurements we'll need to measure them one at a time.

Write a function named `recVolume(height)`. The recVolume function will be passed
a height int and will return a function. The function returned by recVolume can
then be invoked two more times with a single argument number each time (one for
length and one for width). Once all three numbers (height, width, length) have
been collected return the volume of the rectangle. Any subsequent calls to the
function returned by recVolume should continue to return the original volume.


***********************************************************************/

const recVolume = (height) =>{
  let count = 0;
  let volume = height;
  return function probVol(num){
    // count++;
    // if(count < 2){
    //   volume *= num;
    //   return probVol;
    // }
    // if(count > 1){
    //   return volume;
    // }
    if(count < 2) volume *= num;
    count ++;
    if(count == 1)return probVol;
    if(count >= 2) return volume;
  }
}

let table = recVolume(5);
console.log(table(4));
console.log(table(3));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = recVolume;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
