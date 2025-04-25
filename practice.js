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

console.log("----------------------************************************------------------------")