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
const findIndexOfNumber = findArr.findIndex(item => item == 65);
console.log("find the index of the first number lesser than 10:", findIndexOfNumber);