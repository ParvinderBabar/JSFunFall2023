/**
 * Create a function called "countNumberOfDigits".
 * Given an integer, it should return the number of digits in an integer.
 *
 * @param {int} num
 * @returns {int} the number of digits
 *
 * @example countNumberOfDigits(5000); // 4
 * You should use arrow syntax.
 */

// WRITE YOUR ANSWER BELOW THIS LINE

const countNumberOfDigits = (num) => {
    let n = num.toString();//convert num to string using toString method.
    return n.length;

};
console.log(countNumberOfDigits(6789));