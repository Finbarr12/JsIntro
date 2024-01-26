// Task 1

// 1st Method
let word = "Hi world, Hi Universe";

let replace = word.replaceAll("Hi", "Hello");
console.log("This is method 1", replace);

//Test 2

//1st method
let newWord = "Ma                                   n";
let newWordLength = newWord.length;
console.log(newWordLength);
let replaceSpace = newWord.replaceAll(" ", "");
console.log(replaceSpace);
let answer = replaceSpace.length;
console.log("all", answer);

//2nd Method
let newWord1 = "Ma                                   n";
let newWordLength1 = newWord.length;
console.log(newWordLength1);
let replaceSpace1 = newWord.replace(/\s/g, "");
console.log(replaceSpace1);
let answer1 = replaceSpace.length;
console.log("regexp", answer1);

//Task 3

//1st Method
let anotherWord = "Money";
let anotherlength = anotherWord.length;
let dividedWord = Math.floor(anotherlength / 2);
console.log(dividedWord);
let midword = anotherWord.charAt(dividedWord);
console.log(midword);
