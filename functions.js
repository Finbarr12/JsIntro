// //Anonymous Function
let func = function () {};

function funcOne() {}

// //callback Function
let newFunc = () => {};

//Parameters & Arguments

let Sqroot = function (firstnumber) {
  return Math.sqrt(firstnumber);
};

console.log(Sqroot(64));

function substraction(first, second) {
  console.log(first + second);
}

substraction(2, 4);

let division = (a, b) => {
  return a / b;
};

console.log(division(10, 2));

let uppercase = function (text) {
  return text.toUpperCase();
};

let TryIt = () => {
  return 1 + 1;
};

console.log(TryIt());

console.log(uppercase("Emmanuel"));
