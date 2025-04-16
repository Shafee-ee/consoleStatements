//console.log statement interview questions set
console.log("1:", typeof NaN);//Number
console.log("2:", [] + []);//"Empty string"
console.log("3:", [1, 2] + [3, 4]);// converts to string and adds them. //[1,2]+[3,4]= "1,23,4"
console.log("4:", "5" - 2);// 3 cause "-" coverts it to 
console.log("5:", 0 == false)// 0 is falsy value is JS
console.log("6:", [0] == 0);//false cause arrays are a truthy value
console.log("7:", true + false)// JS coerces booleans to numbers when used with arithmetics
console.log("9:", [] + ![])// an empty array is a truthy value and !truthy is false. true ==false
console.log("10:", typeof (function () { }));
console.log("11:", typeof class { });
console.log("12:", 2 + '2');// string concatenation. JS converts number to string. 
console.log("13", "5" + 5);
console.log("14:", 3 + + "3")// +"3" here + is a unary operator and converts the string to number and 3 + 3 =6
console.log("15:", 0.1 + 0.2 == 0.3)// in JS foating point arithmetic can lead to precision issues due to how the numbers are represented in binary (IEEE 754 format) results in 0.300000000004 instead of exactly 0.3. causing the comparison to 0.1+0.2==0.3
console.log("16:", [] == [])// [] is considered an object. in JS when comparing objects(including arrays), it checks if they refer to the same memory location. Even though both [] arrays are empty, they are 2 seperate instances, they are stored in a different memory locations
console.log("17:", {} = [])// when object {} is followed by the + operator, it is treated as a code block and since the code block is empty {}+[] is interpreted as +[], which results in 0. therefore, the final result is [] because the result of the expression is coerced into stringm and when that string is concatenated with an empty array[], the result is an empty array.
console.log("18:", "10" - "5")//Actually, the - operator converts them to numbers for arithmetic operations. So, "10" - "5" becomes 10 - 5, which equals 5.
console.log("19:", "5" * "3")//Actually, the * operator converts them to numbers for arithmetic operations. So, "5" - "3" becomes 5 - 3, which equals 15.
console.log("20:", 1 + "1" - 1)//The key takeaway is that the - operator forces the string to a number, but the + operator results in string concatenation before anything else happens.
console.log("21:", "10" / "2")//It converts the strings to numbers for the operation. So, "10" / "2" is interpreted as 10 / 2, which equals 5
console.log("22:", "3" > 2)//The > operator forces the string "3" to be converted into a number. So, it becomes 3 > 2, and since 3 is indeed greater than 2, the result is true.
console.log("23:", "2" < "12")//since both are string. it is compared lexicogrpahlly and It first compares the "2" in "2" with the "1" in "12". Since "1" is less than "2", it actually considers "12" as greater than "2". result is false because "2" is not less than "12"
console.log("24:", null == undefined) // null == undefined is a special case in JavaScript. When using the loose equality operator (==), null and undefined are only equal to each other, and not to anything else.
console.log("25:", null + 1)//null gets coerced to 0 in numeric operations.
console.log("26", undefined + 1); //undefined gets coerced to NaN (Not a Number) in arithmetic operations.
console.log("27:", [] == false);// [] is first converted to a primitive using .toString(), which gives an empty string "".Then "" is coerced to 0 when compared with false.
console.log("28:", !!null);// null is a false value. ! will become truth and another ! will become false
console.log("29:", !![]); // [] is truthy value in JS and doube negation makes it true again.
console.log("30:", [] == ![]); // truthy value [] is not equal to negation of ![]
console.log("31:", {} + []);//({})+[] and then +[] becomes 0 and {} becomes [object object] and +[] is a blank string
console.log("32:", [] == 0)//[] is coerced to "", which is then coerced to 0, so 0 == 0 results in true.
console.log("33:", 1 + '1' - 1); //1 + '1' results in "11", and "11" - 1 coerces the string to a number, so 11 - 1 equals 10.
console.log("34:", typeof null)//typeof null returns "object" due to a historical bug in JavaScript's implementation.
console.log("35:", [] == false)// [] == false is true because [] is coerced to "" (empty string), and "" is coerced to 0, making 0 == 0
console.log("36:", {} == {});//{} create new object references, and in JavaScript, objects are only equal if they reference the exact same memory.
console.log("37:", [1, 2, 3] == "1,2,3");//Array gets coerced to string via .toString(), so [1,2,3] == "1,2,3" → "1,2,3" == "1,2,3" → true
console.log("38:", parseInt("10abc")); //parseInt("10abc") returns 10 because parseInt parses from the start until it hits a non-digit character.
console.log("39:", parseInt("abc10")); //parseInt("abc10") returns NaN because it can't find a valid number at the start of the string.
console.log("40:", 0 || "default");//0 is falsy, so || returns the second value: "default".
console.log("41:", "value" && 0); //Because with &&, JavaScript returns the first falsy value it encounters — "value" is truthy, so it moves to 0, which is falsy, and returns 0.
console.log("42:", Boolean([]));//[] is truthy, so Boolean([]) returns true.
console.log("43:", Boolean({}));//{} is a non-null object, which is always truthy in JavaScript, so Boolean({}) returns true.
console.log("44:", !!0);//Yup, !!0 is false — because 0 is falsy, and double negation (!!) converts it to boolean.
console.log("45:", 1 + "2" - "3")//1 + "2" results in "12", then "12" - "3" coerces the string to a number and subtracts, giving 9.
console.log("46:", 1 == [1]); //1 == [1] is true because [1] is coerced to "1", and "1" == 1 is true due to type conversion.
console.log("47:", NaN == NaN)//Correct! NaN == NaN is false because NaN is not equal to any value, including itself.
console.log("48:", isNaN(NaN));//NaN is not a number














