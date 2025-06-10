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

const array6 = [4, 5, 1, 5, 8, 1, 9, 10, 2, 0, 2, 0, 4];

function nonRepeatingNum6(arr) {
    const freq = {};
    const result = [];

    for (let currentNumber of arr) {
        freq[currentNumber] = (freq[currentNumber] || 0) + 1;
    }

    for (let currentNumber of arr) {
        if (freq[currentNumber] === 1) {
            result.push(Number(currentNumber))
        }

    }

    return result.length ? result : "All numbers repeat"

}

console.log(nonRepeatingNum6(array6))
console.log("********************** Find the First Recurring Number*************** problem 7")

const arr7 = [2, 5, 1, 3, 5, 2];

function firstRecurringNumber8(arr) {
    const seen = new Set();

    for (let currentNumber of arr) {
        if (seen.has(currentNumber)) {
            return currentNumber;
        }

        seen.add(currentNumber);
    }

    return "There are no recurring number"
}

console.log(firstRecurringNumber8(arr7));


console.log("Find the Length of the Longest Substring Without Repeating Characters******** problem 8")

const string8 = "abdefabcbb";

const findTheLongestSS = (str) => {
    let left = 0;
    let maxLength = 0;
    const seen = new Set();

    for (let right = 0; right < str.length; right++) {
        char = str[right];

        while (seen.has(char)) {
            seen.delete(str[left])
            left++;
        }

        seen.add(char);
        maxLength = Math.max(maxLength, right - left + 1)
    }

    return maxLength
}

console.log(findTheLongestSS(string8))


console.log("*********** problem 9")
const numbers9 = [12, 45, 23, 56, 77, 23, 12, 1, 3, 89];

const findThebiggestNumber = (arr) => {
    let biggest = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > biggest) {
            biggest = arr[i];
        }
    }
    return biggest;
}

console.log(findThebiggestNumber(numbers9));

console.log("******* Bubble sort ***** Problem 10")
const numbers10 = [7, 8, 9, 4, 5, 2, 7, 6, 1];

function bubbleSort(arr) {
    let wasSwapped;
    let pass = 0;

    do {

        wasSwapped = false;
        pass++;

        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                //swapping 2 Elements
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;

                wasSwapped = true;

            }

        }

        arr.forEach(num => {
            console.log("|".repeat(num).padEnd(10, '') + `${num}`)
        });

    } while (wasSwapped)

    return arr;

}

const sortedArr = bubbleSort(numbers10);
console.log(`\n Final Sorted array:`, sortedArr);


console.log("Bubble Sort visualization******** ");

const number10b = [4, 5, 6, 3, 2, 7, 9, 1, 8];

function bubbleSort10b(arr) {
    let wasSwapped;

    do {
        let wasSwapped = false;

        for (let i = 0; i < arr.length - 1; i++) {

            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                wasSwapped = true;

            }

        }

    } while (wasSwapped)
    return arr;

}

console.log(bubbleSort10b(number10b))