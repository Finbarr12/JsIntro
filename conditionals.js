let date = Date.now();

console.log(date);

let newDate = new Date();
console.log(newDate);

//get time

let getTime = newDate.toTimeString();
console.log(getTime);

//GET DAY
let getDay = newDate.getDay();
console.log(getDay);

//getHour
let getHour = newDate.getHours();
console.log(getHour);

//Greetings Condition

const TimeCheck = () => {
  if (getHour >= 0 && getHour <= 12) {
    return "Good Morning⏲☀";
  } else if (getHour >= 13 && getHour <= 16) {
    return "Good Afternoon 🌞⏲";
  } else if (getHour >= 17 && getHour <= 21) {
    return "Good Evening 🌓⏱";
  } else {
    return "Good Night🌙⌚";
  }
};

console.log(TimeCheck());
