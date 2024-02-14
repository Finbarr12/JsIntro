// Question 1
// Write a  function (countWordOccurrences) that takes a sentence and a word as input and returns the number of times the word appears in the sentence.

let countWordOccurrences = function (sentence, word) {
  let splitSentence = sentence.toLowerCase().split(" ");
  let filterOutWord = splitSentence.filter((w) => {
    return w === word;
  });
  let howManyTimesAppeared = filterOutWord.length;

  let finalResult = `In the sentence (${sentence}), The word ${word} appeared ${howManyTimesAppeared} times `;
  return finalResult;
};

console.log(
  countWordOccurrences("Ledor is eating in the class during lectures.", "ledor")
);

//Question 2
//Write a  function (removeElements) that takes an array and a value as input, and returns a new array with all occurrences of that value removed.

function removeElements(arr, value) {
  let removeVal = arr.filter((rm) => {
    return rm !== value;
  });
  let finalResult = `The new array is [${removeVal}] bacause the value (${value}) set has been removed from the initial array([${arr}])`;

  return finalResult;
}

//Quetion 3
console.log(removeElements([1, 2, 3, 4, 5, 2, 2, 3, 4], 2));

let OddNumber = (Array) => {
  let stepOne = Array.filter((J) => {
    return J % 2 !== 0;
  });
  return stepOne;
};
console.log(OddNumber([1, 34, 2, 6, 7, 5, 7, 7, 6, 8, 6, 4, 54, 6]));

//QUESTION 4

let FindMax = (input) => {
  let maxNum = input.reduce((a, b) => {
    return Math.max(a, b);
  });
  return maxNum;
};

Input = [7, 2, 9, 4];
console.log(FindMax(Input));

let name12 = function (firstname) {
  return firstname.charAt(0).toUpperCase() + firstname.slice(1);
};
console.log(name12("clare"));
