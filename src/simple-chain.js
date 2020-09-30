const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    let newlink = `~(${value})~`; 
  },
  removeLink(position) {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    let lastLink = `~()~`
  }
};

module.exports = chainMaker;
