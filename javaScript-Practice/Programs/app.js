//? removing duplicates
let duplicate = (arr) => {
  let result = [];
  for(let elem of arr){
    if(!result.includes(elem)){
      result.push(elem);
    }
  }
  return result;
}
// console.log(duplicate([8,8,5,3,2,2,9,1,9]));

//? counting vowels in 
let countVowels = (string) => {
  let count = 0;
  let vowels = "aeiouAEIOU";
  for(let char of string){
    if(vowels.includes(char)){
      count++
    }
  }
  return count;
}
// console.log(countVowels("India"));

//? Finding sum of Array
let total = (arr) => {
  return arr.reduce((sum, curr) => sum = sum + curr)
}
console.log(total([7,4,3,2,5]));



//? finding second largest number
let secondLargeNum = (arr) => {
  let sort = arr.sort((a, b) =>  b - a);
  return sort[1];
}
// console.log(secondLargeNum([9,5,7,1,10,2,6]));