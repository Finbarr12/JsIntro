let isPaindrom = function (word) {
  let Part1 = word.split("").reverse().join("");

  if (Part1 === word) {
    return `The word ${word} is a palindrome word because it is still same as it is reversed \n
    ${word} - ${Part1}`;
  } else {
    return `The word ${word} is not a palindrome word because it is not same as it is reversed \n
    ${word} - ${Part1}`;
  }
};

console.log(isPaindrom("mallam"));

let FindLongestWord = (sentence) => {
  let sentencearr = sentence.split(" ");
  for (arr of sentencearr) {
  }
  return Math.max(arr.length);
};
console.log(
  "The longest length is " +
    FindLongestWord("My name is Ikechukwu") +
    " because its the length of the longest word"
);
