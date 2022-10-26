const rotationalCipher = (str, key) => {
  const abc = "abcdefghijklmnopqrstuvwxyz";
  let secretStr = "";
  let strArray = [...str];
  strArray.forEach((item, index) => {
    if (item === " ") {
      secretStr += " ";
      return;
    }

    let newSpace;
    let space = abc.indexOf(item);
    newSpace = (space + key) % abc.length;
    secretStr += abc[newSpace];
  });
  return console.log(secretStr);
};
rotationalCipher("omg", 5);
rotationalCipher("c", 0);
rotationalCipher("cool", 26);
rotationalCipher("the quick brown fox jumps over the lazy dog", 13);
rotationalCipher("gur dhvpx oebja sbk whzcf bire gur ynml qbt", 13);
