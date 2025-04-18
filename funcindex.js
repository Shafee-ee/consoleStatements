// slice
const arr1 = ["a", "b", "c", "d", "e", "f", "g", "h"];
const sliced = arr1.slice(1, 4);

const result1 = arr1.slice(2, 3).concat(arr1.slice(4, 5))
console.log("slice:", sliced);
console.log("slice2:", result1);

console.log("----**************************************************************---")
// /slice(start, end) returns a shallow copy of a portion of an array. It does not change the original array.

//filter
const arr2 = ["a", "b", "c", "d", "e", "f", "g", "h"];

const result = arr2.filter((val, idx) => idx === 2 || idx === 4);
console.log("filter:", result);

const result2 = arr2.filter((val, idx) => idx === 1 || idx === 3)
console.log("filter 2:", result2)
//Returns a new array with only the elements that pass a test (the function you give it).

//val is the value ("a", "b", etc.)
//idx is the index (0, 1, 2, ...)
//In this case, we kept values where the index is 2 or 4.


// filter cool stuff

//1) filter only even numbers
const filNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filEvens = filNum.filter(num => num % 2 === 0);
console.log("filter even numbers:", filEvens);

//2) Remove falsy values

const fMessy = [0, "messy", null, "world", undefined, 42];
const fCleaned = fMessy.filter(Boolean);// keep falsy elements fMessy.filter(val=>!val)
console.log("filter truthy values:", fCleaned);

//3) filter only strings

const filterData = [0, "cat", null, "dog", "", undefined, "mouse", false, "elephant"];
const fCleanData = filterData.filter(val => typeof val === "string" && val.length > 0);
console.log("filter only strings", fCleanData)

//4) filter strings that starts with "a"

const filterWords = ["apple", "pomogranite", "avacado", "berry", "orange"];
const startsWithA = filterWords.filter(val => val.startsWith("a"));
console.log("filter strings startting with letter:", startsWithA);

//5) filter objects by property

const filterUsers = [
    { name: "Shafee", online: true },
    { name: "Azeem", online: false },
    { name: "ghani", online: true },
]

const filterOnlineUsers = filterUsers.filter(user => user.online === true);
console.log(filterOnlineUsers);

//6) filter with Age

const filterUserInfo = [
    { name: "shafee", age: 32 },
    { name: "Arkam", age: 24 },
    { name: "Anjum", age: 37 },
    { name: "binthu", age: 36 },
    { name: "Hafsa", age: 61 }
]

const filterUsersByAge = filterUserInfo.filter(user => user.age >= 35);
console.log("filter user by Age:", filterUsersByAge);


console.log("----**************************************************************---");


//.map() goes through each element, applies a function to it , returns a new array with transformed values. It does not modify the original array.

//1) square numbers
const mapNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
const squaredMapNums = mapNumbers.map(num => num * num);
console.log("Map each number to give its squared values:", squaredMapNums);

//2) Uppercase Names

const mapNames = ["Shafee", "Azeem", "abdul", "ghani"];
const uppercaseNames = mapNames.map(name => name.toUpperCase());
console.log("map and get Uppercase for each name:", uppercaseNames);

const getNamesLength = mapNames.map(name => ({ name: name, length: name.length }));
console.log("map each name and get name and name length:", getNamesLength);


//3 use filter and map together

const filtermapUsers = [
    { name: "shafee", age: 32, online: true },
    { name: "Azeem", age: 12, online: false },
    { name: "abdul", age: 25, online: true },
    { name: "ghani", age: 5, online: false },
    { name: "Arkam", age: 24, online: true }
]

const filterOnlineUsersOnly = filtermapUsers.filter(user => user.online === true);
// const mapUserNameAge = filterOnlineUsersOnly.map(user => user.name + "(" + user.age + ")");// using concatenation
const mapUserNameAge = filterOnlineUsersOnly.map(user => `${user.name} (${user.age})`) // using template literal
console.log("Map user information:", mapUserNameAge);

//4) user filter and map together again

const filterMapBooks = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
    { title: "Harry Potter", author: "J.K. Rowling", year: 1997 },
    { title: "Clean Code", author: "Robert C. Martin", year: 2008 },
    { title: "The Pragmatic Programmer", author: "Andy Hunt", year: 1999 },
    { title: "JavaScript: The Good Parts", author: "Douglas Crockford", year: 2008 }
];

const filterBookByYear = filterMapBooks.filter(val => val.year >= 2000);

const mapBookAuthor = filterBookByYear.map(book => `${book.title} by ${book.author} (${book.year})`);

console.log("map boooks to get author:", mapBookAuthor);

// 5) map discount problems

const mapProducts = [
    { name: "laptop", price: 700 },
    { name: "Smart Phone", price: 1500 },
    { name: "Tablet", price: 850 },
    { name: "laptop", price: 700 },
    { name: "laptop", price: 700 },
    { name: "laptop", price: 700 }
]

const discountedPrice = mapProducts.map(product => ({ name: product.name, original: product.price, discounted: product.price - (product.price * 0.2) }));
console.log("map each element to give discounted price:", discountedPrice);

console.log("----************************************************************--------");

// For Each

const foreachUsers = [
    { name: "Shafee", age: 32, online: true },
    { name: "Azeem", age: 29, online: false },
    { name: "Arkam", age: 24, online: true },
    { name: "Anju", age: 37, online: false },
    { name: "farah", age: 24, online: true },
    { name: "Ghani", age: 24, online: true }
]

console.log("For EACH")
foreachUsers.forEach(user => console.log(`user detail: \n${user.name} is ${user.age} years old`));

let olderUsers = [];
foreachUsers.forEach(user => {
    if (user.age > 31) {
        olderUsers.push(user);
    }
}
)

console.log(olderUsers);

let totalAge = 0;
foreachUsers.forEach(
    user => {
        totalAge += user.age;
    }
)

console.log(`total age of all users:${totalAge}`);

let totalUserOver30 = 0;

foreachUsers.forEach(
    user => {
        if (user.age > 25) {
            totalUserOver30++;
        }
    }
)

console.log(`Users Over 25:${totalUserOver30}`);

let allUsersOnline = [];
foreachUsers.forEach(
    user => {
        if (user.online) {
            allUsersOnline.push(user.name);
        }
    }
)

const arrresult = ` ${allUsersOnline.join(",")}`;
console.log(`Total users Online:${arrresult}`);

// total users online and offline

let onlineCount = 0;
let offlineCount = 0;

foreachUsers.forEach(
    user => {
        if (user.online) {
            onlineCount++;
        } else {
            offlineCount++;
        }
    }
)

console.log(`online:${onlineCount}`)
console.log(`offline:${offlineCount}`)


// .reduce() method
const reduceUsers = [
    { name: "shafee", age: 32 },
    { name: "arkam", age: 24 },
    { name: "anjum", age: 38 },
    { name: "binthu", age: 36 },
]

const reduceTotalAge = reduceUsers.reduce((total, user) => {
    return total + user.age
}, 0);

console.log(reduceTotalAge);

// calculate the total price of all products

const reduceTotalPrice = mapProducts.reduce((total, product) => {
    return total + product.price;
}, 0)

console.log(reduceTotalPrice);


//calculate the discounted price
const reduceProducts = [
    { name: "laptop", price: 700 },
    { name: "Smart Phone", price: 1500 },
    { name: "Tablet", price: 850 },
    { name: "macbook", price: 3300 },
    { name: "PC", price: 1700 },
    { name: "harddrive", price: 200 }
]

const reducediscountedPrice = reduceProducts.map(
    product => ({ name: product.name, original_price: product.price, discount: product.price - (product.price * 0.1) }))


console.log(reducediscountedPrice);

const totalDiscount = reducediscountedPrice.reduce((total, product) => {
    return total + product.discount;
}, 0)

console.log(totalDiscount);

// sum of all the discount price. 

const expensive_products = reduceProducts
    .filter(product => product.price > 1000)
    .reduce((totalDiscount, product) => {
        return totalDiscount + product.price * 0.1;
    }, 0);

console.log(expensive_products)

// total discount on selected products

const megaProducts = [
    { name: "laptop", category: "tech", price: 1500 },
    { name: "smartphone", category: "tech", price: 1200 },
    { name: "Tablet", category: "tech", price: 900 },
    { name: "chair", category: "furniture", price: 200 },
    { name: "Desk", category: "furniture", price: 450 },
    { name: "Monitor", category: "tech", price: 600 },
    { name: "Couch", category: "furniture", price: 1200 }
]

const totalDiscountTechProducts = megaProducts.filter(product => product.category === "tech")
    .map(product => ({ ...product, discount: product.price * 0.15 }))
    .reduce((totalDiscount, product) => {
        return totalDiscount + product.discount;
    })

console.log(totalDiscountTechProducts)