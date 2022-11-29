const max = (a, b, c) => {
  let max;
  max = a > b ? a : b;
  max = max > c ? max : c;
  return max;
}

console.log('找到了index文件');

module.exports = {
  max
}
