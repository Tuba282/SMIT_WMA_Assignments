// javascript practise sheet 26-30
// MATH METHODS 

/*
1.  Write a program that takes a positive integer from user & 
display the following in your browser. 
a. number 
b. round off value of the number 
c. floor value of the number 
d. ceil value of the number   2. Write a program that takes a negative floating point 
number from user & display the following in your browser. 
a. number 
b. round off value of the number 
c. floor value of the number 
d. ceil value of the number   

*/

// var user_input = +prompt("Enter a positive number ...")

// document.write("The number is " + user_input + "<br>")
// document.write("Round off value is " + Math.round(user_input) + "<br>")
// document.write("Ciel value is " + Math.ceil(user_input) + "<br>")
// document.write("Floor off value is " + Math.floor(user_input) + "<br>")


/*
2. Write a program that takes a negative floating point 
number from user & display the following in your browser. 
a. number 
b. round off value of the number 
c. floor value of the number 
d. ceil value of the number
*/

// var user_input = +prompt("Enter a negative number ...")

// document.write("The number is " + user_input + "<br>")
// document.write("Round off value is " + Math.round(user_input) + "<br>")
// document.write("Floor off value is " + Math.floor(user_input) + "<br>")
// document.write("Ciel value is " + Math.ceil(user_input) + "<br>")



/*
3. Write a program that displays the absolute value of a 
number. 
E.g. absolute value of -4 is 4 & absolute value of 5 is 5
*/

// var user_input = +prompt("Enter a number ...")

// document.write("The number is " + user_input + "<br>")
// document.write("The absolute value is " + Math.abs(user_input) + "<br>")



/*
4. Write a program that simulates a dice using random() 
method of JS Math class. Display the value of dice in your 
browser.:
*/

// var dice = (Math.random() * 10) + 1
// document.write("The value of dice is " + Math.floor(dice) + "<br>")


/*
5. Write a program that simulates a coin toss using random() 
method of JS Math class. Display the value of coin in your 
browser
*/
// var coin = Math.floor(Math.random() * 2);

// if (coin === 0) {

//     document.write(coin + "<br>");
//     document.write("Coin Value: Heads");
// } else {

//     document.write(coin + "<br>");
//     document.write("Coin Value: Tails");
// }


/*
6. Write a program that shows a random number between 1 
and 100 in your browser. 
*/

// var generate_randon_num = Math.floor(Math.random() * 100) + 1

// document.write("The random number between 1 and 100 is :" + generate_randon_num + "<br>")


/*
7. Write a program that asks the user about his weight. Parse 
the user input and display his weight in your browser. 
Possible user inputs can be: 
a. 50 
b. 50kgs 
c. 50.2kgs 
d. 50.2kilograms
*/

// var user_weight = +prompt("Enter your weight in decimal ...")

// document.write(" Your Maximum weight is " + parseInt(user_weight) + " kilograms")




/*
8. Write a program that stores a random secret number from 
1 to 10 in a variable. Ask the user to input a number 
between 1 and 10. If the user input equals the secret 
number, congratulate the user.
*/

// var user_gusee = +prompt("Enter any random number ...")
// var secret_num = Math.floor(Math.random() * 10 + 1)

// if (secret_num === user_gusee) {

//     document.write("congratulations Your Number Matched. " + "<br>");
//     document.write("System Number " + secret_num + "<br>");
//     document.write("Your Guess " + user_gusee + "<br>");
// } else {

//     document.write("Aww Better Luck Next Time. " + "<br>");
//     document.write("System Number " + secret_num + "<br>");
//     document.write("Your Guess " + user_gusee + "<br>");
// }