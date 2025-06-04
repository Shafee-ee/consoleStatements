console.log("  Find the First Repeating number*************** problem 1")

const arr = [6, 5, 6, 2, 3, 5, 1, 2, 4];
function findDuplicates(arr) {
    const numSeen = new Set();

    for (let currentNumber of arr) {
        if (numSeen.has(currentNumber)) {
            return currentNumber;
        }
        numSeen.add(currentNumber);
    }
    return "there are no duplicate numbers"
}

console.log(findDuplicates(arr))
console.log("  Find the First Repeating number*************** problem 1b")

const dupeArry = [8, 2, 5, 1, 8, 2, 2, 2, 3, 4, 1, 2, 5]

function findDuplicates1b(arr) {
    const numberSeen = new Set();

    for (let currentNumber of arr) {
        if (numberSeen.has(currentNumber)) {
            return currentNumber;
        }

        numberSeen.add(currentNumber)
    }

    return "no duplicate numbers"
}

console.log(findDuplicates1b(dupeArry))

console.log("  Frequent number*************** problem 2")

const freqArr = [1, 3, 2, 1, 4, 1, 3, 3, 3];

const freq = {};

for (let num of freqArr) {
    if (freq[num]) {
        freq[num] += 1
    } else {
        freq[num] = 1
    }

}
console.log(freq)

console.log(" is pallindrom array ******* problem number3")

const pallindromeArr = [1, 2, 3, 2, 1];

// using reverse
function isPallinDromeArr(arr) {
    const reversed = [...arr].reverse();
    return arr.join() === reversed.join();
}

console.log(isPallinDromeArr(pallindromeArr))


console.log("********************using two pointer Technique****************")

function isPallinArr(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] !== arr[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

console.log(isPallinArr(pallindromeArr));

console.log("********** number not repeat ******")
//Input: [4, 5, 1, 2, 0, 4] and output:5

const FirstNumberNotRepeat = [4, 5, 1, 2, 0, 4];

function firstNumNotRepeat(arr) {

    const countMap = {};

    for (let num of arr) {
        if (countMap[arr] = (countMap[arr] || 0) + 1)
            // console.log(countMap)}


            for (let num of arr) {
                if (countMap[arr] === 1) {
                    return num;
                }
            }
        return "all numbers repeat"

    }
}
console.log(firstNumNotRepeat(FirstNumberNotRepeat));


//You're given an array containing n distinct numbers taken from the range 0 to n. That means one number from this range is missing from the array.
//Write a function to find and return the missing number.\

const Missingarr = [0, 3, 1, 2, 4]; // Range is 0 to 5 (6 numbers), but one is missing

function findMissing(arr) {
    const n = arr.length + 1;
    const expectedSum = (n * (n - 1)) / 2;

    const actualSum = arr.reduce((a, b) => a + b, 0);

    return expectedSum - actualSum;
}

console.log(findMissing(Missingarr));



console.log("********* findMissingXOR ********")
/// XOR solution
const MissXORarr = [3, 0, 1, 4, 2];

function findMissingXOR(arr) {
    let xor = 0;
    const n = arr.length + 1;

    for (let i = 0; i <= n - 1; i++) {
        xor ^= i;
    }

    for (let num of arr) {
        xor ^= num;
    }

    return xor;
}

console.log(findMissingXOR(MissXORarr));


console.log("******************** My method **************")
const findMissingAz = [1, 2, 3, 4, 5, 7, 8, 9, 10, 6, 11, 12];

function findMissingSA(arr) {
    const arrLength = arr.length + 1;
    const newArr = [];

    for (let i = 1; i <= arrLength; i++) {
        newArr.push(i)
    }

    for (let num of newArr) {
        if (!arr.includes(num)) return num;

    }

}

const op = findMissingSA(findMissingAz);

console.log(op)


console.log("********************** first non repeating number*************** problem 6")

const array6 = [4, 5, 1, 5, 1, 2, 0, 2, 0, 4];

function nonRepeat6(arr) {
    const freq = {};

    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }

    for (let num of arr) {
        if (freq[num] === 1) {
            return num;
        }
    }
    return "All numbers repeat"
}

console.log(nonRepeat6(array6));

console.log("********************** Find the First Recurring Number*************** problem 7")

const arr7 = [2, 5, 1, 2, 3, 5, 1];

function firstRecurring7(arr) {
    const seen = new Set();

    for (let num of arr) {
        if (seen.has(num)) {
            return num;
        }

        seen.add(num)
    }

    return "there are no recurring numbers"
}

console.log(firstRecurring7(arr7))


console.log("********************** Find the Length of the Longest Substring Without Repeating Characters*************** problem 8")

const string8 = "abcabcbb";

function findTheLongestSS(str) {
    const seen = new Set();

    for (let char of str) {
        seen.has(char);
    }

    return seen
}

console.log(findTheLongestSS(string8))