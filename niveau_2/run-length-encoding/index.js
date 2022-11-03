const runLengthEncoding = (str) => {
  let arr = [...str];
  let encoding = [],
    previous,
    count;

  for (count = 1, previous = arr[0], i = 1; i < arr.length + 1; i++) {
    if (arr[i] !== previous) {
      encoding.push(count, previous);
      count = 1;
      previous = arr[i];
    } else {
      count++;
    }
  }

  encoding.push(count);
  const result = encoding.slice(0, encoding.length - 1);

  return console.log(`${str}` + " => " + result.join(""));
};
console.log("Encoding: ");
runLengthEncoding("AABCCCDEEEE");
runLengthEncoding("AABCCCDE");
runLengthEncoding("ABCCCDDE");
console.log("Decoding: ");
const runLengthDecoding = (str) => {
  let arr = [...str];
  let modifiedArr = [];
  arr.map((item) => {
    if (!isNaN(parseInt(item))) {
      item = Number(item);
    } else item = item;
    modifiedArr.push(item);
  });

  let decoding = [];
  modifiedArr.map((item, index) => {
    decoding.push(...Array(item).fill(arr[index + 1]));
  });

  const result = [];
  decoding.map((item) => {
    if (!isNaN(parseInt(item))) {
      item = null;
    } else item = item;
    result.push(item);
  });

  return console.log(`${str}` + " => " + result.join(""));
};
runLengthDecoding("2AB3CD4E");
runLengthDecoding("3AB6C2DE");
