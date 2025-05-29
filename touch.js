const nums = [2, 5, 8, 9, 18, 90, 5, 10];

// map numbers in a array
const mapNumber = nums.map((num) => (num * 4));
console.log(mapNumber);


// filter
const filter = nums.filter(num => num % 2 == '0');
console.log(filter);


//reduce 
const Reduced = nums.reduce((acc, curr) => acc * curr, 1);
console.log(Reduced); 
