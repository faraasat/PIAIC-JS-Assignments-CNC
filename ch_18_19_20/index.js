////////////////// ASSIGNMENT 1 ///////////////////////////////
var courses = [];
for (let i = 0; i < 5; i++) {
  var course = prompt(`Type name of course ${Number(i + 1)}`);
  courses[i] = course;
}
alert(courses);

for (let i = 0; i < 5; i++) {
  var course = prompt(courses[i], courses[i]);
  courses[i] = course;
}
alert(courses);
