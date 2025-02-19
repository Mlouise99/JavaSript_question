function arraySum(arr){
    return arr.reduce((total, current) => total + current, 0);
}
console.log('sum of arry:', arraySum ([1,3,10,60,78]));

function division(num1,num2){
    if(num2 !== 0){
        return num1/num2;
    }
    else{
        console.log('can not divide zero ');
    }
}
console.log(division(10,2));

function maxArrayValue(arr) {
    return Math.max(...arr);
}
console.log("Max Array Value:", maxArrayValue([1, 2, 3, 4, 5]));

function averageArray(arr){
    const sum= arraySum(arr);
    return sum/arr.length;
}
console.log('average',averageArray([3,6,7,9]) );

function isPalindrome(str) {
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}
console.log("Is 'area' a palindrome?", isPalindrome("square"));


function multiply(number) {
    if (number === 0) return 0; 
    const digits = Math.abs(number).toString().length;
    const multiplier = Math.pow(5, digits); 
    return number * multiplier; 
  }
  
  console.log(multiply(3));   // Output: 15
  console.log(multiply(10));  // Output: 250
  console.log(multiply(200)); // Output: 25000
  console.log(multiply(0));   // Output: 0
  console.log(multiply(-3));  // Output: -15