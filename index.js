//length
let girl = "Clare Paul";
let length = girl.length;
console.log(length);

//indexOf
let indexOf = girl.indexOf("a", -1);
console.log(indexOf);

//lastindexOf
let lastindexof = girl.lastIndexOf("a");
console.log(lastindexof);

//charAt
let charAt = girl.charAt(0);
console.log(charAt);

//trim
let value = " girl ";
let trim = value.trim();
console.log("before trim", value.length);
console.log("after trim", trim.length);

//charcodeAt
let charcode = girl.charCodeAt(0);
console.log(charcode);

//slice
let newValue = "Good Person";
let slice = newValue.slice(0, 4);
console.log(slice);

//uppercase
let anotherName = "jamal";
let uppercase = anotherName.toUpperCase();
console.log(uppercase);

//concat

let word = "Good";
let word2 = "Bad";

let concat = word.concat(" ", "wicked", " ", word2);
console.log(concat);

//replace
let newWord = "He is running";
let replaceword = newWord.replace("running", "walking");
console.log(replaceword);

//startswith

let startWord = "Egg";
let startsWith = startWord.startsWith("g", 1);
console.log(startsWith);

//continuation later
console.log("Hello");
