console.log("  Find the First Repeating number*************** problem 1")

const arr = [6, 5, 6, 2, 3, 5, 1, 2, 4];

function findTheFirstRepeatingNum() {
    const seen = new Set();
    for (let currentNumber of arr) {
        if (seen.has(currentNumber)) {
            return currentNumber
        }
        seen.add(currentNumber);
    }
}

console.log(findTheFirstRepeatingNum(arr));


//1st problem ends



console.log("  Find the First Repeating number*************** problem 1b")

const dupeArry = [8, 2, 5, 1, 8, 2, 2, 2, 3, 4, 1, 2, 5]
function findDuplicates1b() {
    const seen = new Set();
    for (let currentNumber of dupeArry) {
        if (seen.has(currentNumber)) {
            return currentNumber;
        }

        seen.add(currentNumber);
    }

    return 'there are no repeating numbers';

}
console.log(findDuplicates1b(dupeArry))


//2nd problem ends


console.log("  Frequent number*************** problem 2")

const freqArr = [1, 3, 2, 1, 4, 1, 3, 3, 3];

const freq = {};

for (let currentNumber of freqArr) {
    if (freq[currentNumber]) {
        freq[currentNumber] += 1;
    } else {
        freq[currentNumber] = 1;
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


const testArray = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000) + 1);



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

    } while (wasSwapped);

    return arr;

}

console.log(bubbleSort10b(testArray))

console.log("********** Insertion Sort ****** problem 11");

function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }

    return arr;
}


console.time("Insertion Sort Time");
const sorted = insertionSort(testArray);
console.timeEnd("Insertion Sort Time");
console.log("Sorted Array:", sorted);

console.log("** find the first non-repeating character****** problem 12");

const string12 = "aabbccddeeffg";

function findFirstNonRepeatLetter(str) {
    const freq = {};

    for (let currentLetter of str) {
        freq[currentLetter] = (freq[currentLetter] || 0) + 1;
        console.log(freq)

    }

    for (let currentLetter of str) {
        if (freq[currentLetter] === 1) {
            return currentLetter;
        }
    }

    return "There are no Non repeating numbers"

}

console.log(findFirstNonRepeatLetter(string12));

console.log("**** Group characters that appear more than once in a string ***** problem 13")

const string13 = "programming";

function GroupCharRepeats(str) {
    const freq = {};
    let OutputArray13 = []

    for (let currentLetter of str) {
        freq[currentLetter] = (freq[currentLetter] || 0) + 1;
    }

    for (let currentLetter of str) {
        if (freq[currentLetter] > 1 && !OutputArray13.includes(currentLetter)) {
            OutputArray13.push(currentLetter);
        }
    }
    return OutputArray13.length > 0 ? OutputArray13 : "None of the letters repeat"
}

console.log(GroupCharRepeats(string13))

console.log("**** find the missing number in a sequence... problem*******14");

const array14 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14];

function findMissingNum14(arr) {
    const n = Math.max(...arr);//arr[arr.length-1]

    expectedSum = (n * (n + 1)) / 2;

    actualSum = arr.reduce((acc, current) => acc + current, 0);

    return expectedSum - actualSum;
}

console.log(findMissingNum14(array14));


console.log("**** problem 14 b")

function findMissinNumber14b(arr) {
    const arrayLength = arr.length + 1;
    const newArray = [];

    for (let i = 1; i <= arrayLength; i++) {
        newArray.push(i);
    }

    for (let num of newArray) {
        if (!arr.includes(num)) {
            return num;
        }
    }

}
console.log(findMissinNumber14b(array14))

console.log("** find the missing numbers in a sequence *** problem 15")

const array15 = [1, 2, 4, 5, 7, 9, 12, 17, 171];

function findAllMissingNumber(arr) {
    const numberSeen = new Set(arr);
    const missingNumbers = [];
    const presentNumbers = [];

    const max = Math.max(...arr);

    const result = Array.from({ length: max }, (_, i) => i + 1).reduce(
        (acc, num) => {
            if (numberSeen.has(num)) {
                acc.presentNumbers.push(num);
            } else {
                acc.missingNumbers.push(num)
            }
            return acc;
        },
        { presentNumbers: [], missingNumbers: [] }
    );

    return result;
}
console.log(findAllMissingNumber(array15))


/// Array.from () exercises. 

console.log("Exercise 1 Array from*******")
const arrE1 = Array.from({ length: 10 }, (_, i) => i + 1).map(num => num * 2).reduce((acc, curr) => acc + curr, 0);
console.log(arrE1);

console.log("***AreAnaGrams**** problem 15");

function areAnagrams(a, b) {

    if (a.length !== b.length) return false;
    const freqA = {};
    const freqB = {};

    for (let char of a) {
        freqA[char] = (freqA[char] || 0) + 1;
    }

    for (let char of b) {
        freqB[char] = (freqB[char] || 0) + 1;
    }

    for (let key in freqA) {
        if (freqA[key] !== freqB[key]) return false;
    }

    return true;

}
const aWord = "silent";
const bWord = "listen";
console.log(areAnagrams(aWord, bWord));

console.log("**** Problem 15b");

const areAnagramsb = (a, b) => {
    a.length === b.length && a.split('').sort('').join('') === b.split('').join('');
}

console.log(areAnagrams(aWord, bWord));

console.log("AreAnagram***sentences******** 15 b")



console.log(areAnagrams("School master", "The classroom")); // true
console.log(areAnagrams("Hello World", "dlroW olleH"));     // true
console.log(areAnagrams("Test case", "Case test!"));
function areAnagramsSentence(a, b) {

    // step1: normalize both strings remove spaces, convert to LowerCase // fillet the fish
    const cleanA = a.replace(/\s+/g, '').toLowerCase();
    const cleanB = b.replace(/\s+/g, '').toLowerCase();

    // step2: quick length check after cleaning // check how much meat you got lengthwises
    if (cleanA.length !== cleanB.length) return false;

    //step3: sort and compare 
    const sortedA = cleanA.split('').sort().join('');
    const sortedB = cleanB.split('').sort().join('');

    return sortedA === sortedB;

}

console.log(" is first non repeating character ******* problem number 16")

const str15 = "aaabebcddb";
strObj = {};

for (let currentLetter of str15) {
    if (strObj[currentLetter]) {
        strObj[currentLetter] += 1
    } else {
        strObj[currentLetter] = 1;
    }
}


for (let currentLetter of str15) {
    if (strObj[currentLetter] === 1) {
        console.log("first Non repeating character:", currentLetter);
        break;
    }
}

console.log(strObj)

console.log(" reverse a string ******* problem number 17")


function reverseDaString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i]
    }
    return reversedStr;
}

console.log(reverseDaString("Hello"))


console.log(" is first non repeating character ******* problem number 18");

function firstNotRepeatchar(str) {
    const freq = {};

    for (let currentLetter of str) {
        if (freq[currentLetter]) {
            freq[currentLetter] += 1;
        } else {
            freq[currentLetter] = 1;
        }

    }

    for (let currentLetter of str) {
        if (freq[currentLetter] === 1) {
            return currentLetter;
        }
    }

}

console.log(firstNotRepeatchar("aabbccddeefg"))

console.log("Longest Substring Without Repeating Characters problem:19 \n");

const string19 = "abcdefgabcbb";
const Substring19 = (str) => {
    let start = 0;
    let end = 0;
    let seen = new Set();
    let maxLength = 0;

    while (end < str.length) {
        if (!seen.has(str[end])) {
            seen.add(str[end]);
            maxLength = Math.max(maxLength, end - start + 1);
            end++;
        } else {
            seen.delete(str[start]);
            start++;
        }
    }
    return maxLength;


}



console.log(Substring19(string19))

console.log("Container with most water problem 20 \n");

const height20 = [1, 8, 6, 2, 5, 4, 8, 3, 7];

const waterContainer = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    let max = 0;
    let bestPair = [left, right];

    while (left < right) {
        let height = Math.min(arr[left], arr[right]);
        let width = right - left;
        let area = height * width;

        if (area > max) {
            max = area;
            bestPair = [left, right]
        }

        if (arr[left] < arr[right]) {
            left++;
        } else {
            right--;
        }
    }

    return {
        maxArea: max,
        indexes: bestPair,
        heights: [arr[bestPair[0]], arr[bestPair[1]]]
    }

}

const result = waterContainer(height20);

console.log(`Max Area:${result.maxArea} \n Indexes:${result.bestPair} \n heights:${result.heights}`)


console.log("Merge Intervals problem 21");

const intervals = [[15, 18], [1, 3], [2, 6], [8, 10]];

const mergeIntervals = (arr) => {
    arr.sort((a, b) => a[0] - b[0]);
    const merged = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        const [start, end] = arr[i];//current ith value assigned to start and end 
        const lastMerged = merged[merged.length - 1]//assign lastMerged to merged[merged.length-1(prev value in the 2d array)]

        if (start <= lastMerged[1]) {
            lastMerged[1] = Math.max(lastMerged[1], end);
        } else {
            merged.push([start, end])
        }
    }

    return merged;
}

console.log(mergeIntervals(intervals))

console.log("problem 22")