const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1) {
    let newArr = arr.filter(a => Array.isArray(a));
    return newArr.length ? this.calculateDepth(newArr.flat(), depth + 1) : depth;
  }
};