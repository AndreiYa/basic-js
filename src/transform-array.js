const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (arr.isArr) {
   throw new Error()
  }

  if (arr.length == 0) {
    return [];
  }
  let newArr = arr.slice(0);


  for (let i = 0; i < newArr.length; i++) {

    if (newArr[i] == '--discard-next') {
      newArr.splice([i], 1);
     newArr[i] = "delio";
      if (newArr[i + 1] == "--double-prev") {
        newArr.splice([i], 2);
      }
    }

    if (newArr[i] == "--double-prev" || newArr[i] == "--discard-prev" && newArr[i] == newArr[0]) {
      newArr.splice([i], 1);
    }

    if (newArr[i] == '--double-next' && i < newArr.length - 1) {
      newArr[i] = newArr[i + 1];
    }
    if (newArr[i] == '--double-next' || newArr[i] == '--double-next' || newArr[i] == 'delio' && i == newArr.length - 1) {
      newArr.splice([i], 1)
    }

    if (newArr[i] == '--double-prev' || newArr[i] == '--discard-prev' && newArr[i] != newArr[0]) {
      newArr[i] = newArr[i - 1];
    }
    if (newArr[i] == '--double-prev' || newArr[i] == '--discard-prev' || newArr[i] == '--double-next' || newArr[i] == '--discard-next' && newArr[i] == newArr[0] && newArr.length == 1) {
      return [];
    }
  } return newArr;

};