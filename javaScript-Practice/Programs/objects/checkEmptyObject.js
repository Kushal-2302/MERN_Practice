//? Check if an object is empty

//! Using Object.keys()

const isEmptyObject = (obj) => Object.keys(obj) == 0;
console.log({});
console.log(isEmptyObject({name:"kushal",age:24,place:"Bangaerpet"}));


//! Using Object.entries()
const isEmptyObject1 = (obj) => Object.entries(obj).length === 0;
console.log(isEmptyObject1({}));


//! Using JSON.stringify()
const isEmptyObject2 = (obj) => JSON.stringify(obj) === "{}";
console.log(isEmptyObject2({}));
console.log(isEmptyObject2({country : "India"}));