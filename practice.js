const students = [
    {
        name: "Uma",
        score: 90

    },
    {
        name: "Komal",
        score: 70
    },
    {
        name: "Rani",
        score: 40
    }
];

console.log(students)

const passstudent = students.filter((students) => {
    return students.score >= 50;
});
console.log(passstudent);


























