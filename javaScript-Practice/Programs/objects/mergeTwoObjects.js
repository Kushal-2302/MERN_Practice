//? Merge two objects

//! Using Spread Operator
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});
const person = {
    name : "kushal",
    age : 24
}
const details = {
    city : "Banagerpet",
    Profession : "Software Developer"
}
console.log(mergeObjects(person, details));


//! Using Object.assign()
const mergeObjects1 = (obj1, obj2) => Object.assign({} , obj1, obj2);
const car = {
    brand : "Tata",
    model : "A"
}
const specs = {
    year : 2025,
    color : "Red"
} 
console.log(mergeObjects1(car, specs));


//! Manual Merge with Loop
const mergeObjects2 = (obj1, obj2) => {
  const result = {};
  for (let key in obj1) result[key] = obj1[key];
  for (let key in obj2) result[key] = obj2[key];
  return result;
};

const book = { title: "JS Guide", pages: 200 };
const author = { name: "John", year: 2024 };

console.log(mergeObjects2(book, author));
// { title: "JS Guide", pages: 200, name: "John", year: 2024 }
