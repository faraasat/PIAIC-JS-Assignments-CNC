////////////////// ASSIGNMENT 1 ///////////////////////////////
let inputValue = "cloUd naTive computinG";
inputValue = Capitalize(inputValue);
console.log(inputValue);
function Capitalize(value) {
  value = value.toLowerCase();
  value = value.charAt(0).toUpperCase() + value.slice(1);
  let beforeWhiteSpace = 0;
  for (let i = 0; i < 2; i++) {
    let whiteSpace = value.indexOf(" ", beforeWhiteSpace);
    value =
      value.slice(0, whiteSpace + 1) +
      value.charAt(whiteSpace + 1).toUpperCase() +
      value.slice(whiteSpace + 2);
    beforeWhiteSpace = whiteSpace + 1;
  }
  return value;
}

////////////////// ASSIGNMENT 2 ///////////////////////////////
let factorialInput = prompt("Please specify a value for factorial", 5);
factorialOutput = getFactorial(Number(factorialInput));
console.log(factorialOutput);

function getFactorial(value) {
  let val = 1;
  for (let i = 1; i <= value; i++) {
    val *= i;
  }
  return val;
}

////////////////// Understand this logic ///////////////////////////////
var value = multiply(4, 3, 6);
console.log("value", value); // The result is 36

function add(a, b) {
  var z = a + b;
  return z;
}
function multiply(a, b, c) {
  var z = a * add(b, c);
  return z;
}

console.log("course", course); // The result is undefined
console.log("z", z); // The result is z is not defined
var course = "cloud native computing";
