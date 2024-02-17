/***********************************************************************
Write a function named `smoothieMachine` that accepts any number of params and
a function.

The return function will also accept any number of params and will return a
string including all of the parameters of smoothieMachine and the return
function.

See below for examples:

let smoothie1 = smoothieMachine();

console.log(smoothie1("milk"));
// prints "I'm having a smoothie with milk"
console.log(smoothie1("kale", "spinach"));
// prints "I'm having a smoothie with milk and kale and spinach"
console.log(smoothie1("honey", "pears", "berries"));
// prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

let smoothie2 = smoothieMachine("apples", "bananas", "berries");
console.log(smoothie2("pineapple"));
// prints "I'm having a smoothie with apples and bananas and berries and pineapple"
***********************************************************************/

const smoothieMachine = (...params) => {
  let str = "I'm having a smoothie with";
  return function (...params2){
    let copy = str.split(' ');
    let toppings = params2;
    if(params.length > 0) toppings = params.concat(params2);
    if(copy[copy.length-1] == 'with' && toppings[0] != undefined) return str += " " + toppings.join(' and ');
    else if(toppings[0] != undefined) return str += " and " + toppings.join(' and ');
  }
}

// function smoothieMachine(...ingredients) {
//   let allIng = ingredients;

//   return function (...additionalIng) {
//     allIng = [...allIng, ...additionalIng];
//     return "I'm having a smoothie with " + allIng.join(' and ');
//   }
// }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = smoothieMachine;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
