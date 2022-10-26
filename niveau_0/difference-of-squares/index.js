const differenceOfSquares = (n) => {
  let sumNumbers = 0;
  let sumSquares = 0;
  let difference = 0;
  for (let i = 1; i <= n; i++) {
    sumNumbers = sumNumbers + i;
    sumSquares = sumSquares + i ** 2;
    difference = sumNumbers ** 2 - sumSquares;
  }
  return console.log(difference);
};
differenceOfSquares(10);
