//? Remove duplicates from array

//! Using Set (Most Common & Efficient)
const removeDuplicates = (arr) => [...new Set(arr)];

console.log(removeDuplicates([1,2,2,3,4,4,5]));


//! Using filter() + indexOf()
const removeDuplicates1 = (arr) => 
    arr.filter((item, index) => arr.indexOf(item) === index);
console.log(removeDuplicates1([1,2,2,3,4,4,5, 7, 7]));