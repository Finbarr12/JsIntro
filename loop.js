//while
//do while
//for
//for in && for of

//while Loop
// let initial = 0;

// while (initial <= 9) {
//   initial++;
//   console.log("This is while loop", initial);
// }

// //do while
// let start = 0;
// do {
//   start++;
//   console.log("This is the do while loop", start);
// } while (start <= 9);

// //for

// //  for (initialization,condition,increment/decrement){
// // logic here
// // }

// for (let i = 0; i <= 10; i++) {
//   console.log("This is a for loop", i);
// }

// for (let i = 1; i <= 50; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// For of

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (mena of arr) {
  console.log(mena.toString());
}

let person = {
  name: "Mayowa",
  class: "KG 1",
  age: 24,
};

for (mayo in person) {
  console.log(person[mayo]);
}
