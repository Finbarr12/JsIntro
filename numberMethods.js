let number = 3.234;

//toString
let toString = number.toString(5);
console.log(toString);

//toexponential

let toexponential = 4274;
let resulttoexp = toexponential.toExponential();
console.log(resulttoexp);

//toprecision
let num = 1283;
let precision = num.toPrecision(2);
console.log(precision);

//tofixed
let num2 = 2304;
let fixed = num2.toFixed(2);
console.log(fixed);

//valueOf
let valnum = 234.1;
let valueOf = valnum.valueOf();
console.log(valueOf);

//MATH METHODS

//pow

let pow = Math.pow(10, 7);
console.log(pow);

//sqrt

let sqrt = Math.sqrt(441);
console.log(sqrt);

//tan
let tan = Math.tan(45);
console.log(tan);

//min

let min = Math.min(1, 5, 4, 10, 6);
console.log(min);

let random = Math.floor(Math.random() * 10000000);
console.log(random);

// let floor = Math.floor(2.113);
// console.log(floor);

// let ceil = Math.ceil(2.113);
// console.log("this is ceil", ceil);

// let round = Math.round(2.813);
// console.log(round);
