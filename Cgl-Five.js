// 2634 Apply transform over each element in array

// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.
// Example 1:
// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one. 
// Example 2:

// Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
// Output: [1,3,5]
// Explanation: The function increases each value by the index it resides in.
// Example 3:

// Input: arr = [10,20,30], fn = function constant() { return 42; }
// Output: [42,42,42]
// Explanation: The function always returns 42
 
//taken n number
function plusOne(arr){
    let returnIncrementArray = [];
    let returnIndexplusArray = [];
    let returInput = [];
    for(i = 0 ; i < arr.length; i++)
    {
        returnIncrementArray[returnIncrementArray.length] = arr[i] + 1;
        returnIndexplusArray[i] = arr[i] + i;
        returInput = arr[i];
    }

    return {returnIncrementArray, returnIndexplusArray, returInput};
}

var map = function(arr , fn) {
    //calling global function inside function
    return fn(arr);
}
let items = [1,2,3];
let newArray = map(items , plusOne);
console.log(newArray)
// OutPut//
// {
//     "returnIncrementArray": [
//         2,
//         3,
//         4
//     ],
//     "returnIndexplusArray": [
//         1,
//         3,
//         5
//     ],
//     "returInput": 3
// }