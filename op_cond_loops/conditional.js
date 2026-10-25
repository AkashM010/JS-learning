let number = 7;

/*
    Q1 - Positive, negative, or zero
    Given a number, print whether it is positive, negative, or zero.
*/
// if (number < 0 ) {
//     console.log("The number is negative");
// } else if ( number == 0) {
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
const temp = 1;
if (temp > 30) {
    console.log("It's hot");
} else if ((15 <= temp) && (temp <= 30)) {
    console.log("It's mild");
} else {
    console.log("It's cold");
}