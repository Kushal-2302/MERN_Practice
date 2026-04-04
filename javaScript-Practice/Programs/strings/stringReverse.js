//? Reverse a string

//! Using Built‑in Methods (Simple & Common)
const reverseString = (str) => str.split('').reverse().join('');

console.log(reverseString("Hello"));


//! Using a Loop (Manual Control)
let reverseString1 = (str => {
    let reversed = "";
    for(let i=str.length - 1 ; i >= 0 ; i--){
        reversed += str[i];
    }
    return reversed;
})
console.log(reverseString1("Interview"));