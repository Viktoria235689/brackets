module.exports = function check(str, bracketsConfig) {
  // your solution
  let i = 0;

  while (i < str.length) {
    let isInclude = false;
    bracketsConfig.forEach((element) => {
      if (str.includes(element[0] + element[1])) {
        str = str.replace(element[0] + element[1], "");
        isInclude = true;
      }
    });
    if (str.length === 0) {
      return true;
    }
    if (!isInclude) {
      return false;
    }
  }
};
