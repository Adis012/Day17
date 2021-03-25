const [a, b, ...arr] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(a, b); // 1, 2
console.log(arr); [3, 4, 5, 7]

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array1);

function remoweFirstTwo(list) {
    "use strict";
    // Only change code below this line

    const [a, b, ...array2] = list; // Change this line

    // Only change code above this line
    return array2;
}

console.log(remoweFirstTwo(array1));
module.exports = removeFirstTwo;