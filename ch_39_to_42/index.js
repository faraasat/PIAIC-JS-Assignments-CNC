////////////////// ASSIGNMENT 1 ///////////////////////////////
var course1 = prompt("Enter marks for course 1", 70);
var course2 = prompt("Enter marks for course 2", 80);
var course3 = prompt("Enter marks for course 3", 65);
var course4 = prompt("Enter marks for course 4", 89);
var course5 = prompt("Enter marks for course 5", 91);
var totalMarks = 500;
var obtainedMarks =
  Number(course1) +
  Number(course2) +
  Number(course3) +
  Number(course4) +
  Number(course5);
var percentage = Number(obtainedMarks * 100) / Number(totalMarks);
switch (true) {
  case percentage <= 100 && percentage >= 90:
    alert("A+");
    break;
  case percentage >= 75:
    alert("A");
    break;
  case percentage >= 60:
    alert("B");
    break;
  case percentage >= 45:
    alert("C");
    break;
  case percentage >= 30:
    alert("D");
    break;
  case percentage >= 0:
    alert("F");
    break;
  default:
    alert("Your percentage is out of this world");
}
