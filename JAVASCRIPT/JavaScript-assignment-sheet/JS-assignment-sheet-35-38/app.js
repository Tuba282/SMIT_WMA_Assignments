// javascript practise sheet 35-38
// FUNCTION

/*
1. Write a function that displays current date & time in your
browser.
*/

// function date_time() {
//     var date = new Date();
//     document.write(date);
// }
// date_time()

/*
2. Write a function that takes first & last name and then it
greets the user using his full name.
*/

// function greet(first_name, last_name) {
//     document.write(first_name + " " + last_name)
// }
// greet("Bushra", "Jan")


/*
3. Write a function that adds two numbers (input by user)
and returns the sum of two numbers.
*/

// function add() {
//     var num1 = +prompt("Enter first number ...")
//     var num2 = +prompt("Enter second number ...")
//     return num1 + num2
// }
// var sum = add()
// document.write(sum);


/*
4. Calculator:
Write a function that takes three arguments num1, num2
& operator & compute the desired operation. Return and
show the desired result in your browser.
*/

// function Calculator(num1, num2, operator) {
//     if (operator === "+") {
//         return num1 + num2
//     } else if (operator === "-") {
//         return num1 - num2
//     } else if (operator === "*") {
//         return num1 * num2
//     } else if (operator === "/") {
//         return num1 / num2
//     } else if (operator === "%") {
//         return num1 % num2
//     } else {
//         return "Invalid Operator"
//     }

// }
// var num_1 = +prompt("Enter first number ...")
// var num_2 = +prompt("Enter second number ...")
// var opt = prompt("What operation you want to perform ( + - * / % )")
// var result = Calculator(num_1, num_2, opt)
// document.write(result)


/*
5. Write a function that squares its argument.
*/

// function making_square(num) {
//     return num * num
// }

// var result = making_square(5)
// document.write(result)


/*
6. Write a function that computes factorial of a number.
*/

// function factorial(num) {
//     var result = 1
//     for (var i = 1; i <= num; i++) {
//         result = result * i
//     }
//     return result

// }


// var output = factorial(4)
// document.write(output)


/*
7. Write a function that take start and end number as inputs
& display counting in your browser.
*/

// function counting(starts_with, ends_with) {
//     for (var i = starts_with; i <ends_with; i++) {
//         document.write(i + "<br>")
//     }
// }

// document.write(counting(5, 15))



/*
8. Write a nested function that computes hypotenuse of a
right angle triangle.
Hypotenuse2 = Base2 + Perpendicular2
Take base and perpendicular as inputs.
Outer function : calculateHypotenuse()
Inner function: calculateSquare()
*/

// function calculateHypotenuse() {
//     var base = +prompt("Enter Base value ...")
//     var perpendicular = +prompt("Enter Perpendicular value ...")

//     function calculateSquare(num) {

//         return num + num
//     }

//     var hypotenuseSquare = calculateSquare(base) * calculateSquare(perpendicular)
//     return hypotenuse = calculateSquare(hypotenuseSquare)
// }
// var result = calculateHypotenuse()
// document.write(result)


/*
9. Write a function that calculates the area of a rectangle.
     A = width * height
    Pass width and height in following manner:
    i. Arguments as value
    ii. Arguments as variables
*/
// var Area;
// function area(width, height) {
//     return width * height
// }
// Area = area(6, 16)
// document.write(Area)


/*
10. Write a JavaScript function that checks whether a passed
string is palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as
forward, e.g., madam.
*/

// function palindrome(str) {
//     var rev = ""
//     for (var i = str.length - 1; i >= 0; i--) {
//         rev = rev + str[i]
//     }
//     if (str == rev) {
//         document.write("palindrome ")
//     } else {
//         document.write("Not palindrome ")
//     }
// }
// var data = palindrome('madam')
// var data = palindrome('anina')
// var data = palindrome('tuba')

/*
11. Write a JavaScript function that accepts a string as a
parameter and converts the first letter of each word of the
string in upper case.
EXAMPLE STRING : 'the quick brown fox'
EXPECTED OUTPUT : 'The Quick Brown Fox'
*/

// function case_changing(str) {
//     var arr = str.split(" ")

//     for (var i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
//     }
//     return arr.join(" ")
// }
// var myString = case_changing('the quick brown fox')
// document.write(myString)



/*
12. Write a JavaScript function that accepts a string as a
parameter and find the longest word within the string.
EXAMPLE STRING : 'Web Development Tutorial'
EXPECTED OUTPUT : 'Development'
*/

// function findLongestWord(str) {
//     var words = str.split(' ');
//     var longestWord = '';

//     for (var i = 0; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }

//     return longestWord;
// }

// var str = "Web Development Tutorial";
// var str = "she is my best friend";
// var str = "Allah can handle everything";
// var longestWord = findLongestWord(str);
// document.write(longestWord); 


/*
13. Write a JavaScript function that accepts two arguments, a
string and a letter and the function will count the number of
occurrences of the specified letter within the string.
Sample arguments : 'JSResourceS.com', 'o'
*/
// var count = 0
// function Count(str, letter) {
//     for (var i = 0; i <= str.length; i++) {
//         if (str[i] === letter) {
//             count++
//         }
//     }
//     return "There are " + count + " number of " + letter + " in " + str
// }

// var result = Count('JSResourceS.com', 'o')
// document.write(result + "<br>")
// var result = Count('Web Development Tutorial', 'e')
// document.write(result)


/*
14. The Geometrizer
Create 2 functions that calculate properties of a circle, using
the definitions here.
Create a function called calcCircumference:
• Pass the radius to the function.
• Calculate the circumference based on the radius, and output
"The circumference is NN".
Create a function called calcArea:
• Pass the radius to the function.
• Calculate the area based on the radius, and output "The area
is NN".

Circumference of circle    =     2πr
Area of circle       =     πr2
*/

// function calcCircumference(radius) {
//     return 2 * 3.142 * radius
// }
// function calcArea(radius) {
//     return 3.142 * radius * radius
// }
// calcArea(6)

// document.write("Circumference of circle is : " + calcCircumference(5).toFixed(2) + "<br><br>")
// document.write("Area of circle is : " + calcArea(6).toFixed(2) + "<br>")