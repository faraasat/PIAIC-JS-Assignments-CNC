////////////////// ASSIGNMENT 1 ///////////////////////////////
let floatNum = prompt("Please enter number with decimal point", 3.4);
let roundFloatUp = Math.ceil(floatNum);
var text = "This is my dummy text";
let slicedText = text.slice(0, roundFloatUp);
let reversedText = "";
for (let i = roundFloatUp - 1; i >= 0; i--) {
  reversedText += slicedText[i];
}
alert(reversedText);

////////////////// ASSIGNMENT 2 ///////////////////////////////
var inputValue = "cloUd naTive computinG";
inputValue = inputValue.toLowerCase();
inputValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
let beforeWhiteSpace = 0;
for (let i = 0; i < 2; i++) {
  let whiteSpace = inputValue.indexOf(" ", beforeWhiteSpace);
  inputValue =
    inputValue.slice(0, whiteSpace + 1) +
    inputValue.charAt(whiteSpace + 1).toUpperCase() +
    inputValue.slice(whiteSpace + 2);
  beforeWhiteSpace = whiteSpace + 1;
}
console.log(inputValue);
