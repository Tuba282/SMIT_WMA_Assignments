// javascript practise sheet 9-11
// USER INPUT & CONDITIONAL STATEMENT

/*
1. Write a program to take “city” name as input from user. If 
user enters “Karachi”, welcome the user like this: 
“Welcome to city of lights”
*/
// var city = prompt("Enter city name: ");

// if (city === "karachi") {
//   alert("Welcome to city of lights");
// }

/*
2. Write a program to take “gender” as input from user. If the 
user is male, give the message: Good Morning Sir. If the 
user is female, give the message: Good Morning Ma’am. 
*/

// var gender = prompt("Enter your gender: ");

// if (gender === "male") {
//   document.write("Good Morning Sir");
// } else if (gender === "female") {
//   document.write("Good Morning Ma'am");
// } else {
//   document.write("Enter valid gender ( male / female )");
// }

/*
3. Write a program to take input color of road traffic signal 
from the user & show the message according to this table:
*/

// var color = prompt("Enter color of road traffic signal: ");

// if (color === "red") {
//   document.write("Must Stop");
// } else if (color === "yellow") {
//   document.write("Ready to move");
// } else if (color === "green") {
//   document.write("Move Now");
// }

/*
4. Write a program to take input remaining fuel in car (in 
litres) from user. If the current fuel is less than 0.25litres, 
show the message “Please refill the fuel in your car”
*/
// var remaining_fuel = +prompt("Enter remaining fuel in car tank");

// if (remaining_fuel < 0.25) {
//   document.write("Please refill the fuel in your car");
// } else {
//   document.write("Keep driving");
// }

/*
5. Run this script, & check whether alert message would be 
displayed or not. Record the outputs.
*/

// var a = 4;
// if (++a === 5) {
//   alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83) {
//   alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13) {
//   alert("condition 1 is true");
// }
// if (c === 13) {
//   alert("condition 2 is true");
// }
// if (++c < 14) {
//   alert("condition 3 is true");
// }
// if (c === 14) {
//   alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;

// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// }
// if (true) {
//   alert("True");
// }
// if (false) {
//   alert("False");
// }
// if ("car" < "cat") {
//   alert("car is smaller than cat");
// }

/*
6. Write a program to take input the marks obtained in three 
subjects & total marks. Compute & show the resulting 
percentage on your page. Take percentage & compute 
grade as per following table: 
*/

// var obtained_marks = +prompt("Enter obtained marks: ");
// var total_marks = 100;

// if (obtained_marks < 100) {
//   document.write("Total marks: " + total_marks + "<br>");
//   document.write("Obtained marks: " + obtained_marks + "<br>");
//   var percentage = (obtained_marks / total_marks) * 100;

//   document.write("Percentage: " + percentage);
//   if (percentage >= 80) {
//     document.write("<br>" + "Grade: A-one" + "<br>");
//     document.write("Remarks: Excellent");
//   } else if (percentage >= 70) {
//     document.write("<br>" + "Grade: A" + "<br>");
//     document.write("Remarks: Good");
//   } else if (percentage >= 60) {
//     document.write("<br>" + "Grade: B" + "<br>");
//     document.write("Remarks: You need to improve");
//   } else if (percentage < 60) {
//     document.write("<br>" + "Grade: Fail" + "<br>");
//     document.write("Remarks: Sorry");
//   } else {
//     document.write("<br>" + "Enter valid marks");
//   }
// } else {
//   document.write("<br>" + "Enter valid marks");
// }

/*
7. Guess game: 
Store a secret number (ranging from 1 to 10) in a variable. 
Prompt user to guess the secret number. 
a. If user guesses the same number, show “Bingo! Correct 
answer”. 
b. If the guessed number +1 is the secret number, show 
“Close enough to the correct answer”.
*/
// var secret_number = 5;

// var guess = +prompt("Guess the secret number: ");

// if (guess === secret_number) {
//   document.write("Bingo! Correct answer");
// } else if (guess === secret_number + 1 || guess === secret_number - 1) {
//   document.write("Close enough to the correct answer");
// } else {
//   document.write("Wrong answer");
// }

/*
8. Write a program to check whether the given number is 
divisible by 3. Show the message to the user if the number 
is divisible by 3.
*/

// var user_input = +prompt(
//   "Enter number to check weather given number divisible by 3 or not ."
// );

// if (user_input % 3 === 0) {
//   document.write("Given number is divisible by 3");
// } else {
//   document.write("Given number is not divisible by 3");
// }

/*
9. Write a program that checks whether the given input is an 
even number or an odd number.
*/

// var user_input = +prompt(
//   "Enter number to check weather given number even or odd ."
// );

// if (user_input % 3 === 0) {
//   document.write("Even Number");
// } else {
//   document.write("Odd Number");
// }

/*
10. Write a program that takes temperature as input and 
shows a message based on following criteria 
a. T > 40 then “It is too hot outside.” 
b. T > 30 then “The Weather today is Normal.” 
c. T > 20 then “Today’s Weather is cool.” 
d. T > 10 then “OMG! Today’s weather is so Cool.”
*/

// var temp = +prompt("Enter temperature in degree: ");

// if (temp > 40) {
//   document.write("It is too hot outside.");
// } else if (temp > 30) {
//   document.write("The Weather today is Normal.");
// } else if (temp > 20) {
//   document.write("Today’s Weather is cool.");
// } else if (temp > 10) {
//   document.write("OMG! Today’s weather is so Cool.");
// } else {
//   document.write("Enter valid temperature");
// }

/*
11. Write a program to create a calculator for +,-,*, / & % 
using if statements. Take the following input: 
a. First number 
b. Second number 
c. Operation (+, -, *, /, %) 
Compute & show the calculated result to user. 
*/
// var operation = prompt(`What you wanna do first 
//     addition  ( + ) 
//     subtraction ( - )
//     multiplication ( * )
//     division ( / )
//     modulus ( % )

//     Enter Symbols like :( + , - , *)
//     only one at a time


//     `);
// var first_num = +prompt("Enter First Number");
// var second_num = +prompt("Enter Second Number");

// if (operation === "+") {
//   document.write(first_num + second_num);
// } else if (operation === "-") {
//   document.write(first_num - second_num);
// } else if (operation === "*") {
//   document.write(first_num * second_num);
// } else if (operation === "/") {
//   document.write(first_num / second_num);
// } else if (operation === "%") {
//   document.write(first_num % second_num);
// } else {
//   document.write("Enter valid operation");
// }
