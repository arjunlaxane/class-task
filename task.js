const scores = [
  {
    marks: 32,
    name: 'Yvette Merritt',
  },
  {
    marks: 57,
    name: 'Lillian Ellis',
  },
  {
    marks: 22,
    name: 'Mccall Carter',
  },
  {
    marks: 21,
    name: 'Pate Collier',
  },
  {
    marks: 91,
    name: 'Debra Beard',
  },
  {
    marks: 75,
    name: 'Nettie Hancock',
  },
  {
    marks: 20,
    name: 'Hatfield Hodge',
  },
];

console.log(
  'Dot chain',
  scores
    .filter(stu => stu.marks < 40)
    .map(stu => stu.name)
    .map(name => `hello,${name}`)
);

/////Task 1///
// Print the name list - As an array
// Expected Output
// ["Yvette Merritt", "Lillian Ellis", "Mccall Carter", "Pate Collier" ,
//  "Debra Beard", "Nettie Hancock",  "Hatfield Hodge"]

const getName = scores.map(student => student.name);
console.log(getName);

// Task 2
// >=40 pass.. find those student that passed (Use array method)
// Expected Output
// [{
//     marks: 57,
//     name: "Lillian Ellis"
//   },
//     {
//     marks: 91,
//     name: "Debra Beard"
//   },
//   {
//     marks: 75,
//     name: "Nettie Hancock"
//   }]

const getStu = scores
  .filter(student => student.marks >= 40)
  .map(student => student);

console.log(getStu);

////Task3////
//  Find all the names who failed the exams (Array methods)
// Expected Output
//   ["Yvette Merritt",
//   "Mccall Carter",
//   "Pate Collier",
//   "Hatfield Hodge"
// ];

const failedstud = scores
  .filter(stumark => stumark.marks < 40)
  .map(failedName => failedName.name);
console.log(failedstud);

///task 4///

const avg = scores.reduce((sum, markAvg) => sum + markAvg.marks, 0);
console.log(avg / scores.length);

///task 5
// Find the topper's name
// Expected Output
// "Debra Beard"

const topper = scores.reduce((winner, student) =>
  winner.marks > student.marks ? winner : student
);
console.log(topper.name);
