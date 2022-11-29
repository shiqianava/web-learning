/*var arr = [];
arr[1] = 1;
arr[5] = 5;
console.log(arr);*/
var score = [];
//索引数组
score[ score.length ] = 81;
score[ score.length ] = 73;
//关联数组
score['first'] = 100;
console.log(score);
//关联数组不能使用length属性获取数组长度
console.log(score.length);