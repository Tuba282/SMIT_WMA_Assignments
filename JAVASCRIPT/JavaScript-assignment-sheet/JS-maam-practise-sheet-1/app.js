// Task 2
// Create a variable named total and initialize it to 10.
// var total = 10; //10
// total += 5; //15
// total -= 3; //12
// total *= 2; //24
// console.log(total);

// Task 3:   Prompt and Variables (Math):
// Ask the user for two numbers using prompt and store them in variables.Then,
// calculate and display the sum of those numbers.
// var num_1 = +prompt("Enter first number.?");
// var num_2 = +prompt("Enter second number.?");
// var sum = num_1 + num_2;
// console.log(sum);

/*
Task 4:   
String Concatenation: 
Create variables for a book title, author, and year of publication. Use string 
concatenation to create a sentence that introduces the book. 
For example, "The book 'Title' by Author was published in Year."

*/
// var book=" The book ";
// var tital ="'Title'";
// var author = ' by Author was published in Year .'
// console.log(book + tital + author);

/*
Task 5: Checking Even or Odd - Create a program that prompts the user to enter a number. - Use an if-else statement to check if the number is even or odd. - Display a message indicating whether the number is even or odd.

*/
// var isEven = +prompt("Enter a number.?");
// if (isEven % 2 == 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }

/*
Task 6: Grade Calculation 
Create a program that prompts the user to enter their exam score (out of 100). 
Use if-else statements to determine the letter grade based on the - following 
scale: - 90-100: A - 80-89: B - 70-79: C - 60-69: D - Below 60: F

*/

// var score = +prompt("Enter your score.?");
// if (score >= 90 && score <= 100) {
//   console.log("A grade");
// } else if (score >= 80 && score <= 89) {
//   console.log("B grade");
// } else if (score >= 70 && score <= 79) {
//   console.log("C grade");
// } else if (score >= 60 && score <= 69) {
//   console.log("D grade");
// } else {
//   console.log("F grade");
// }

/*
Task 7: Maximum of Three Numbers 
Create a program that prompts the user to enter three numbers. 
Use if-else statements to find and display the maximum of the three numbers. 

*/
// var num_1 = +prompt("Enter first number.?");
// var num_2 = +prompt("Enter second number.?");
// var num_3 = +prompt("Enter third number.?");
// if (num_1 > num_2 && num_1 > num_3) {
//   console.log(num_1 + " is greater than " + num_2 + " and " + num_3);
// } else if (num_2 > num_1 && num_2 > num_3) {
//   console.log(num_2 + " is greater than " + num_1 + " and " + num_3);
// } else {
//   console.log(num_3 + " is greater than " + num_1 + " and " + num_2);
// }

// for (var i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     // i += i;
//     console.log(i);
//   }
// }

/*
Task 8: Odd or Even Sum 
Write a program that calculates the sum of all even numbers from 1 to 100 using 
a loop and the post-increment operator. Display the sum.
*/

// var sum = 0;
// for (var i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     sum += i;
//   }
// }
// console.log(sum);
// console.log(sum++);

/*
Task 9: Output ? 
a = ? , b= ? , c =? , result =?
*/

// var a = 5;
// b = 3;
// c = 7;
// result = a++ - ++c + b + ++c - b++;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(result);

// var a=1;  b=2;  c=0;   result = ++a  -  --a +  ++c + c - a++ + --b ;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(result);
// var a=2;  b=4;  c=6;   result = a++ - --b + c-- + b++ - ++c; 
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(result);
var a=10;  b=5;  c=8;   result = ++a + --b - c++ - ++c + b--;
console.log(a);
console.log(b);
console.log(c);
console.log(result);