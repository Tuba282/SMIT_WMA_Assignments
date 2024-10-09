// javascript practise sheet 9-11
// ARRAY

/*
1.  Declare an empty array using JS literal notation to store 
student names in future.
*/

// var empty_array = [];
/*
2. Declare an empty array using JS object notation to store 
student names in future. 
*/

// var emptyArray = [];

/*
3. Declare and initialize a strings array.
*/

// var string_array = ["a", "b", "c", "d", "e"];

// 4.  Declare and initialize a numbers array.

var boolean_array = [2, 5, 6, 8, 9, 0];

// 5.  Declare and initialize a boolean array.

var number_array = [true, false, true, true, false];

// 6. Declare and initialize a mixed array.

var mixed_array = [
  "a",
  2,
  true,
  "b",
  5,
  false,
  "c",
  8,
  true,
  "d",
  9,
  false,
  "e",
];

/*
7. Declare and Initialize an array and store available 
education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
BS, BCOM, MS, M. Phil., PhD). Show the listed 
qualifications in your browser like:  

*/
// var qualifications = [" ", "SSC", "HSC", "BCS", "BS", "MS", "M. Phil.", "PhD "];
// for (var i = 1; i <= qualifications.length - 1; i++) {
//   document.write(i + `) ` + qualifications[i] + "  <br/>");
// }

/*
8. Write a program to store 3 student names in an array.Take 
another array to store score of these three students. 
Assume that total marks are 500 for each student, display 
the scores & percentages of students like:
*/

// var students = ["Ali", "Ahmed", "Sana"];
// var marks = [250, 370, 210];
// var percentages = ["75%", "65%", "45%"];
// var total_marks = 500;

// for (var i = 0; i < students.length; i++) {
//   document.write(
//     "Score of " +
//       students[i] +
//       " is " +
//       marks[i] +
//       " Percentage: " +
//       percentages[i] +
//       "<br/>"
//   );
// }

/*
9. Initialize an array with color names. Display the array 
elements in your browser. 
a. Ask the user what color he/she wants to add to the 
beginning & add that color to the beginning of the array. 
Display the updated array in your browser. 
b. Ask the user what color he/she wants to add to the end 
& add that color to the end of the array. Display the 
updated array in your browser. 
c. Add two more color to the beginning of the array. 
Display the updated array in your browser. 
d. Delete the first color in the array. Display the updated 
array in your browser. 
e. Delete the last color in the array. Display the updated 
array in your browser. 
f. Ask the user at which index he/she wants to add a color 
& color name. Then add the color to desired 
position/index. . Display the updated array in your 
browser. 
g. Ask the user at which index he/she wants to delete 
color(s) & how many colors he/she wants to delete. Then 
remove the same number of color(s) from user-defined 
position/index. . Display the updated array in your 
browser.
*/

var colors = ["red", "blue", "green", "yellow", "purple", "orange"];

for (var i = 0; i < colors.length; i++) {
  document.write(colors[i] + " ");
}

//// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.
// var add_color_start = prompt(
//   "Enter the color you want to add to the beginning"
// );

// colors.unshift(add_color_start);
//// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.

// var add_color_end = prompt(
//   "Enter the color you want to add to the End"
// );

// colors.unshift(add_color_end);

// for (var i = 0; i < colors.length; i++) {
//   document.write(colors[i] + " ");
// }

//// c. Add two more color to the beginning of the array. Display the updated array in your browser. Then  remove the same number of color(s) from user-defined  position/index. . Display the updated array in your  browser.

// var add_again1_color_start = prompt(
//   "Enter the color you want to add to the beginning"
// );
// var add_again2_color_start = prompt(
//   "Enter the color you want to add to the beginning"
// );

// colors.unshift(add_again1_color_start);
// colors.unshift(add_again2_color_start);

// document.write(colors)

//// d. Delete the first color in the array. Display the updated array in your browser.

// colors.shift()
// document.write(colors)

//// e. Delete the last color in the array. Display the updated array in your browser.

// colors.pop()
// document.write(colors)

//// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.

// var desired_index = +prompt("which index you want to add a color")
// var color_name = prompt("Enter the color name")
// colors.splice(desired_index,0,color_name)
// document.write('<br/><br/>'+colors)

//// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete.

// var desired_index = +prompt("which index you want to delete a color");
// var no_of_colors = +prompt(
//   "How many colors you want to delete (exclued --> means if you give 5 it will catch 4 )"
// );
// colors.splice(desired_index, no_of_colors);
// document.write("<br/><br/>" + colors);

/*
10. Write a program to store student scores in an array & 
sort the array in ascending order using Array’s sort 
method.
*/
// var scores = [90, 85, 95, 80, 75, 70];

// document.write("<br/><br/> Orignal Scores :" + scores);
// var student_scores = scores.sort();
// document.write("<br/><br/> After Sporting :" + student_scores);

/*
11. Write a program to initialize an array with city names. 
Copy 3 array elements from cities array to selectedCities 
array.
*/
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// var selectedCities = cities.slice(1, 4); // lahore Islamabad Quetta
// document.write("<br/><br/> Cities :" + cities);
// document.write("<br/><br/> Selected Cities :" + selectedCities);

/*
12.  Write a program to create a single string from the below mentioned array: 
var arr = [“This ”, “ is ”, “ my ”, “ cat”]; 
(Use array’s join method)
*/

// var mycat = ["This ", " is ", " my ", " cat"];
// var single_string = mycat.join("");
// document.write("<br/><br/>Single String :" + single_string);

/*
13.  Create a new array. Store values one by one in such a way 
that you can access the values in the order in which they 
were stored. (FIFO-First In First Out)
*/

var names = ["Ali", "Ahmed", "Usama", "Anas", "Bilal"];
var myvar = "Out :";
for (var i = 0; i < names.length; i++) {
  document.write("<br/>" + myvar);
  document.write("<br/>" + names[i] + "<br/>");
}

/*
14.  Create a new array. Store values one by one in such a way 
that you can access the values in reverse order. (Last In-
First Out)
*/
document.write(
  "<br/>----------------------------------------------------<br/>"
);

var names = ["Ali", "Ahmed", "Usama", "Anas", "Bilal"];
var myvar = "Out :";
for (var i = names.length - 1; i >= 0; i--) {
  document.write("<br/>" + myvar);
  document.write("<br/>" + names[i] + "<br/>");
}

/*
15.  Write a program to store phone manufacturers (Apple, 
Samsung, Motorola, Nokia, Sony & Haier) in an array. 
Display the following dropdown/select menu in your 
browser using document.write() method: 
*/
var phone_companies = [
  "Apple",
  "Samsung",
  "Motorola",
  "Nokia",
  "Sony",
  "Haier",
];

document.write(`<ul type="none" class="parent">Hover me`);

for (var i = 0; i < phone_companies.length; i++) {
  document.write(`<li>${phone_companies[i]}</li>`);
}
document.write(`</ul>`);
