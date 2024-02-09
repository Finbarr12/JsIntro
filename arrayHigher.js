// //Reduce

// let number = [1, 2, 3, 4, 5, 6, 7];

// let reduce = number.reduce((initial, current) => {
//   return initial + current;
// });

// console.log(reduce);

// //some
// let nums = [5, 9, 3, 17, 20, 10, 18, 41];
// let great = nums.some((n) => n > 42);
// console.log(great);

// //FlatMap

// let arr = ["a", "b", ["c", "d,"], "e"];

// let flatmap = arr.flatMap((n) => {
//   return n;
// });
// console.log(flatmap);

// const day = [10, 20, 30, 40, 50];
// //find the index of the first element greater than 25
// const indexs = day.findIndex(function (element) {
//   return element > 100;
// });
// console.log(indexs);

// //Find
// let array = [1, 2, 3, 4, 5, 6];
// //to FIND the first even number
// let evenNumber = array.find((numtobeused) => {
//   return numtobeused % 2 == 0;
// });

// console.log(evenNumber);

// //filter

// let filter = array.filter((n) => {
//   return n % 2 === 0;
// });

// console.log(filter);

// let scattered = [1, 4, 6, 7, 3, 10, 15, 11, 2];

// let sortedArr = scattered.sort((a, b) => {
//   return b - a;
// });

// console.log(sortedArr);

// let letters = [
//   "Clare",
//   "Ledor",
//   "Jamal",
//   "Samantha",
//   "Mayowa",
//   "West",
//   "Victor",
//   "Finbarr",
//   "Uzor",
// ];

// // let sortnames = letters.sort((a, b) => {
// //   return a.localeCompare(b);
// // });

// // console.log(sortnames);

// let map = letters.map((a) => {
//   return a.toUpperCase();
// });

// console.log(map);

const countWordOccurrences = (sentence, word) => {
  return sentence.split(" ").filter((w) => w === word).length;
};

console.log(countWordOccurrences("comma comma", "comma"));
