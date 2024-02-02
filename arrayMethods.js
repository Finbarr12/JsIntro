let arr = ["Hello", "Jane", "Paul", "Fitz"];

let splice = arr.splice(1, 2, "Kojo", "Kwame");
console.log(splice);
console.log(arr);

//reverse

let num = [1, 2, 3];
let reverse = num.reverse();
console.log(reverse);

//fill

let fillValue = ["Red", "Blue", "Yellow", "Green", "Purple"];
let fill = fillValue.fill("Pink", 2, 4);
console.log(fill);

let names = "Sam";
let namearray = names.split("", names.length);
console.log(namearray);
let reversedarray = namearray.reverse();
console.log(reversedarray);
let reversedname = reversedarray.join("");
console.log(reversedname);

let fire = 5;
let array = Array(10000).fill(fire);
console.log(array);
