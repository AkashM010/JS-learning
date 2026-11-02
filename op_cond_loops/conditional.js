let number = 7;

/*
    Q1 - Positive, negative, or zero
    Given a number, print whether it is positive, negative, or zero.
*/
// if (number < 0 ) {
//     console.log("The number is negative");
// } else if ( number === 0) {
//     console.log("The number is Zero");
// } else {
//     console.log("The number is positive");
// }

/*
    Q2 - Even or odd
    Given a number, print "Even" if it is even; otherwise, print "Odd"
*/
// if (number % 2 == 0) {
//     console.log("The number is Even number");
// } else {
//     console.log("The number is Odd number");
// }

/*
    Q3 - Age check
    Given an age, print "You can vote" if the age is 18 or older; otherwise, print "You cannot vote yet"
*/
// let age = 19;
// if (age >= 18) {
//     console.log("You can vote");
// } else {
//     console.log("You cannot vote");
// }

/*
    Q4 - Temperature advice
    Given a temperature:

    - Above 30: print "It's hot"
    - From 15 to 30 inclusive: print "It's mild"
    - Below 15: print "It's cold"
*/
// const temp = 1;
// if (temp > 30) {
//     console.log("It's hot");
// } else if ((15 <= temp) && (temp <= 30)) {
//     console.log("It's mild");
// } else {
//     console.log("It's cold");
// }

/*
    Q5 - Grade checker
    Given a score from 0 to 100:

    90 or above: "A"
    80–89: "B"
    70–79: "C"
    Below 70: "Keep practicing"
*/
// let score = 75;
// if (score >= 90) {
//     console.log("A");
// } else if (score >= 80) {
//     console.log("B");
// } else if (score >= 70) {
//     console.log("C");
// } else {
//     console.log("Keep practicing");
// }

/*
    Q6 - Largest of two numbers
    Given two numbers, print which one is larger—or say they are equal
*/
// let num1 = -9, num2 = -9
// if (num1 > num2) {
//     console.log(num1)
// } else if (num1 < num2) {
//     console.log(num2);
// } else {
//     console.log("Numbers are equal")
// }

/*
    Q7 - Password check
    Given a password, print "Access granted" if it matches "js123"; otherwise, print "Incorrect password".
*/
// let password = "js123";
// if (password === "js123") {
//     console.log("Access granted");
// } else {
//     console.log("Incorrect password");
// }

/*
    Q8 - Weekend or weekday
    Given a day name, print "Weekend" for Saturday or Sunday; otherwise, print "Weekday".
*/
let day = "Sunday";
if ((day === "Saturday") || (day === "Sunday")) {
    console.log("Weekend");
} else {
    console.log("Weekday");
}