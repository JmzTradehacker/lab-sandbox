/**
 * Any of the examples below will accomplish the
 * same task: reversing a string.
 * 
 * Which of these examples is best? Why?
 * Note that there is no "correct" answer.
 */
function reverseString(str) {
    const strArray = str.split("");
    const revArray = strArray.reverse();
    const revString = revArray.join("");
    return revString;
  }
  
  function reverseString2(str) {
    return str.split("").reverse().join("");
  }
  
  function reverseString3(str) {
    let revString = "";
    for (let i = str.length - 1; i >= 0; i--) {
      revString += str[i];
    }
    return revString;
  }
  
  function reverseString4(str) {
    if (str === "") return "";
    else return reverseString4(str.substr(1)) + str.charAt(0);
  }
  
  function reverseString5(str) {
    return (str === "") ? "" : reverseString5(str.substr(1)) + str.charAt(0);
  }
  
  console.log(reverseString("!dlroW olleH"))
  console.log(reverseString2("!dlroW olleH"))
  console.log(reverseString3("!dlroW olleH"))
  console.log(reverseString4("!dlroW olleH"))
  console.log(reverseString5("!dlroW olleH"))

  // Part 1: Function Building

// 1. Take an array of numbers and return the sum.
function sumArray(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// 2. Take an array of numbers and return the average.
function averageArray(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
}

// 3. Take an array of strings and return the longest string.
function longestString(strings) {
  return strings.reduce((longest, str) => str.length > longest.length ? str : longest, "");
}

// 4. Take an array of strings and a number, and return an array of the strings that are longer than the given number.
function stringsLongerThan(strings, num) {
  return strings.filter(str => str.length > num);
}

// 5. Take a number, n, and print every number between 1 and n without using loops (using recursion).
function printNumbers(n) {
  if (n < 1) return;
  printNumbers(n - 1);
  console.log(n);
}

console.log(sumArray([1, 2, 3, 4, 5]));  
console.log(averageArray([1, 2, 3, 4, 5])); 
console.log(longestString(['apple', 'banana', 'pear', 'grape']));  
console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3));  
printNumbers(5);  // 1 2 3 4 5


// Part 2: Array Methods with Callbacks

let data = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

let sortedByAge = data.sort((a, b) => parseInt(a.age) - parseInt(b.age));
console.log(sortedByAge);

let filteredByAge = data.filter(person => parseInt(person.age) <= 50);
console.log(filteredByAge);

let updatedData = data.map(person => ({
  ...person,
  job: person.occupation,
  age: (parseInt(person.age) + 1).toString(),
  occupation: undefined 
}));
console.log(updatedData);

let totalAge = data.reduce((sum, person) => sum + parseInt(person.age), 0);
let averageAge = totalAge / data.length;
console.log(`Total Age: ${totalAge}, Average Age: ${averageAge}`);


// Part 3: Passing Objects by Value and Reference

function incrementAge(obj) {
  if (!obj.age) obj.age = 0;
  obj.age += 1;
  obj.updated_at = new Date();
}

function copyAndIncrementAge(obj) {
  let newObj = { ...obj, age: obj.age ? obj.age + 1 : 1, updated_at: new Date() };
  return newObj;
}

let person = { name: "John", age: 30 };
incrementAge(person);
console.log(person); 

let newPerson = copyAndIncrementAge(person);
console.log(newPerson);