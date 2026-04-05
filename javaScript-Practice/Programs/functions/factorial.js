//? Write a function to calculate factorial (iterative & recursive)

//! Iterative factorial using a function
function factorialIterative(num) {
    if(num < 0) return undefined;
    let result = 1;
    for(let i = 2; i <= num; i++){
        result *= i;
    }
    return result;
}
// console.log(factorialIterative(5));
// console.log(factorialIterative(7));

//! Recursive factorial using a function
function factorialRecursive(num){
    if(num < 0 ) return undefined;
    if(num === 0 || num === 1) return 1;
    return num * factorialRecursive(num - 1);
}
console.log(factorialRecursive(5));
