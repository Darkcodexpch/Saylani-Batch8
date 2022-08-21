// Write a JavaScript function that reverse a number.
// var userInput = prompt("Please enter any number to reverse");
// var reverseNumberOutput;
// function reverseNumber(number) {
//     if (isNaN(number)) {
//         return alert("Please enter only numbers to reverse")
//     }
//     else {
//         var reverseNumberOutput = number.toString().split('').reverse().join(' ');
//         return reverseNumberOutput
//     }
// }

// reverseNumberOutput = reverseNumber(userInput);
// console.log("reverseNumberOutput====>", reverseNumberOutput)


// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam, radar or level.

// var userInput = prompt("Enter word to check its palindrome or not");

// function checkWordPalindrome(word){
//   var newWord='';
//   if(isNaN(word)===false){
//     alert("please enter only string to palindrome")
//   }
//   else{
//     var enterWord = word.toLowerCase();
//     for(var i = word.length -1; i >= 0; i--){
//       newWord += enterWord[i];
//     }
//     if(newWord === word){
//       return console.log(`${word} is a palindrome word`)
//     }
//     else{
//       return console.log(`${word} is a not palindrome word`)
//     }
//       }
// }

// checkWordPalindrome(userInput)



// 3. Write a JavaScript function that generates all combinations of a string.
// let userInput = prompt("Enter your word");
// function generatesCombination(word) {
//     if (isNaN(word) === false) {
//         return alert("Please enter only strings")
//     }
//     else {
//         var combinations = [];
//         for (let i = 0; i < word.length; i++) {
//             for (let j = i + 1; j < word.length + 1; j++) {
//                 combinations.push(word.slice(i, j))
//             }
//         }
//         return combinations;
//     }

// }


// console.log(generatesCombination(userInput))


// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.

// var userInput = prompt("Enter any word");
// function alphabeticOrder(word) {
//    if(isNaN(word) === false){
//     return alert("Please enter only numbers")
//    }
//    else{
//     var output = word.toLowerCase().split('').sort().join('')
//     return output;
//    }
// }

// console.log(alphabeticOrder(userInput))

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// let userInput = prompt("Enter any pera to Capitalize")
// function covertFirstLetterUpperCase(word) {
//     if (isNaN(word) === false) {
//         return alert("Please enter only strings")
//     }
//     else {
//         var initialValue = word.split(' ');
//         var UpperCases = [];
//         for (var i = 0; i < initialValue.length; i++) {
//             UpperCases.push(initialValue[i][0].toUpperCase() + initialValue[i].slice(1));
//         }
//         return UpperCases.join(' ');
//     }
// }


// console.log(covertFirstLetterUpperCase(userInput))

// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// var res;
// var userInput = prompt("Enter your sentence")
// function findLongestString(word) {
//     if(isNaN(word) === false){
//        return "Please enter only strings"
//     }
//     else{
//         var output = word.split(" ");
//         var longestCharacter = 0;
//         var longestWord = '';
//         for (var i = 0; i < output.length; i++) {
//             if (longestCharacter < output[i].length) {
//                 longestCharacter = output[i].length;
//                 longestWord = output[i];
//             }

//         }
//         return longestWord;
//     }

// }
// res = findLongestString(userInput);
// console.log(res);

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// let res;
// let userInput = prompt("Please enter any word");
// function getVowels(string) {
//     if(isNaN(string)===false){
//        return "Please enter string"
//     }
//     else{
//         var Vowels = 'aAeEiIoOuU';
//     var vowelsCount = 0;
//     for(var i = 0; i < string.length ; i++) {
//        if (Vowels.indexOf(string[i]) !== -1) {
//           vowelsCount += 1;
//       }
//     }
//  return vowelsCount;
//     }

//  }

//  res = getVowels(userInput);
//  console.log(res)

// 8  Write a JavaScript function which accepts an argument and returns the type.
// let res;
// function typeOfNumber(word) {
//     if (word === null || word === '') {
//         return "please type something"
//     }
//     else if (typeof(word) === "number") {
//         return "number"
//     }
//     else if (typeof (word) === "string") {
//         return "string"
//     }
//     else if (typeof (word) === "object") {
//         return "object"
//     }
//     else if (typeof (word) === "boolean") {
//         return "boolean"
//     }
//     else if (typeof (word) === "function") {
//         return "function"
//     }
//     else {
//         return "Object"
//     }

// }

// res = typeOfNumber("ok")
// console.log(res);




// solution two
// function detectDataTypes(value){
//     var dataTypes = [Function, RegExp, Number, String, Boolean, Object],len;
//     if (typeof value === "object" || typeof value === "function") 
//     {
    
//      for (var x = 0, len = dataTypes.length; x < len; x++) 
//      {
//             if (value instanceof dataTypes[x])
//             {
//                 return dataTypes[x];
//             }
//       }
//     }
    
//     return typeof value;
// }

// console.log(detectDataTypes(true))


// // 9  Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// function test_prime(n)
// {

//   if (n===1)
//   {
//     return false;
//   }
//   else if(n === 2)
//   {
//     return true;
//   }else
//   {
//     for(var x = 2; x < n; x++)
//     {
//       if(n % x === 0)
//       {
//         return false;
//       }
//     }
//     return true;  
//   }
// }

// console.log(test_prime(37));

// 10. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
// Question: 10 Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
// code:
// function second(){
//     var num = [9, 8, 2, 3, 4, 5];
//     num = num.sort();
//     var secondLowest = num[1];
//     var secondGreatest = num[num.length - 2];
//     var list = [];
//     list.push(secondLowest)
//     list.push(secondGreatest);
//     document.write(list);
//     }
//     second();
