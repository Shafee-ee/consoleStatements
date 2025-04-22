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
    { name: "Couch", category: "furniture", price: 1200 },
    { name: "HalfLife2", category: "Games", price: 50 },
]

const totalDiscountTechProducts = megaProducts.filter(product => product.category === "tech")
    .map(product => ({ ...product, discount: product.price * 0.15 }))
    .reduce((totalDiscount, product) => { return totalDiscount + product.discount; }, 0)

console.log(totalDiscountTechProducts);

// products by category 

const productsByCategory = megaProducts.reduce(
    (acc, product) => {
        const category = product.category;

        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(product);
        return acc;
    }
    , {});

console.log(productsByCategory);


const productsCategory = megaProducts.reduce(
    (acc, product) => {
        const prodCategory = product.category;

        if (!acc[prodCategory]) {
            acc[prodCategory] = [];
        }
        acc[prodCategory].push(product);
        return acc;
    }
    , {})

console.log(productsCategory)

// interview question

const age = 10;
var person = {
    name: "shafee",
    age: 20,
    getAge: function () {
        return this.age;
    },
};

var person2 = { age: 24 };
person.getAge.call(person2);

console.log(person.getAge.call(person2))

// again

const prodCat = megaProducts.reduce(
    (acc, prod) => {
        const producat = prod.category;

        if (!acc[producat]) {
            acc[producat] = [];
        }

        acc[producat].push(prod);
        return acc;
    }
)

console.log(prodCat);

// group again using reduce

const summary = megaProducts.reduce(
    (acc, products) => {
        const category = products.category;

        if (!acc[category]) {
            acc[category] = {
                totalPrice: 0,
                products: []
            };
        }

        acc[category].totalPrice += products.price;
        acc[category].products.push(products.name);
        return acc;

    }, {}
)

console.log(summary);


// grouping using reduce

const studentGrades = [
    { name: "Alice", subject: "Math", grade: 85 },
    { name: "Bob", subject: "Math", grade: 92 },
    { name: "Charlie", subject: "Science", grade: 78 },
    { name: "Dave", subject: "Math", grade: 88 },
    { name: "Eve", subject: "Science", grade: 94 },
    { name: "Frank", subject: "History", grade: 85 },
    { name: "Grace", subject: "History", grade: 90 },
];
const studentSummary = studentGrades.reduce(
    (acc, students) => {
        const subject = students.subject
        if (!acc[subject]) {
            acc[subject] = {
                total: 0,
                count: 0,
                students: []

            };
        }

        acc[subject].total += students.grade;
        acc[subject].count += 1;
        acc[subject].students.push(students.name);

        return acc;
    }
    , {})

console.log(studentSummary);

/// reduce book inventory

const bookInventory = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", price: 15.99 },
    { title: "1984", author: "George Orwell", genre: "Dystopian", price: 12.5 },
    { title: "The Silmarillion", author: "J.R.R. Tolkien", genre: "Fantasy", price: 18.75 },
    { title: "Brave New World", author: "Aldous Huxley", genre: "Dystopian", price: 10.0 },
    { title: "The Name of the Wind", author: "Patrick Rothfuss", genre: "Fantasy", price: 14.99 },
    { title: "Sapiens", author: "Yuval Noah Harari", genre: "Non-Fiction", price: 22.0 },
    { title: "Educated", author: "Tara Westover", genre: "Non-Fiction", price: 19.0 },
];

const bookSummary = bookInventory.reduce(
    (acc, books) => {
        const genre = books.genre;

        if (!acc[genre]) {
            acc[genre] = {
                totalPrice: 0,
                titles: []
            }
        }

        acc[genre].totalPrice += books.price;
        acc[genre].titles.push(books.title);

        return acc;
    }
    , {})

console.log(bookSummary)

// manage Gym attendance

const gymMembers = [
    { name: "Alex", membership: "Gold", sessionsAttended: 12 },
    { name: "Beth", membership: "Silver", sessionsAttended: 8 },
    { name: "Charlie", membership: "Gold", sessionsAttended: 15 },
    { name: "Dana", membership: "Bronze", sessionsAttended: 5 },
    { name: "Eli", membership: "Silver", sessionsAttended: 10 },
    { name: "Fay", membership: "Gold", sessionsAttended: 7 },
    { name: "Gabe", membership: "Bronze", sessionsAttended: 9 }
];

const membershipSummary = gymMembers.reduce(
    (acc, members) => {
        const membership = members.membership;

        if (!acc[membership]) {
            acc[membership] = {
                totalSessions: 0,
                members: []
            }


        }
        acc[membership].totalSessions += members.sessionsAttended;
        acc[membership].members.push(members.name)
        return acc;

    }
    , {})

console.log(membershipSummary);

// group company employees
const employees = [
    { name: "Alice", department: "Engineering", team: "Frontend", salary: 90000 },
    { name: "Bob", department: "Engineering", team: "Backend", salary: 95000 },
    { name: "Charlie", department: "Engineering", team: "Frontend", salary: 87000 },
    { name: "Dana", department: "Design", team: "UX", salary: 80000 },
    { name: "Eli", department: "Design", team: "UI", salary: 85000 },
    { name: "Fay", department: "Engineering", team: "Backend", salary: 99000 },
    { name: "Gabe", department: "HR", team: "Recruiting", salary: 70000 }
];

const employeeSummary = employees.reduce(
    (acc, employee) => {
        const department = employee.department;
        const team = employee.team;

        if (!acc[department]) {
            acc[department] = {
                totalSalary: 0,
                teams: {}
            }
        }
        acc[department].totalSalary += employee.salary;
        if (!acc[department].teams[team]) {
            acc[department].teams[team] = [];
        }

        acc[department].teams[team].push(employee.name);
        return acc;

    }


    , {})

console.log(employeeSummary)

// team summary

const players = [
    { name: "Alice", team: "Red", score: 12 },
    { name: "Bob", team: "Blue", score: 17 },
    { name: "Charlie", team: "Red", score: 22 },
    { name: "Dana", team: "Blue", score: 19 },
    { name: "Eli", team: "Green", score: 15 },
    { name: "Fay", team: "Red", score: 9 },
    { name: "Gabe", team: "Green", score: 20 }
];

const playerSummary = players.reduce(
    (acc, player) => {

        const team = player.team;

        if (!acc[team] || player.score > acc[team].score) {
            acc[team] = {
                name: player.name,
                score: player.score,
            }


        }


        return acc;

    }
    , {})

console.log(playerSummary)

//Group another gruoup
const Rplayers = [
    { name: "Alice", team: "Red" },
    { name: "Bob", team: "Blue" },
    { name: "Charlie", team: "Red" },
    { name: "Dana", team: "Blue" },
    { name: "Eli", team: "Green" },
    { name: "Fay", team: "Red" },
    { name: "Gabe", team: "Green" }
];

const GroupRPlayers = Rplayers.reduce(


    (acc, player) => {

        const team = player.team;
        count = 0;
        if (!acc[team]) {
            acc[team] = 0;
        }

        acc[team] += 1;
        return acc;
    }
    , {})

console.log(GroupRPlayers);


//another group exercise
const salesData = [
    { name: "Alice", region: "North", sales: 1200 },
    { name: "Bob", region: "South", sales: 950 },
    { name: "Charlie", region: "North", sales: 1350 },
    { name: "Dana", region: "South", sales: 700 },
    { name: "Eli", region: "East", sales: 1600 },
    { name: "Fay", region: "East", sales: 900 },
    { name: "Gabe", region: "North", sales: 400 }
];

const groupSalesData = salesData.reduce(

    (acc, employee) => {
        const region = employee.region;


        if (employee.sales > 1000) {
            if (!acc[region]) {
                acc[region] = 0;
            }

            acc[region] += employee.sales;
        }

        return acc;
    }
    , {})

console.log(groupSalesData);

// another group



const RsalesData = [
    { name: "Alice", region: "North", sales: 1200 },
    { name: "Bob", region: "South", sales: 950 },
    { name: "Charlie", region: "North", sales: 1350 },
    { name: "Dana", region: "South", sales: 700 },
    { name: "Eli", region: "East", sales: 1600 },
    { name: "Fay", region: "East", sales: 900 },
    { name: "Gabe", region: "North", sales: 400 }
];

const groupRsalesData = RsalesData.reduce(
    (acc, employee) => {
        const region = employee.region;

        if (!acc[region]) {
            acc[region] = 0;
        }

        if (employee.sales > 1000) {
            acc[region] += 1;
        }

        return acc;
    }
    , {})

console.log("group sales data:", groupRsalesData);

//group mixed sales

const mixedSales = [
    { name: "Alice", region: "North", sales: 900 },
    { name: "Bob", region: "South", sales: 950 },
    { name: "Alice", region: "East", sales: 800 },
    { name: "Charlie", region: "North", sales: 1350 },
    { name: "Bob", region: "North", sales: 300 },
    { name: "Charlie", region: "South", sales: 700 },
    { name: "Dana", region: "South", sales: 400 },
]

const groupMixesSales = mixedSales.reduce(
    (acc, employee) => {
        const name = employee.name;

        if (!acc[name]) {
            acc[name] = 0;
        }
        acc[name] += employee.sales;

        return acc;
    }
    , {})

console.log("total sales per emplyee:", groupMixesSales);

// another grouping problem

const productSales = [
    { name: "Laptop", category: "Tech", unitsSold: 10 },
    { name: "Phone", category: "Tech", unitsSold: 15 },
    { name: "Desk", category: "Furniture", unitsSold: 5 },
    { name: "Chair", category: "Furniture", unitsSold: 12 },
    { name: "Pen", category: "Stationery", unitsSold: 50 },
    { name: "Notebook", category: "Stationery", unitsSold: 30 }
];


const groupProductSales = productSales.reduce(
    (acc, product) => {
        const category = product.category;

        if (!acc[category]) {
            acc[category] = 0;
        }

        acc[category] += product.unitsSold;
        return acc;
    }
    , {})

console.log("total units sold:", groupProductSales);

//another grouping problem

const reduceSales = [
    { name: "Alice", region: "North", product: "Laptop", unitsSold: 5 },
    { name: "Bob", region: "South", product: "Phone", unitsSold: 10 },
    { name: "Alice", region: "North", product: "Phone", unitsSold: 7 },
    { name: "Charlie", region: "South", product: "Laptop", unitsSold: 3 },
    { name: "Dana", region: "East", product: "Phone", unitsSold: 8 },
    { name: "Alice", region: "North", product: "Laptop", unitsSold: 2 },
];

const groupRsales = reduceSales.reduce(
    (acc, salesData) => {
        const region = salesData.region;
        const product = salesData.product;

        if (!acc[region]) {
            acc[region] = {};

        }

        if (!acc[region][product]) {
            acc[region][product] = 0;
        }

        acc[region][product] += salesData.unitsSold;

        return acc;
    }
    , {})

console.log(groupRsales);

//Inventory

const Rinventory = [
    { store: "A", category: "Tech", item: "Laptop", quantity: 5 },
    { store: "A", category: "Tech", item: "Tablet", quantity: 3 },
    { store: "A", category: "Furniture", item: "Chair", quantity: 10 },
    { store: "B", category: "Tech", item: "Laptop", quantity: 7 },
    { store: "B", category: "Furniture", item: "Table", quantity: 2 },
    { store: "C", category: "Stationery", item: "Pen", quantity: 50 },
    { store: "C", category: "Stationery", item: "Notebook", quantity: 30 },
    { store: "C", category: "Tech", item: "Laptop", quantity: 1 },
];


const groupRInventory = Rinventory.reduce(
    (acc, business) => {
        const store = business.store;
        const category = business.category;

        if (!acc[store]) {
            acc[store] = {};
        }

        if (!acc[store][category]) {
            acc[store][category] = 0;
        }

        acc[store][category] += business.quantity;

        return acc;
    }
    , {})

console.log("group business:", groupRInventory)

//just another grouping problem

const reduceSalesData = [
    { store: "A", product: "Laptop", sales: 500, quantity: 5 },
    { store: "A", product: "Tablet", sales: 300, quantity: 3 },
    { store: "A", product: "Chair", sales: 100, quantity: 10 },
    { store: "B", product: "Laptop", sales: 700, quantity: 7 },
    { store: "B", product: "Table", sales: 200, quantity: 2 },
    { store: "C", product: "Pen", sales: 50, quantity: 50 },
    { store: "C", product: "Notebook", sales: 30, quantity: 30 },
    { store: "C", product: "Laptop", sales: 1000, quantity: 1 },
];

const groupReduceSalesData = reduceSalesData.reduce(
    (acc, business) => {
        const { store, product, sales, quantity } = business;
        const totalSales = sales * quantity;

        if (!acc[store]) {
            acc[store] = [];
        }

        const existingProduct = acc[store].find(p => p.product === product)

        if (existingProduct) {
            existingProduct.totalSales += totalSales;
        } else {
            acc[store].push({ product, totalSales })
        }



        return acc;


    }

    , {})

console.log("store grouping: ", groupReduceSalesData)

// one more 
const reduceStudentGrades = [
    { name: "Alice", subject: "Math", grade: 85 },
    { name: "Bob", subject: "Math", grade: 90 },
    { name: "Alice", subject: "Science", grade: 92 },
    { name: "Charlie", subject: "Math", grade: 70 },
    { name: "Bob", subject: "Science", grade: 88 },
    { name: "Charlie", subject: "Science", grade: 75 },
];

const groupReduceStudentGrades = reduceStudentGrades.reduce((acc, school) => {
    const { name, subject, grade } = school;

    if (!acc[name]) {
        acc[name] = [];
    }

    acc[name].push({ subject, grade });

    return acc;
}, {})

console.log("school students scores:", reduceStudentGrades)

// another grouping

const classGrades = [
    { name: "Alice", subject: "English", grade: 78 },
    { name: "Bob", subject: "English", grade: 85 },
    { name: "Alice", subject: "History", grade: 90 },
    { name: "Charlie", subject: "English", grade: 82 },
    { name: "Bob", subject: "History", grade: 88 },
    { name: "Charlie", subject: "History", grade: 91 },
]

const groupClassGrades = classGrades.reduce((acc, school) => {
    const { name, subject, grade } = school;

    if (!acc[name]) {
        acc[name] = [];
    }

    acc[name].push({ subject: school.subject, grade: school.grade })

    return acc;

}, {})
console.log(groupClassGrades)

const avgGrade = classGrades.reduce((acc, school) => {
    const { name, subject, grade } = school;

    if (!acc[subject]) {
        acc[subject] = {
            total: 0,
            count: 0
        }
    }

    acc[subject].total += school.grade;
    acc[subject].count += 1
    return acc;


}, {})

for (let subject in avgGrade) {
    const { total, count } = avgGrade[subject];
    avgGrade[subject] = (total / count).toFixed(2)
}
console.log("avg score", avgGrade)

//
const examScores = [
    { name: "Alice", subject: "Math", score: 88 },
    { name: "Bob", subject: "Math", score: 92 },
    { name: "Charlie", subject: "Math", score: 85 },
    { name: "Alice", subject: "Science", score: 91 },
    { name: "Bob", subject: "Science", score: 89 },
    { name: "Charlie", subject: "Science", score: 95 },
];

const reduceExamScores = examScores.reduce((acc, school) => {
    const { name, subject, score } = school;

    if (!acc[subject]) {
        acc[subject] = {
            name: "",
            score: 0,
            subject: "",
        }
    }
    if (score > acc[subject].score) { acc[subject].name = name; acc[subject].score = score; acc[subject].subject = subject }

    return acc;

}, {})

console.log(reduceExamScores)

// closures

//examples

function outerFunction() {
    let outervariable = "I am outside";

    function innerFunction() {
        console.log(outervariable);
    }

    return innerFunction;
}

const closureExample = outerFunction();
closureExample();

// the inner function remembers variables from the outer function -even after the outer function has finsihed running

function outer() {
    let counter = 0;

    function increment() {
        counter++;
        const current = counter;
        console.log("Count is:", current);
    } return increment;
}

const countUp = outer();
countUp();
countUp();
countUp();
countUp();

//

// closure mantains state accross calls

function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter1 = createCounter();
console.log(counter1());
console.log(counter1());

const counter2 = createCounter();
console.log(counter2());


// 

function delayedGreeting(name) {
    return function () {

        console.log(`Hello, ${name}`)

    };
}

const greetJohn = delayedGreeting("Shafee");

greetJohn();

/// Rate limiter. 

function clickManager() {
    let clickCounter = 0;
    const limit = 5;

    function click() {

        if (clickCounter >= limit) {
            console.log("You have reached the limit")
        } else {
            clickCounter++;
            console.log(`click number:${clickCounter}, you have ${5 - clickCounter} remaining`)
        }

    }

    function reset() {
        clickCounter = 0;
        console.log("the click counter has been reset")
    }

    return { click, reset }
}


const clickDo = clickManager();

clickDo.click();
clickDo.click();
clickDo.click();
clickDo.click();
clickDo.click();
clickDo.click();
clickDo.reset();
clickDo.click();


// interview question 

const animals = [
    { species: "Feline", name: "Lion" },
    { species: "Avian", name: "pea cock" }
]

function printAnimals(i) {
    this.print = function () {
        console.log("#" + i + " " + this.species + ": " + this.name)
    };
    this.print();
}
printAnimals();