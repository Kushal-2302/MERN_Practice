//? Find second largest number

//!
const secondLargeNum = (arr) => {
    let second = arr.sort((a,b)=> b - a);
    return second[1];
}
console.log(secondLargeNum([7,9,3,5,1,8,4]));
console.log(secondLargeNum([56,32,45,12,90,86,26]));
