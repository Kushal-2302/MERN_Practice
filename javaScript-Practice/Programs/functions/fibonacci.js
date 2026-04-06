//? Write a function for Fibonacci (nth + series)

//! Fibonacci (nth number)
const fibonacciNth = (n) => {
  if (n < 0) return undefined;
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0,
    b = 1,
    next;
  for (let i = 2; i <= n; i++) {
    next = a + b;
    a = b;
    b = next;
  }
  return b;
};
console.log(fibonacciNth(7));


//! Fibonacci Series (up to n terms)
const fibonacciSeries = (n) => {
  if (n <= 0) return [];
  if (n === 1) return [0];

  const series = [0, 1];
  for (let i = 2; i <= n; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }
  return series;
};
console.log(fibonacciSeries(10));