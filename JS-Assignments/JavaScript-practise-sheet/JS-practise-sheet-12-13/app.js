// javascript practise sheet 9-11
// IF...ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS

/*
1.  Write a program that takes a character (number or string) 
in a variable & checks whether the given input is a 
number, uppercase letter or lower case letter. (Hint: ASCII 
codes:- A=65, Z=90, a=97, z=122).
*/
// let input = prompt("Enter Number Or String");

// if (input >= String.fromCharCode(65) && input <= String.fromCharCode(90)) {
//   console.log("Uppercase");
// } else if (input >= String.fromCharCode(97) &&  input <= String.fromCharCode(122)) {
//   console.log("Lowercase");
// } else if (
//   input >= String.fromCharCode(48) &&
//   input <= String.fromCharCode(57)
// ) {
//   console.log("Number");
// } else {
//   console.log("Invalid");
// }

/*
2. Write a JavaScript program that accept two integers and 
display the larger. Also show if the two integers are equal.
*/
// var first_int = +prompt("Enter First Number ...");
// var second_int = +prompt("Enter Second Number ...");

// if (first_int === second_int) {
//   console.log("Both Numbers Are Equal");
// } else if (first_int > second_int) {
//   console.log("First Number Is Greater");
// } else {
//   console.log("Second Number Is Greater");
// }

/*
3. Write a program that takes input a number from user & 
state whether the number is positive, negative or zero.
*/

// var input = +prompt("Enter Number");

// if (input > 0) {
//   console.log("Positive");
// } else if (input < 0) {
//   console.log("Negative");
// } else {
//   console.log("Zero");
// }

/*
4. Write a program that takes a character (i.e. string of 
length 1) and returns true if it is a vowel, false otherwise 
*/

// var check = prompt("Enter any character ...");

// if (
//   check.toLowerCase() === "a" ||
//   check.toLowerCase() === "e" ||
//   check.toLowerCase() === "i" ||
//   check.toLowerCase() === "o" ||
//   check.toLowerCase() === "u"
// ) {
//   console.log("True");
// } else {
//   console.log("False");
// }

/*
5. Write a program that 
a. Store correct password in a JS variable. 
b.  Asks user to enter his/her password 
c.   Validate the two passwords: 
    i. Check if user has entered password. If not, then 
    give message “ Please enter your password” 

    ii. Check if both passwords are same. If they are 
    same, show message “Correct! The password you 
    entered matches the original password”. Show 
    “Incorrect password” otherwise. 
*/

// var pswd = "password";

// var input = prompt("Enter Password");

// if (input === null) {
//   console.log("Please Enter Password");
// } else {
//   if (input === pswd) {
//     console.log("Correct! password");
//   } else {
//     console.log("Incorrect Password");
//   }
// }

/*
6. This if/else statement does not work. Try to fix it: 
var greeting; 
var hour = 13; 
if (hour < 18) { 
greeting = "Good day"; 
else 
greeting = "Good evening"; 
}
*/
// var greeting;
// var hour = 13;
// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

/*
7. Write a program that takes time as input from user in 24 
hours clock format like: 1900 = 7pm. Implement the 
following case using if, else & else if statements
*/
// var time = +prompt("What time is it ... ?");
// if (time >= 0 && time < 1200) {
//   console.log(`Good Morning ... `);
// } else if (time >= 1200 && time < 1700) {
//   console.log(`Good Afternoon ... `);
// } else if (time >= 1700 && time < 2100) {
//   console.log(`Good Evening ... `);
// } else if (time >= 2100 && time < 2359) {
//   console.log(`Good Night ... `);
// } else {
//   console.log(`Invalid Time ... `);
// }
