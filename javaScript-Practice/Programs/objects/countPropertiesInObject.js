//? Count properties in object

//! Using Object.keys()
const countProperties = (obj) => Object.keys(obj).length;
const person = {
    name : "kushal",
    age : 24,
    place : "Bangarpet"
}
console.log(countProperties(person));


//! Using Object.entries()
const countProperties1 = (obj) => Object.entries(obj).length;
const person1 = {
    name : "kumar",
    age : 22,
    place : "kolar",
    gender : "Male"
}
console.log(countProperties1(person1));


//! Using for...in Loop
const countProperties2 = (obj) => {
    let count = 0;
    for (let key in obj){
        if(obj.hasOwnProperty(key)) count++;
    }
    return count;
}
const person2 = {
    height : "5.10",
    weght : 65
}
console.log(countProperties2(person2))