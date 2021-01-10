////////////////// ASSIGNMENT 1 ///////////////////////////////
var courses = [];
var course1 = prompt("course 1", "Computer");
courses.push(course1);
var course2 = prompt("course 2", "Maths");
courses.push(course2);
var course3 = prompt("course 3", "Social Studies");
courses.push(course3);
var course4 = prompt("course 4", "Physics");
courses.push(course4);
var course5 = prompt("course 5", "Chemistry");
courses.push(course5);
alert(courses);

////////////////// ASSIGNMENT 2 ///////////////////////////////
course1 = prompt(course1, course1);
courses.splice(0, 1, course1);
course2 = prompt(course2, course2);
courses.splice(1, 1, course2);
course3 = prompt(course3, course3);
courses.splice(2, 1, course3);
course4 = prompt(course4, course4);
courses.splice(3, 1, course4);
course5 = prompt(course5, course5);
courses.splice(4, 1, course5);
alert(courses);
