const runLengthEncoding = (str) => {
  let arr = [...str];
  let encoding = [],
    previous,
    count;

  for (count = 1, previous = arr[0], i = 1; i < arr.length; i++) {
    if (arr[i] !== previous) {
      count === 1 ? encoding.push(previous) : encoding.push(count, previous);
      count = 1;
      previous = arr[i];
    } else {
      count++;
    }
  }

  encoding.push(count, previous);

  return console.log(encoding.join(""));
};
runLengthEncoding("AABCCCDEEEE");

const runLengthDecoding = (str) => {
  let arr = [...str];
  let modifiedArr = [];
  arr.map((item, index) => {
    if (index % 2 === 0) {
      item = Number(item);
    }
    modifiedArr.push(item);
  });
  let decoding = [];
  modifiedArr.map((item, index) => {
    if (index % 2 === 0) {
      decoding.push(...Array(item).fill(arr[index + 1]));
    }
  });

  return console.log(decoding.join(""));
};
runLengthDecoding("2A1B3C1D4E");
//todo transform input data from 2AB3CD4E to 2A1B3C1D4E :
// check each item and prev item in array
// if Number(item) isNan && Number( prev item) isNan insert 1
