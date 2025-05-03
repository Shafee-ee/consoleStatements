// forEach

const arr = [10, 20, 30, 40]

arr.forEach(item => {
    console.log("ForEach arr:", item)
});

// map

const mapArr = [34, 67, 89, 9090];
const mappedArr = mapArr.map(item => item * 2);
console.log("Mapped Array:", mappedArr)

//filter

const filterArr = [56, 8, 90, 17, 65];
const filteredArr = filterArr.filter(item => item > 20);
console.log("filtered Array:", filteredArr)

//reduce
const reduceArr = [56, 8, 90, 17, 65];
const reducedArr = reduceArr.reduce((acc, item) => acc + item, 0)
console.log("reduced arr:", reducedArr)

//some and every

const someArr = [56, 8, 90, 17, 65];
const bigNumber = someArr.some(item => item > 100);
console.log("Some numbers", bigNumber)

const numberGreaterThan5 = someArr.every(item => item > 5);
console.log("are all given numbers greater than 5:", numberGreaterThan5);

//find and findIndex

const findArr = [56, 8, 90, 17, 65];

const findNumber = findArr.find(item => item > 80);
console.log("first number greater than 80:", findNumber);
const findIndexOfNumber = findArr.findIndex(item => item < 10);
console.log("find the index of the first number lesser than 10:", findIndexOfNumber);

console.log("-------------------****************************************---------------------")
// includes() and indexOf

const fruits = ['apple', 'banana', 'orange', 'grapes', 'banana'];
const fruitPresent = fruits.includes("banana");

const fruitPresent2 = fruits.includes("mango");
console.log("Is your banana present in the array? ", fruitPresent);
console.log("Is your mango present in the array? ", fruitPresent2);


const fruitIndex = fruits.indexOf("banana");
console.log("Index of banana:", fruitIndex);
const fruitIndex2 = fruits.indexOf("pineapple");
console.log("Index of pineapple:", fruitIndex2)

console.log("-------------------------*****************************************----------------------");

const sliceNums = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const sliced1 = sliceNums.slice(6);//starts from index 2 to end
console.log("Sliced from index:", sliced1);

const sliced2 = sliceNums.slice(5, 8);
console.log("sliced from index 1 o 4", sliced2);

console.log("-------------------------*****************************************----------------------");


const exStr = "aaaaannnnnbddddddccccc";
const countObj = {};
const repeatedChars = [];

for (let char of exStr) {
    countObj[char] = (countObj[char] || 0) + 1;
}
console.log("Tally:", countObj)

for (let char in countObj) {
    if (countObj[char] > 5) {
        repeatedChars.push(char);
    }
}

console.log("Repeated Characters:", repeatedChars);

console.log("-----------------------------********************************************----------------------")

const testStr = "mmmeeewwwaaaaaqqqqqpppnnnzzzz";

const countObjii = {};
const repeatedChar = [];

for (let char of testStr) {
    countObjii[char] = (countObjii[char] || 0) + 1;
}

for (let char in countObjii) {
    if (countObjii[char] > 1) {
        repeatedChar.push(char)
    }
}

console.log(repeatedChar);
console.log(countObjii);

console.log("------------------------------*************************************-------------------------------");

const testStr2 = "aabbccddeeffgghhiiijjjkkllmmnnooppqqrrssttuuvvwwxxyyzz";

const countObj2 = {};
const repeatchar = [];
for (let char of testStr2) {
    countObj2[char] = (countObj2[char] || 0) + 1;
}
console.log(countObj2);
for (let char in countObj) {
    if (countObj2[char] > 1) {
        repeatchar.push(char)
    }
}

console.log("character Count:", countObj2);

console.log("repeated characters:", repeatchar);

console.log("----------------------************************************------------------------");


const testStr3 = "zzzxxxyyywwwvvvuuutttrrqqqpppooonnmmlllkkkjjjiiihhhggg";

const obj3 = {};
const repeated = [];

for (let char of testStr3) {
    obj3[char] = (obj3[char] || 0) + 1;
}

console.log(obj3);

for (let char in obj3) {
    if (obj3[char] > 2) {
        repeated.push(char)
    }
}

console.log("repeated letters(more than thrice):", repeated)

/// sort

const numbers = ["banana", "apple", "cherry", "date"];
const sortedNumbers = numbers.sort();
const sortedNumbers2 = numbers.reverse();

console.log(sortedNumbers2);

//pallindrome

const Pstr = "banana";

const reversedPstr = Pstr.split("").reverse().join("");
console.log("Given string:", Pstr);
console.log("String reversed:", reversedPstr);

if (reversedPstr == Pstr) {
    console.log(`the given string :  ${Pstr} is a pallidrome`);
} else {
    console.log(`The given string : ${Pstr} is not a pallindrome`);
}

///

const reverseStr = (str) => {
    return str.split("").reverse().join("");
}

console.log(reverseStr("Hello"));

console.log(reverseStr("---------------------------**********************************************------------------------"));

// 

function reversedString(str) {
    let arr = str.split('');
    let reversedStr = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        reversedStr.push(arr[i])
    }

    return reverseStr;
}

console.log(reversedString("madam1"));

//
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

console.log(isPalindrome("A man,a plan,a canal:panama"));

console.log("--------------------***********************************************-------------------------")

function isPalindromefunc(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    let left = 0;
    let right = cleaned.length - 1;

    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true
}

const output = isPalindromefunc("Racecar");
console.log(output);

// // setInterval
// let count = 0;


// const interval = setInterval(() => {

//     count++;
//     console.log('Count:', count);

//     if (count === 5) {
//         clearInterval(interval);
//         console.log('stopped at 5')
//     }
// });


// // digital clock

// setInterval(() => {
//     const now = new Date();
//     const hours = String(now.getHours()).padStart(2, '0');
//     const minutes = String(now.getMinutes()).padStart(2, '0');
//     const seconds = String(now.getSeconds()).padStart(2, '0');

//     console.clear();
//     console.log(`🕛 current time:" ${hours}: ${minutes}: ${seconds}`);
// }, 1000)

// //Countdown

// let seconds = 10;

// const Rinterval = setInterval(() => {
//     console.clear();


//     if (seconds <= 0) {

//         clearInterval(Rinterval);
//         console.log("Time is UP!")
//         return;
//     }

//     console.log("Time remaining:", seconds);
//     seconds--;


// }, 1000)

// /// text based progress bar

// let total = 20;
// let remaining = total;

// const barInterval = setInterval(() => {
//     console.clear();
//     const completedBars = total - remaining;
//     const bar = '#'.repeat(completedBars) + '-'.repeat(remaining);

//     console.log(`[${bar}]${remaining}s remaining`);
//     remaining--;


//     if (remaining < 0) {
//         clearInterval(barInterval);
//         console.log("Progress completed");
//     }
// }, 500);


// debouncing 


console.log("---------------------------********************************---------------------")
let timeoutId;

function debounce(fn, delay) {
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay)
    };
}

//simulate a search function
function dsearch(query) {
    console.log('Searching for:', query)
}

//wrap it in debounce
const debouncedSearch = debounce(dsearch, 1000);

const dinputs = ['h', 'he', 'hel', 'hell', 'hello'];

let i = 0;
const inputInterval = setInterval(() => {
    if (i >= dinputs.length) {
        clearInterval(inputInterval)
        return;
    }

    console.log('User Typed:', dinputs[i]);
    debouncedSearch(dinputs[i]);
    i++;

}, 300);

