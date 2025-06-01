const arr = [5, 2, 3, 5, 1, 2, 4];
function findDuplicates(arr) {
    const numseen = new Set();

    for (let currentNumber of arr) {
        if (numseen.has(currentNumber)) {
            return currentNumber;
        }

        numseen.add(currentNumber)
    }

    return "there are no duplicate numbers"

}

console.log(findDuplicates(arr))

console.log("************ FIND THE FIRST DUPLICATE NUMBER****** ")

const dupeArry = [2, 5, 1, 2, 2, 2, 3, 4, 1, 2, 5]

function findFirstDuplicateNumbers(arr) {
    const numberSeen = new Set();

    for (let currentNumber of arr) {
        if (numberSeen.has(currentNumber)) {
            return currentNumber
        }
        numberSeen.add(currentNumber);
    }
    return "no duplicates found"
}

console.log(findFirstDuplicateNumbers(dupeArry))


console.log("******************* FREQUENT NUMBERs ****************");

const freqArr = [1, 3, 2, 1, 4, 1, 3, 3, 3];

const freqMap = {};

for (let currentNumber of freqArr) {
    if (freqMap[currentNumber]) {
        freqMap[currentNumber] += 1;
    } else {
        freqMap[currentNumber] = 1
    }

}

console.log(freqMap);

console.log("***** is pallindrom array *******")

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