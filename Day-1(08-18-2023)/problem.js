// 1. Write a function that can print any random number between any two given numbers (including them).
function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}
console.log(getRandomNumber(1, 10));

// 2. How can you order roll numbers of students in your class sequentially
const rooNumber = [20, 22, 1, 4, 6, 8, 2, 7];
console.log(rooNumber.sort(function(a,b){
  return a - b;
}))

// 3. How can you order names of students in your class sequentially?
const students = ["Ibrahim", "John", "Shamim", "Prantik", "Allby"];
let res = students.sort();
console.log(res);

// 4. Write a function that can tell us whether an year is a leap year or not.

function inLeapYear(year){
  if((year % 400 === 0) || ((year % 100 === 0) && (year % 4 !== 0))){
    console.log(`${year} is a Leap Year`);
  }
  else{
    console.log(`${year} is not a Leap Year`);
  }
}
inLeapYear(2028);

// 5. How would you determine the number of vowels in a sentence?

const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function countVowels(sentence){
  let count = 0;
  const letters = Array.from(sentence);
  letters.forEach(function(value){
    if(vowels.includes(value)){
      count++;
    }
  });
  return count;
}
console.log(countVowels('I love Programming. I am a Software Engineer my Future plan'));

// 6. How would you extract the duplicate numbers in an array?

// const numbers = [1, 3, 5, 6 , 5, 3, 4, 6];

// const duplicates = numbers.filter(function(value, index, array){
//   return array.indexOf(value) !== index;
// });
// console.log(duplicates);

// 7. How would you extract the unique numbers in an array?
const numbers = [1, 3, 5, 6 , 5, 3, 4, 6];

const duplicates = numbers.filter(function(value, index, array){
  return array.indexOf(value) === index;
});
console.log(duplicates);

// below the sentence use the ibrahim word total and how to position first time Ibrahim
let sentence = "My name is Ibrahim. i am student. My pesion web developer. My future goal Software Engineer. MY Full name Md. Ibrahim Sarder.";

const matches = sentence.match(/Ibrahim/gi);
const occurences = matches ? matches.length : 0;

console.log(occurences);

let position = sentence.search(/Ibrahim/i);
position = position >= 0 ? position : 'Not Found';
console.log(position); 
// input : linearSearch (['a', 'b', 'c','d', 'e', 'f',]), 'b');

function linearSearch(arr, value){
  console.log(value);
  let length = arr.length;
  for(let i = 0; i< length; i++){
    if(arr[i] === value){
    return i;
    }
  }
  return 'Not Found';
}


console.log(linearSearch(['a', 'b', 'c','d', 'e', 'f'], 'b'));
