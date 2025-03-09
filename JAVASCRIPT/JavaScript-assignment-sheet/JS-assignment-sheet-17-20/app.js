// javascript practise sheet 17-20
// ARRAYS AND LOOP

/*
1.  Declare and initialize an empty multidimensional array. 
(Array of arrays)
*/

var things = [
  "pen",
  "pencil",
  ["computer", "mouse"],
  "cup",
  ["keyboard", "cpu"],
  "jug",
];

/*
2. Declare and initialize a multidimensional array 
representing the following matrix: 
0123
1012
2101
*/
var numbers = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];

//3. Write a program to print numeric counting from 1 to 10.

// for (var i = 1; i <= 10; i++) {
//   console.log(i);
// }

/*
4.  Write a program to print multiplication table of any 
number using for loop. Table number & length should be 
taken as an input from user. 
*/

// var table_number = +prompt("Enter Table number");
// var table_start = +prompt("Enter Table Start number");
// var table_end = +prompt("Enter Table End number");

// document.write(
//   "Multiplication Table of " +
//     table_number +
//     " is of length " +
//     table_end +
//     "<br/><br/>"
// );
// for (var i = table_start; i <= table_end; i++) {
//   document.write(table_number + " X " + i + " = " + table_number * i + "<br/>");
// }

/*
5. Write a program to print items of the following array 
using for loop: 
fruits = [“apple”, “banana”, “mango”, “orange”, 
“strawberry”] 
*/

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i <= fruits.length - 1; i++) {
//   document.write("<br/>" + fruits[i] + "<br/>");
// }
// for (var i = 0; i <= fruits.length - 1; i++) {
//   document.write(
//     "<br/>" + "Element at " + i + " index is " + fruits[i] + "<br/>"
//   );
// }

/*
6. Generate the following series in your browser. See 
example output. 
a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k 
*/

// document.write("<br/>" + "<b> Counting 1-15 :</b>" + "<br/>");
// for (var i = 1; i <= 15; i++) {
//   document.write(" " + i + " ");
// }

// document.write("<br/><br/>" + "<b> Reverse counting 10-1: </b>" + "<br/>");
// for (var i = 10; i >= 1; i--) {
//   document.write(" " + i + " ");
// }

// document.write("<br/><br/>" + "<b> Even Number 0-20: </b>" + "<br/>");
// for (var i = 0; i <= 20; i++) {
//   if (i % 2 === 0) {
//     document.write(" " + i + " ");
//   }
// }

// document.write("<br/><br/>" + "<b> Odd Number 1-19: </b>" + "<br/>");
// for (var i = 0; i <= 20; i++) {
//   if (i % 2 !== 0) {
//     document.write(" " + i + " ");
//   }
// }

// document.write("<br/><br/>" + "<b> Even Number 0-20: </b>" + "<br/>");
// for (var i = 2; i <= 20; i++) {
//   if (i % 2 === 0) {
//     document.write(" " + i + "k ");
//   }
// }

/*
7. You have an array 
A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'] 
Write a program to enable “search by user input” in an 
array. 
After searching, prompt the user whether the given item is 
found in the list or not. 
*/

// var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
// var user_serch = prompt(
//   "Find you favorite item ... " +
//     `
//     cake---apple pie---cookie---chips---patties"
//     `
// );

// var getFirstCharIndex = bakery.indexOf(user_serch);

// if (getFirstCharIndex === -1) {
//   document.write(
//     "<br.> Sorry Sir/Ma'am  we couldn't find your selected item ... <br/>"
//   );
// } else if (getFirstCharIndex !== -1) {
//   document.write(
//     "<br.> yayy .. we found your selected item ... " +
//       bakery[getFirstCharIndex] +
//       " is on " +
//       getFirstCharIndex +
//       " Inedx  <br/>"
//   );
// } else {
//   document.write("<br.> Sorry Sir/Ma'am  invalid input ... <br/>");
// }

/*
8. Write a program to identify the largest number in the 
given array. 
A = [24, 53, 78, 91, 12].
*/

// var findLargestNumber = [24, 53, 78, 91, 12];
// var max_Element = -Infinity;

// for (var i = 0; i <= findLargestNumber.length; i++) {
//   if (max_Element < findLargestNumber[i]) {
//     max_Element = findLargestNumber[i];
//   }
// }

// console.log(max_Element);

/*
9. Write a program to identify the smallest number in the 
given array. 
A = [24, 53, 78, 91, 12]
*/

// var findSmallestNumber = [24, 53, 78, 91, 12];
// var min_Element = Infinity;

// for (var i = 0; i < findSmallestNumber.length; i++) {
//   if (min_Element > findSmallestNumber[i]) {
//     min_Element = findSmallestNumber[i];
//   }
// }
// console.log(min_Element);
