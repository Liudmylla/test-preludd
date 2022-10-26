const isArmstrongNumber = (num) => {
  const str = num.toString();
  const power = str.length;
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    sum = sum + Math.pow(Number(str[i]), power);
  }
  if (sum === num) {
    return console.log(`${num} is an Armstrong number`);
  } else return console.log(`${num} is not an Armstrong number`);
};
isArmstrongNumber(9);
isArmstrongNumber(10);
isArmstrongNumber(153);
isArmstrongNumber(154);
