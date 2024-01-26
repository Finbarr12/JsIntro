// let arr = [12, "Man", "Woman", null, true, undefined, 45];
// console.log(arr[3]);

let multiAr = [
  12,
  45,
  "Egg",
  ["Orange", "Card", 12, [34, true, null]],
  ["King", "queen"],
];

console.log(multiAr[3][3][0]);

let secondWay = Array("Man", 1, 2, true, null, "Goat");
console.log(secondWay);

let type = typeof multiAr;
console.log(type);

//checkifArr
let checkarr = Array.isArray([1, 2, 5]);
console.log(checkarr);

let clare = {
  height: "5'4 ft",
  complexion: "Light-skinned",
  age: 79,
  gender: "Female",
  shoe: "Nike",
  clothing: "Nike",
  courses: [
    "Javscript",
    "Java",
    "SQL",
    "Html",
    "Css",
    "Python",
    "Cyber Security",
  ],
  descOfCourses: [
    {
      name: "Javascript",
      Tutor: "Mr. Ledor",
      Brutal: true,
      lovesViolence: true,
      duration: "10 years",
      courseOutline: undefined,
    },
    {
      name: "Java",
      Tutor: "Mr. Jamal",
      Brutal: false,
      lovesViolence: [true, "Is plenty"],
      duration: "1 day",
      courseOutline: "Learn yourelf after one day",
    },
  ],
};

console.log(clare.descOfCourses[0].Tutor);
