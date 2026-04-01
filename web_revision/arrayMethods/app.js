// let numebrs = (...arr) => {
//     console.log(arr);

//     //? common operation : square numbers
//     let sqrArr = arr.map((elem) => elem * elem);
//     console.log(sqrArr);

//     //? Sorting
//     let num = sqrArr.sort((a,b) => a-b)
//     console.log(num);
//     console.log(num.reverse());

//     //? Filtering based condition : even numbers
//     let evenArr = num.filter((elem) => elem % 2 == 0)
//     console.log(evenArr);

//     //? adding all array elements
//     let sum = evenArr.reduce((prev,curr) => prev + curr)
//     console.log(sum)
// }
// // numebrs(9,6,4,7,1,3,2,5,8);


// let arr = [38,23,98,12,75,32,91,48];
// let even = arr.filter((elem) => elem % 2 == 0)
// // console.log(even);


// //? objects
// let arithmetic = {
//     add : function(a=0,b=0){
//         let sum = a+b;
//         return `${a} + ${b} = ${sum}`
//     },
//     multiple : function(a,b){
//         return `${a} + ${b} = ${a*b}`
//     }
// }
// let a1 = arithmetic.add(100,200)
// console.log(a1);

// let m1 = arithmetic.multiple(20,30);
// console.log(m1);

// let {add, multiple} = arithmetic;
// console.log(add(10,20));
// console.log(multiple(4,5));


//!------------------------------------------
//? date : 01/04/2026, filtering the stuedent based on condition
// let students = [
//     {fname : "kushal" , lname : "kumar" , age : 24},
//     {fname : "ravi" , lname : "shastri" , age : 25},
//     {fname : "raj" , lname : "kumar" , age : 19}
// ]
// console.log(students);

// let filteredArray = students.filter((elem) => {
//     return elem.age >= 25;
// })
// console.log(filteredArray);

// filteredArray.map((elem) => {
//     let { fname, age } = elem ;
//     console.log(`${fname} age is ${age}`);
// })



//? --- storing student details in array format
let student = [
    {fname : "kushal" , lname : "kumar" , age : 24, degree : "BE"},
    {fname : "ravi" , lname : "shastri" , age : 25 , degree : "BE"},
    {fname : "raj" , lname : "kumar" , age : 19 , degree : "MCA"}
]
let result = student
.filter((elem) => elem.degree === 'BE')
.map((elem) => `${elem.fname} age is ${elem.age}`)
console.log(result);