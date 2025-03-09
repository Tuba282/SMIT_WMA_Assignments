// javascript practise sheet 31-34
// DATE METHODS 

/*
1. Write a program that displays current date and time in 
your browser. 
*/

var now = new Date()

// document.write(now)

/*
2. Write a program that alerts the current month in words.
For example December.
*/

var month_name = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var month = now.getMonth()

// alert(" current month : " + month_name[month])


/*
3. Write a program that alerts the first 3 letters of the current
day, for example if today is Sunday then alert will show
Sun.
*/

var day_names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// var day = now.getDay()

// alert(" Today is " + day_names[day].slice(0, 3))


/*
4. Write a program that displays a message “It’s Fun day” if
its Saturday or Sunday today.
*/

// var day_names = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// var day = now.getDay()
// var funDay = day_names[day]

// if (funDay.toLowerCase() === "sun" || funDay.toLowerCase() === "sat") {
//     alert("It's a Fun Day ...")
// } else {
//     alert("It's a Working Day ...")
// }


/*
5. Write a program that shows the message “First fifteen
days of the month” if the date is less than 16th of the month
else shows “Last days of the month”.
*/

// var day = now.getDate()
// if (day > 16) {
//     alert("Last days of the month")
// } else {
//     alert("First fifteen days of the month")
// }


/*
6. Write a program that determines the minutes since
midnight, Jan. 1, 1970 and assigns it to a variable that
hasn't been declared beforehand. Use any variable you like
to represent the Date object.
*/

// var now = new Date();
// var milli_seconds_Since1970 = now.getTime();
// var minutes_Since1970 = milli_seconds_Since1970 / (1000 * 60);
// alert("Minutes since midnight Jan 1, 1970: " + Math.floor(minutes_Since1970));



/*
7. Write a program that tests whether it's before noon and
alert “Its AM” else “its PM”.

*/
// var isNoon = now.getHours()
// console.log(isNoon);

// if (isNoon < 12) {
//     alert("Its AM")
// } else {
//     alert("Its PM")
// }

/*
8. Write a program that creates a Date object for the last day
of the last month of 2024 and assigns it to variable named
laterDate.
*/

// var laterDate = new Date('December 31, 2024')
// console.log(laterDate);

// 
/*
9. Create a date object of the starting date of this Ramadan
and alert the number of days past since 1st Ramadan?
Note: 1st Ramadan was on Tuesday, April 9, 2024.
*/

// var today = new Date('October 20,2024')
// var ramadan = new Date('March 10,2024')

// var today_in_milliSeconds = today.getTime()
// var ramadan_in_milliSeconds = ramadan.getTime()

// var difference = (today_in_milliSeconds - ramadan_in_milliSeconds) /( 1000 * 60 * 60 * 24)

// alert(difference + " days have passed since 1st Ramadan")


/*
10. Write a program that displays in your browser the
seconds that elapsed between the reference date and the
beginning of 2015
*/

// var begning_of_2024 = new Date('January 1,2024');
// var today = new Date('October 20,2024');

// var diff = today.getTime() - begning_of_2024.getTime()
// var in_seconds = diff / (1000 * 60)
// document.write('On the reference date ' + new Date() + ' ' + in_seconds + ' seconds have passed since 2024 begin.')


/*
11. Create a Date object for the current date and time.
Extract the hours, reset the date object an hour ahead and
finally display the date object in your browser.
*/

// var now = new Date();
// console.log("Current date " + now);
// now = new Date("October 20, 2024 13:25:00");
// console.log("1 hour ago " + now);

/*
12. Write a program that creates a date object and show the
date in an alert box that is reset to 100 years back?
*/
// var now = new Date('October 20, 2024 15:11:00');
// console.log("Current date " + now);
// var _1_centry_back = new Date('October 20, 1024 15:11:00');
// console.log("Current date " + _1_centry_back);


/*
3. Write a program to ask the user about his age. Calculate
and show his birth year in your browser.
*/
// var user_birth_year = +prompt("Enter your birth year ...")
// var current_year = new Date().getFullYear()

// var user_age = current_year - user_birth_year
// document.write("your age is " + user_age + "<br>");
// document.write(" your birth year is  " + user_birth_year);


/*
14. Write a program to generate your K-Electric bill in your
browser. All the amounts should be rounded off to 2
decimal places. Display the following fields:
a. Customer Name
b. Current Month
c. Number of units
d. Charges per unit
e. Net Amount Payable (within Due Date)
f. Late Payment Surcharge
g. Gross Amount Payable (after Due Date)
Where,

Net Amount Payable (within Due Date) = Number of units * Charges per unit
& Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge
*/

// var customer_name = prompt("Enter Your name ")
// var current_month = month_name[now.getMonth()]

// var no_of_unit = 286
// var per_unit = 16
// var late_fee_charges = 150

// var net_amount = no_of_unit * per_unit
// var gross_amount = net_amount + late_fee_charges


// document.write("Customer Name : " + customer_name + "<br>")
// document.write("Current Month : " + current_month + "<br>")
// document.write("Number of units : " + no_of_unit + "<br>")
// document.write("Charges per unit : " + per_unit + "<br>")
// document.write("Net Amount Payable (within Due Date) : " + net_amount + "<br>")
// document.write("Late Payment Surcharge : " + late_fee_charges + "<br>")
// document.write("Gross Amount Payable (after Due Date) : " + gross_amount + "<br>")