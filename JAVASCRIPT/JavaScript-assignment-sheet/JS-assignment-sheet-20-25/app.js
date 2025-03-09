// javascript practise sheet 20-25
// STRING METHODS



/*
1.  Write a program that takes two user inputs for first and
last name using prompt and merge them in a new variable
titled fullName. Greet the user using his full name.
*/
// var firstName = prompt("Enter First Name ...")
// var lastName = prompt("Enter Last Name ...")
// var fullName = firstName + ' ' + lastName

// document.write('Greetings ' + fullName)





/*
2. Write a program to take a user input about his favorite
mobile phone model. Find and display the length of user
input in your browser
*/
// var useFavPhone = prompt("Enter Your Favourite phone  model...")
// document.write('Your favourite phone model is ' + useFavPhone+ '<br> Length of String is ' +useFavPhone.length)





/*
3. Write a program to find the index of letter “n” in the word
“Pakistani” and display the result in your browser .
*/
// var word = 'Pakistani'
// var index = word.indexOf('n')
// document.write('String : ' + word + "<br/> index of n :" + index)





/*
4. Write a program to find the last index of letter “l” in the
word “Hello World” and display the result in your browser.
*/

// var word = 'Hello World'
// var index = word.lastIndexOf('l')
// document.write('String : ' + word + "<br/> index of l :" + index)

/*
5. Write a program to find the character at 3rd index in the
word “Pakistani” and display the result in your browser.
*/
// var finCharat_3 = 'Pakistani'
// var index = finCharat_3[3]
// document.write('String : ' + finCharat_3 + "<br/> index of 3  : " + index)


/*
6. Repeat Q1 using string concat() method.

1.  Write a program that takes two user inputs for first and
last name using prompt and merge them in a new variable
titled fullName. Greet the user using his full name.
*/

// var firstName = prompt("Enter First Name ...")
// var lastName = prompt("Enter Last Name ...")
// var fullName = firstName.concat(lastName)

// document.write('Greetings ' + fullName)

/*
7. Write a program to replace the “Hyder” to “Islam” in the
word “Hyderabad” and display the result in your browser.
*/
// var word = 'Hyderabad'
// var replacement = word.replace("Hyder", "Islam")

// document.write('Word was : ' + word + "<br/> After replacement : " + replacement)


/*
8.  Write a program to replace all occurrences of “and” in the
string with “&” and display the result in your browser.
var message = “Ali and Sami are best friends. They play cricket and
football together.”;
*/
// var message = 'Ali and Sami are best friends. They play cricket and football together.';
// var replacement = message.replace(/and/g, "&")

// document.write('Message was : ' + message + "<br/> After replacement : " + replacement)




/*
9. Write a program that converts a string “472” to a number
472. Display the values & types in your browser.
*/

// var str = "472"
// document.write('String : ' + str + "<br/> Type : " + typeof str + "<br/>")
// var num = Number(str)
// document.write('Number : ' + num + "<br/> Type : " + typeof num + "<br/>")

/*
10. Write a program that takes user input. Convert and
show the input in capital letters.
*/
// var userInput = prompt("Enter Anything ....")

// document.write('User Input : ' + userInput + "<br/>Upper case : " + userInput.toUpperCase())




/*
11. Write a program that takes user input. Convert and
show the input in title case.
*/

// var userInput = prompt("Enter Anything ....")

// document.write('User Input : ' + userInput + "<br/>Upper case : " + userInput.toLowerCase())




/*
12. Write a program that converts the variable num to
string.
var num = 35.36 ;
Remove the dot to display “3536” display in your browser.
*/

// var num = 35.36;
// // num*100
// document.write('Number : ' + num + "<br/>Result : " + (num*100).toString())



/*
13. Write a program to take user input and store username
in a variable. If the username contains any special symbol
among [@ . , !], prompt the user to enter a valid username.
For character codes of [@ .
Note:
ASCII code of ! is 33
ASCII code of , is 44
ASCII code of . is 46
ASCII code of @ is 64
*/

// var user_input = prompt("Enter your name ...")
// var flag = false
// for (var i = 0; i < user_input.length; i++) {
//     if (
//         user_input[i] === String.fromCharCode(33) ||
//         user_input[i] === String.fromCharCode(44) ||
//         user_input[i] === String.fromCharCode(46) ||
//         user_input[i] === String.fromCharCode(64)) {
//         flag = true
//         alert("DO NOT USE ANY SPECIAL CHARACTERS LIKE : @ ! ")
//     }
// }

// if (flag === false) {
//     document.write(user_input)
// }






/*
14. You have an array
A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an
array. After searching, prompt the user whether the given
item is found in the list or not.
Note: Perform case insensitive search. Whether the user
enters cookie, Cookie, COOKIE or coOkIE, program
should inform about its availability. Example:

*/

// var items = ['cake', 'apple pie', 'cookie', 'chips', 'patties']

// var userInput = prompt("Enter your favourite item ...")
// var flag = false
// for (var i = 0; i < items.length; i++) {
//     if (userInput.toLowerCase() === items[i]) {
//         flag = true
//         document.write("Yaayy we found your favourite " + userInput + ' at index ' + i)
//     }
// }
// if (flag === false) {
//     document.write("Sorry  we couldn't find your favourite " + userInput)
// }


/*
15. Write a program to take password as an input from
user. The password must qualify these requirements:
a. It should contain alphabets and numbers
b. It should not start with a number
c. It must at least 6 characters long
If the password does not meet above requirements,
prompt the user to enter a valid password.
For character codes of a-z, A-Z & 0-9, refer to ASCII
table at the end of this document.
*/

var user_pswd = prompt('Enter your valid password ...')
var flag = false

if (user_pswd >= String.fromCharCode(97) ||
    user_pswd <= String.fromCharCode(122) ||
    user_pswd >= String.fromCharCode(48) ||
    user_pswd <= String.fromCharCode(57) ||
    user_pswd >= String.fromCharCode(65) ||
    user_pswd <= String.fromCharCode(90)) {

    var num = Number(user_pswd.charAt(0))
    if (num === NaN) {
        // if (user_pswd.length > 6) {
            flag = true
            document.write('Your password is ' + user_pswd)
        // }
    }
}

if (flag === false) {
    alert('Please enter a valid password')
}


/*
16. Write a program to convert the following string to an
array using string split method.
var university = “University of Karachi”;
Display the elements of array in your browser.
*/
// var str = "University of Karachi"
// for (var i = 0; i < str.length; i++) {
//     document.write(str[i] + "<br/>")
// }

/*
17. Write a program to display the last character of a user
input.

*/

// var user_input = prompt("Enter any word ...")

// document.write('Last character of ' + user_input + ' is ' + user_input.charAt(user_input.length - 1))




/*
18. You have a string “The quick brown fox jumps over the
lazy dog”. Write a program to count number of
occurrences of word “the” in given string
*/

// var str = 'The quick brown fox jumps over the lazy dog';
// var score = 0;
// var lowerStr = str.toLowerCase();

// for (var i = 0; i <= lowerStr.length; i++) {
//     if (lowerStr.slice(i, i + 3) === 'the') {
//         score++;
//     }
// }

// document.write(str + "<br>");
// document.write('There are ' + score + ' occurrences of "the" in the above line.');
