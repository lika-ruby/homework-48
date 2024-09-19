console.log("--------------------------- Task 1 ---------------------------");

const logItems = function (...array) {
  let message;
  console.log("------------ Exaple -------------");
  for (let i = 0; i < array.length; i += 1) {
    const number = i + 1;
    const name = array[i];
    message = `${number} - ${name}`;
    console.log(message);
  }
  return message;
};

logItems("Mango", "Poly", "Ajax");
logItems("Mango", "Poly", "Ajax", "Alex", "Peter");
logItems("Mango", "Poly");

console.log("--------------------------- Task 2 ---------------------------");

const calculateEngravingPrice = function (message, pricePerWord) {
  const wordsArray = message.split(" ");
  let countOfWorlds = wordsArray.length;
  const totalPrice = countOfWorlds * pricePerWord;
  return `Вартість напису "${message}" коштує ${totalPrice}грн`;
};

const message = prompt("Введіть бажаний напис на виробі");
console.log(calculateEngravingPrice(message, 70));

console.log("--------------------------- Task 3 ---------------------------");

const findLongestWord = function (string) {
  const worlds = string.split(" ");
  let theLongestWorld = "";
  for (const world of worlds) {
    if (theLongestWorld.length < world.length) {
      theLongestWorld = world;
    } else {
      continue;
    }
  }
  return `З рядка "${string}" найдовше слово - ${theLongestWorld}`;
};

const worlds = prompt("Введіть кілька слів через пробіл");
console.log(findLongestWord(worlds));

console.log("--------------------------- Task 4 ---------------------------");

const formatString = function (string) {
  if (string.length > 40) {
    string.slice(0, 40);
    return `${string}...`;
  } else {
    return string;
  }
};

const text = prompt("Введіть текст");
console.log(formatString(text));

console.log("--------------------------- Task 5 ---------------------------");
const checkForSpam = function (message) {
  const messageSmall = message.toLowerCase();
  const wordsArray = messageSmall.split(" ");
  for (const word of wordsArray) {
    if ("spam" === word || "sale" === word) {
      return true;
    } else {
      continue;
    }
  }
  return false;
};

const text2 = prompt("Введіть текст");
console.log(checkForSpam(text2));

console.log("--------------------------- Task 6 ---------------------------");
const numbers = [];
const addNumbersToArray = function (number) {
  if (isNaN(number)) {
    return "Було введено не число, попробуйте ще раз";
  } else {
    number = Number(number);
    numbers.push(number);
    let total = 0;
    for (const n of numbers) {
      total += n;
    }
    return total;
  }
};

let input;
do {
  input = prompt("Введіть число");
  console.log(addNumbersToArray(input));
} while (input !== null);

console.log("--------------------------- Task 7 ---------------------------");
const logins = [
  "example1",
  "example2",
  "example3",
  "example4",
  "example5",
  "example6",
];
const newLogin = prompt("Введіть логін");

const isLoginValid = function (login) {
  if (login.length > 3 && login.length < 17) {
    return true;
  } else {
    return false;
  }
};

const isLoginUnique = function (allLogins, login) {
  if (allLogins.includes(login)) {
    return false;
  } else {
    return true;
  }
};

const addLogin = function (allLogins, login) {
  isLoginValid(login);
  if (isLoginValid(login) === false) {
    return "Помилка! Логін повинен бути від 4 до 16 символів";
  }

  isLoginUnique(allLogins, login);
  if (isLoginUnique(allLogins, login) === false) {
    return "Такий логін уже використовується!";
  }

  allLogins = allLogins.push(login);
  return "Логін успішно доданий!";
};

console.log(addLogin(logins, newLogin));
