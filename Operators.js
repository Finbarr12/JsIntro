//Logical Operators
//Comparison Operators
//Assignment Operators
//Unary Operators
//Arithmetic Operators
//Tenary Operators
//Bitwise Operators

// Logical Operators

//AND - &&
// OR - ||
// NOt - !

//And
let check = true && false;
console.log(check);

//Or
let orCheck = true || false;
console.log(orCheck);

//Not
let notCheck = !false;
console.log(notCheck);

//Comparison Operators

//geaterThan = >
//lessThan = <
//equalTo = ==
//strictly EqualTo = ===
//NotEqualtO = !=
//notStrictlyEqualTo = !==
//greaterThanOrEqualTo = >=
//lessThanOrEqualTo = <=

let gt = 10 > 9;
console.log("Greater Than", gt);

let lt = 10 < 2;
console.log("Less Than", lt);

let eqt = 10 == "10";
console.log("Equal To", eqt);

let strictEqt = 10 === "10";
console.log("Strictly Equal to", strictEqt);

let nteqt = 10 != "10";
console.log("Not equal to", nteqt);

let ntStreqt = 10 !== "10";
console.log("Not strictly equal to", ntStreqt);

let gteq = 10 >= 10;
console.log("Greter Than or Equal to", gteq);

let lteq = 10 <= 70;
console.log("Less Than or Equal to", lteq);

//Assignment operators

// =
// +=
// -=
// *=
// /=

let num = 0;
console.log("Start", num);
num += 2;
console.log("Finish", num);

//Unary Opearators
//+ = Plus
// - = Minus
//++ = Plus Plus(Incremental Count)
//-- = Minus Minus(Decremental Count)
//! = Not

let x = 5;
let y = -x;
console.log(y);

let b = 4;
b++;
console.log("Increment", b);

//Tenary Operators

const cond = 20 < 10 ? "Incorrect" : "Correct";
console.log(cond);
