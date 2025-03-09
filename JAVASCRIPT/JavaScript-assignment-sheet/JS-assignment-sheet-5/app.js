// javascript practise sheet 5
// MATH EXPRESSIONS

// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
// var num1 = 5;
// var num2 = 10;
// var sum = num1 + num2;
// document.write("Sum of " + num1 + " and " + num2 + " is " + sum);

// // 2. Repeat task1 for subtraction, multiplication, division & modulus.
// var num1 = 5;
// var num2 = 10;
// var subtract = num2 - num1;
// document.write("Subtraction of " + num1 + " and " + num2 + " is " + subtract);

// var num1 = 5;
// var num2 = 10;
// var multiply = num1 * num2;
// document.write("Product of " + num1 + " and " + num2 + " is " + multiply);

// var num1 = 3;
// var num2 = 10;
// var divide = num1 / num2;
// document.write("Division of " + num1 + " and " + num2 + " is " + divide);

// document.write("Remainder of " + num1 + " and " + num2 + " is " + num2%num1  );

/*
3. Do the following using JS Mathematic Expressions 
a. Declare a variable. 
b. Show the value of variable in your browser like “Value 
after variable declaration is: ??”. 
c. Initialize the variable with some number. 
d. Show the value of variable in your browser like “Initial 
value: 5”. 
e. Increment the variable. 
f. Show the value of variable in your browser like “Value 
after increment is: 6”. 
g. Add 7 to the variable. 
h. Show the value of variable in your browser like “Value 
after addition is: 13”. 
i. Decrement the variable. 
j. Show the value of variable in your browser like “Value 
after decrement is: 12”. 
k. Show the remainder after dividing the variable’s value 
by 3.  
l. Output : “The remainder is : 0”.
*/
// var num ;
// document.write("Value after variable declaration is: " + num + "<br>");

// num = 5;
// document.write("Initial value: " + num + "<br>");

// num++;
// document.write("Value after increment is: " + num + "<br>");

// num = num + 7;
// document.write("Value after addition is: " + num + "<br>");

// num--;
// document.write("Value after decrement is: " + num + "<br>");

// var remainder = num % 3;
// document.write("The remainder is : " + remainder);

/*
4. Cost of one movie ticket is 600 PKR. Write a script to store 
ticket price in a variable & calculate the cost of buying 5 tickets 
to a movie. Example output:
*/
// var ticket = 600;
// var result = ticket * 5;

// document.write("Total cost to buy 5 tickets to a movie is " + result + "PKR" + "<br><br>");

// /*
// 5. Write a script to display multiplication table of any
// number in your browser. E.g
// */
// var num = 4;
// for(var i=1;i<=10;i++){
//     document.write(num + "  X  " + i + "  =  " + num*i + "<br>");
// }

/*
6. The Temperature Converter: It’s hot out! Let’s make a 
converter based on the steps here. 
a.  Store a Celsius temperature into a variable. 
b. Convert it to Fahrenheit & output “NNoC is NNoF”. 
c. Now store a Fahrenheit temperature into a variable. 
d. Convert it to Celsius & output “NNoF is NNoC”. 
Conversion Formulae: 
*/
// var celTemp = 25;
// var ferTemp = 45;

// var convert_cel_to_fer = (ferTemp - 32) * 5 / 9;
// var convert_fer_to_cel = (celTemp * 9) / 5 + 32;

// document.write(ferTemp + "°C is " + convert_cel_to_fer + "°F" + "<br><br>");
// document.write(celTemp + "°F is " + convert_fer_to_cel + "°C" + "<br>");

/*
7.  Write a program to implement checkout process of a 
shopping cart system for an e-commerce website. Store 
the following in variables

a. Price of item 1 
b. Price of item 2 
c. Ordered quantity of item 1 
d. Ordered Quantity of item 2 
e. Shipping charges 
Compute the total cost & show the receipt in your browser. 
*/
// var item_1_price = 23;
// var item_2_price = 12;
// var item_1_quantity = 2;
// var item_2_quantity = 4;

// var shipping_charges = 160;

// var item_1_cost = item_1_price * item_1_quantity;
// var item_2_cost = item_2_price * item_2_quantity;
// var total_cost = item_1_cost + item_2_cost + shipping_charges;

// document.write(
//   " Price of item 1 is $" +
//     item_1_price +
//     "<br>" +
//     " Quantity of item 1 is " +
//     item_1_quantity +
//     "<br>" +
//     "<br><br>" +
//     " Price of item 2 is $" +
//     item_2_price +
//     "<br>" +
//     " Quantity of item 2 is " +
//     item_2_quantity +
//     "<br><br>" +
//     "Shipping Charges is " +
//     shipping_charges +
//     "<br>" +
//     "Total cost of your order is $" +
//     total_cost
// );

/*
8. Store total marks & marks obtained by a student in 2 
variables. Compute the percentage & show the result in 
your browser
*/
// var obtained_marks = 550;
// var total_marks = 389;

// var percentage = (obtained_marks / total_marks) * 100;

// document.write(
//   "<br><br> Total marks: " +
//     total_marks +
//     "<br>" +
//     "Obtained Mraks " +
//     obtained_marks +
//     "<br>" +
//     "Percentage " +
//     percentage
// );

/*
9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
script to convert the total currency to Pakistani Rupees. 
Perform all calculations in a single expression. 
(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
and 1 Saudi Riyal = 28 Pakistani Rupee)
*/

// didn't get the concept

/*
10. Write a program to initialize a variable with some 
number and do arithmetic in following sequence: 
a. Add 5 
b. Multiply by 10 
c. Divide the result by 2 
Perform all calculations in a single expression 
*/

// var myExp = 4;
// var result = myExp + (5 * 10) / 2;
// document.write(result);

/*
11. The Age Calculator: Forgot how old someone is? 
Calculate it! 
a. Store the current year in a variable. 
b. Store their birth year in a variable. 
c. Calculate their 2 possible ages based on the stored 
values. 
Output them to the screen like so: “They are either NN or NN 
years old”.
*/
// var curr_year = 2024;
// var birth_year = 1966;

// var possible_value = curr_year - birth_year;

// document.write(possible_value);

/*
12. The Geometrizer: Calculate properties of a circle. 
a. Store a radius into a variable. 
b. Calculate the circumference based on the radius, and 
output “The circumference is NN”. 
(Hint : Circumference of a circle = 2 π r , π = 3.142) 
Calculate the area based on the radius, and output “The 
area is NN”. (Hint : Area of a circle = π r2, π = 3.142) 
*/
// var radius = 8;
// // var circumference = 3.142;
// var areaOfCircle = 2 * 3.142 * radius;

// document.write("The circumference is " + circumference + "<br><br>")

// document.write("The area is " + areaOfCircle);

// console.log(areaOfCircle);

/*
13. The Lifetime Supply Calculator: Ever wonder how 
much a “lifetime supply” of your favorite snack is? 
Wonder no more. 
a. Store your favorite snack into a variable 
b. Store your current age into a variable. 
c. Store a maximum age into a variable. 
d. Store an estimated amount per day (as a number). 
e. Calculate how many would you eat total for the rest of 
your life. 
Output the result to the screen like so: “You will need 
NNNN to last you until the ripe old age of NN”.
*/
// var fav_snak = "lays";
// var age = 19;
// var max_age = 45;
// var estimated_amount_per_day = 2;
// var result = (max_age - age) * estimated_amount_per_day;
// document.write(
//   "You will need " +
//     result +
//     " " +
//     fav_snak +
//     " to last my until the ripe old age of  " +
//     max_age
// );
