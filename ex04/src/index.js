const user = { name: 'John Doe', age: 34, email: 'johnDoe@paragon.com'};
const name = user.name; // name = 'John Doe'
const age = user. age; // age = 34
const email = user.email // email = 'johnDoe@paragon.com'

const BAKING_TEMPERATURES = {
    cake: { low: 180, high: 250},
    bread: { low: 150, high: 220},
    pie: { low: 200, high: 230}
};

function main(baking) {
    // Only change code below this line

    const lowBread = BAKING_TEMPERATURES.bread.low;
    const highBread = BAKING_TEMPERATURES.bread.high;

    return { lowBread, highBread };

    // Only change code above this line 
}

console.log(main(BAKING_TEMPERATURES ));
module.exports = main;