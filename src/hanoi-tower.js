const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let diskTurnes = (Math.pow(2, disksNumber)) - 1;
  let sec = 3600 / turnsSpeed * diskTurnes;
  let obj = {
    turns: diskTurnes,
    seconds: Math.floor(sec)
  };
  return obj;
};
