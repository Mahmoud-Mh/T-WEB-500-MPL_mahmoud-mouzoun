// task04.js
//Write a fizzBuzz function that:
//✓ takes a number as parameter ;
//✓ prints all the numbers from 1 to this number ;
//✓ is exported and contained in a task04.js file ;
//✓ complies with the following requirements:
//1. print “Fizz” instead of the number if it is divisible by 3 ;
//2. print “Buzz” instead of the number if it is divisible by 5 and not by 3 ;
//3. print “FizzBuzz” instead of the number if it divisible by both 5 and 3.

export function fizzBuzz(num) {
    let result = [];

    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }

    console.log(result.join(', '));
}
