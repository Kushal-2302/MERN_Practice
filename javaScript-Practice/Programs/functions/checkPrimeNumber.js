//? Write a function to check if a number is prime

//! only checking prime number or not
const isPrime = (num) => {
    if(num < 1) return false;
    if(num === 2) return true;
    if(num % 2 == 0) return false;

    for(let i=3 ;i <= Math.sqrt(num) ; i += 2){
        if(num % i === 0) return false;
    }
    return true;
}
// console.log(isPrime(24));


//! Generate First N numbers
const generatePrimes = (n) => {
    const primes = [];
    let num = 2; //start checking ffrom 2 (first Prime)

    // helper arrow function to check if a number is prime
  const isPrime = (num) => {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  };

  while(primes.length < n){
    if(isPrime(num)) primes.push(num);
    num++
  }
  return primes;
}
console.log(generatePrimes(25));