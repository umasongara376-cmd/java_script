// object use key-value pairs  --->

const student = {
    name: "Uma",
    surname: "Rajput",
    age: 20,
    role: "AI Software Engineer",
    score: 90
};
console.log(student);
console.log(student.name) ;  // dot notation
console.log(student.role);

console.log(student["name"]);  // bracket notation

student.score = 99;   // modifing an score
console.log(student.score);

student.city = "Gwalior";   // adding a property
console.log(student);


const project = {
    name: "AI Interview Coach",
    language: "JavaScript",
    completed: true
};
console.log(project.name);







