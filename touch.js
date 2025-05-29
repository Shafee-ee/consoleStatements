const nums = [2, 5, 8, 9, 18, 90, 5, 10];
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// map numbers in a array
const mapNumber = nums.map((num) => (num * 4));
console.log(mapNumber);


// filter
const filter = nums.filter(num => num % 2 == '0');
console.log(filter);


//reduce 
const Reduced = nums.reduce((acc, curr) => acc * curr, 1);
console.log(Reduced);


// reduce to check how many times a word has repeated.

const reduceFruits = fruits.reduce((acc, fruit) => {
    if (acc[fruit]) {
        acc[fruit]++;
    } else {
        acc[fruit] = 1;
    }

    return acc;
}, {});

console.log(reduceFruits);

// reduce again

const reducedfruits = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {}
)

console.log(reducedfruits);

// console.log(nums);

const oddeve = nums.reduce((acc, num) => {
    if (num % 2 === 0) {
        acc.even.push(num)
    } else {
        acc.odd.push(num)
    }

    return acc;

}, { odd: [], even: [] })

console.log(oddeve);


const people = [
    { name: 'shafee', age: 21 },
    { name: 'Azeem', age: 32 },
    { name: 'abdul', age: 21 },
    { name: 'ghani', age: 20 },
    { name: 'Mohammad', age: 24 },
    { name: 'Arkam', age: 25 },
];

const filterPeople = people.reduce((acc, person) => {
    const age = person.age;

    if (!acc[age]) {
        acc[age] = [];
    }

    acc[age].push(person.name);
    return acc;
}, {})

console.log(filterPeople);


const cart = [
    { name: 'Shirt', price: 800, quantity: 2 },
    { name: 'Jeans', price: 1500, quantity: 1 },
    { name: 'Shoes', price: 2000, quantity: 1 },
    { name: 'Socks', price: 200, quantity: 4 }
];


const cartTotal = cart.reduce((acc, items) => {

    const price = items.price;
    const quantity = items.quantity;

    return acc + price * quantity;


}, 0)

console.log(cartTotal)