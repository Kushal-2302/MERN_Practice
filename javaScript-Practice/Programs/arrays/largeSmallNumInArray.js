//? Find largest and smallest number 

//! Using Math.max() and Math.min()
const findLargest = (arr) => Math.max(...arr);
const findSmallest = (arr) => Math.min(...arr);
const number = [10, 25, 3, 99,42];
// console.log(`Larset number is : `, findLargest(number));
// console.log(`Smallest number is : `, findSmallest(number));


//! Using reduce()
const findLargest1 = (arr) => arr.reduce((max, num) => num > max ? num : max, arr[0]);
const findSmallest1 = (arr) => arr.reduce((min, num) => num < min ? num : min, arr[0]);
const number1 = [10, 25, 3, 99,42];
// console.log(`Larset number is : `, findLargest(number1));
// console.log(`Smallest number is : `, findSmallest(number1));


//! Using a Loop (Manual Control)
const findLargest2 = (arr) => {
    let max = arr[0];
    for(let i=1 ; i<arr.lenght; i++){
        if(arr[i] > max) max = arr[i];
    }
    return max;
}
const findSmallest2 = (arr) => {
    let min = arr[0];
    for(let i=1 ; i<arr.length; i++){
        if(arr[i] > min) min = arr[i];
    }
    return min;
}
const number2 = [10, 25, 3, 99,42];
console.log(`Larset number is : `, findLargest(number2));
console.log(`Smallest number is : `, findSmallest(number2));


