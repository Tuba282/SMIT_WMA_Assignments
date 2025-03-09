// javascript practise sheet 38-40
// | FUNCTIONS| SWITCH | WHILE.. DO-WHILE |


/*
1.  Write a custom function power ( a, b ), to calculate the value of
a raised to b.
*/


// function power(a, b) {
//     return a ** b
// }

// document.write(console.log(power(5, 3)))
// document.write(console.log(power(4, 2)))

/*
2. Any year is entered through the keyboard. Write a function to
determine whether the year is a leap year or not.
Leap years ..., 2012, 2016, 2020, ...
*/

/*
To check if a year is a leap year:

1.It is divisible by 4

2.If it is divisible by 100, then it must also be divisible by 400
*/


// function leapYear(year) {
//     switch (true) {
//         case (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0):
//             return "Yes " + year + " is a leap year.";
//         default:
//             return "No " + year + " is not a leap year.";
//     }
// }

// console.log(leapYear(2022));
// console.log(leapYear(2024));




/*
3. If the lengths of the sides of a triangle are denoted by a, b, and
c, then area of triangle is given by
area = S(S − a)(S − b)(S − c) where, S = ( a + b + c ) / 2
*/

// function area(a, b, c) {
//     function side(a, b, c) {
//         return (a + b + c) / 2
//     }
//     var Sides = side(a, b, c)
//     var areaTriangle = (Sides * (Sides - a) * (Sides - b) * (Sides - c))
//     return areaTriangle
// }
// console.log(area(3, 4, 5))


/*
4. Write a function that receives marks received by a student in 3
subjects and returns the average and percentage of these marks. there should be 3 functions one is the mainFunction
and other are for average and percentage. Call those functions
from mainFunction and display result in mainFunction.
*/

// function mainFunc(eng, urdu, math) {
//     function avg(eng, urdu, math) {
//         return (eng + urdu + math) / 3
//     }
//     function per(eng, urdu, math) {
//         var sum = eng + urdu + math;
//         var percentage = (sum / 300) * 100;
//         return percentage;
//     }
//     return ` Average of marks is ${avg(eng, urdu, math).toFixed(2)} and Percentage you get is ${per(eng, urdu, math).toFixed(2)}`

// }
// document.write(mainFunc(75, 35, 50))
// document.write(mainFunc(25, 41, 72))



/*
5. You have learned the function indexOf. Code your own custom
function that will perform the same functionality. You can code
for single character as of now.
*/
// first make correct lgic in forloop
/*
for (var i = 0; i < str.length; i++) {
        if (str[i] === findIndex) {
            return 'indexOf ' + findIndex + " is on " + i;
        }
    }
    return -1;
*/

// function indexOf(str, findIndex) {

//     var i = 0
//     while (i < str.length) {

//         switch (str[i]) {
//             case findIndex:
//                 return ('indexOf ' + findIndex + " is on " + i);
//             default:
//                 break;

//         }
//         i++
//     }
//     return -1;
// }

// console.log(indexOf('hey there I am using Whatsapp', 'W'));
// console.log(indexOf('she is very sweet', 's'));//ye srif pehla wala check kar raha hai
// console.log(indexOf('she is very sweet', 'x'));



/*
6. Write a function to delete all vowels from a sentence. Assume
that the sentence is not more than 25 characters long.
*/

// function del_vol(myStr) {
//     return myStr.replace(/[aeiou]/gi, '');
// }

// console.log(del_vol('Hello I am using Whatsapp'))


/*
7. Write a function with switch statement to count the number of
occurrences of any two vowels in succession in a line of text.
For example, in the sentence
“Pleases read this application and give me gratuity”
Such occurrences are ea, ea, ui.
*/

// function countVowelPairs(text) {
//     // 'aeiou';
//     var pairs = [];
//     for (let i = 0; i < text.length - 1; i++) {
//         var ocur = text[i] + text[i + 1];

//         switch (ocur) {
//             case 'aa': case 'ae': case 'ai': case 'ao': case 'au':
//             case 'ea': case 'ee': case 'ei': case 'eo': case 'eu':
//             case 'ia': case 'ie': case 'ii': case 'io': case 'iu':
//             case 'oa': case 'oe': case 'oi': case 'oo': case 'ou':
//             case 'ua': case 'ue': case 'ui': case 'uo': case 'uu':
//                 pairs.push(ocur)
//                 break;
//             default:
//                 break;
//         }
//     }

//     return pairs;
// }

// // var vowelPairs = countVowelPairs(("Lorem Ipsum is a type of placeholder text commonly used in the graphic, print, and publishing industries.").toLowerCase());
// var vowelPairs = countVowelPairs(("Pleases read this application and give me gratuity").toLowerCase());
// console.log(`Such occurrences are ${vowelPairs.join(', ')}.`);


/*
8. The distance between two cities (in km.) is input through the
keyboard. Write four functions to convert and print this
distance in meters, feet, inches and centimeters.
*/


/*
Kilometers to Meters: 1 kilometer = 1,000 meters

Kilometers to Centimeters: 1 kilometer = 100,000 centimeters

Kilometers to Feet: 1 kilometer ≈ 3,280.84 feet

Kilometers to Inches: 1 kilometer ≈ 39,370.1 inches
*/

function kiloMeter(KM) {
    function km_into_m(KM) {
        return KM * 1000
    }
    function km_into_cm(KM) {
        return KM * 100000
    }
    function km_into_feet(KM) {
        return (KM * 3280.84).toFixed(1)
    }
    function km_into_inches(KM) {
        return (KM * 39370.1).toFixed(1)
    }

    return KM + " is qual to <br/>" +
        km_into_m(KM) + " in meters <br/>" +
        km_into_cm(KM) + " in centimeters <br/>" +
        km_into_feet(KM) + " in feet <br/>" +
        km_into_inches(KM) + " in inches <br/><br/>"

}
var KM = +prompt("Enter Kilometers")
document.write(kiloMeter(KM))



/*
9. Write a program to calculate overtime pay of employees.
Overtime is paid at the rate of Rs. 12.00 per hour for every hour
worked above 40 hours. Assume that employees do not work
for fractional part of an hour.
*/

// function overtimePay(hour) {
//     var perhourPay = 12.00
//     var workedhour = 40
//     if (hour) {
//         return "your today wage + overtime is  $" + perhourPay * workedhour * hour + "<br/><br/>"
//     } else {
//         return "your today wage is  $" + perhourPay * workedhour + "<br/><br/>"
//     }
// }
// var take_hours = +prompt('Enter over time hours ...')
// document.write(overtimePay(take_hours));//with overtime
// document.write(overtimePay());//without overtime


/*
10. A cashier has currency notes of denominations 10, 50 and
100. If the amount to be withdrawn is input through the
keyboard in hundreds, find the total number of currency notes
of each denomination the cashier will have to give to the
withdrawer.
*/

// function currency(amount) {
//     const hundreds = Math.floor(amount / 100);
//     amount %= 100;

//     const fifties = Math.floor(amount / 50);
//     amount %= 50;

//     const tens = Math.floor(amount / 10);

//     return ` ${hundreds} hundred rupee note, ${fifties} fifty rupee note , ${tens} ten rupee note`;
// }

// console.log(currency(470));
