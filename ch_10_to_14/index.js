////////////////// ASSIGNMENT 1 ///////////////////////////////
let num1 = prompt("Please enter a first value", 7);
let num2 = prompt("Please enter a second value", 3);
let op = prompt("Please enter any operator + - * / %", "+");
let result;
if (op === "+") {
  result = num1 + num2;
} else if (op === "-") {
  result = num1 - num2;
} else if (op === "*") {
  result = num1 * num2;
} else if (op === "/") {
  result = num1 / num2;
} else if (op === "%") {
  result = num1 % num2;
} else {
  result = "Invalid Operator!";
}
alert(result);

////////////////// ASSIGNMENT 2 ///////////////////////////////
let course1 = prompt("Please enter a marks of course 1", 70);
let course2 = prompt("Please enter a marks of course 2", 90);
let course3 = prompt("Please enter a marks of course 3", 60);
let course4 = prompt("Please enter a marks of course 4", 55);
let course5 = prompt("Please enter a marks of course 5", 89);
var totalMarks = 500;
let obtainedMarks =
  Number(course1) +
  Number(course2) +
  Number(course3) +
  Number(course4) +
  Number(course5);
let percentage = Number((obtainedMarks * 100) / totalMarks);
alert(percentage);
