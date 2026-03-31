let numebrs = (...arr) => {
    console.log(arr);

    //? common operation : square numbers
    let sqrArr = arr.map((elem) => elem * elem);
    console.log(sqrArr);

    //? Sorting
    let num = sqrArr.sort((a,b) => a-b)
    console.log(num);
    console.log(num.reverse());

    //? Filtering based condition : even numbers
    let evenArr = num.filter((elem) => elem % 2 == 0)
    console.log(evenArr);

    //? adding all array elements
    let sum = evenArr.reduce((prev,curr) => prev + curr)
    console.log(sum)
}
numebrs(9,6,4,7,1,3,2,5,8);