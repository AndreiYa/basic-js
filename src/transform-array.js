const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }


  let newArr = [];
  let arrMod = arr.slice(0);
  let tmp = 'temp';

  for (var i = 0; i < arrMod.length; i++) {
    switch (arrMod[i]) {
      
      case '--discard-next':
        arrMod[i] = tmp;
        arrMod[i + 1] = tmp;
        break;

      case '--discard-prev':
        arrMod[i] = tmp;
        arrMod[i - 1] = tmp;
        break;
      
      case '--double-next':
        if (i < arrMod.length - 1) {
          arrMod[i] = arrMod[i + 1];
        } else {
          arrMod[i] = tmp;
        }
        break;

      case '--double-prev':
        arrMod[i] = tmp;
        if (i > 0 && arrMod[i - 1] !== tmp) {
          arrMod[i] = arrMod[i - 1];
        } else {
          arrMod[i] = tmp;
        }
        break;
      default:
    }
  }
  arrMod.forEach((item) => {
    if (item !== tmp) {
      newArr.push(item);
    }
  });

  return newArr;
};