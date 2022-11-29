/*for (var i = 1; i <= 10; i++){
  console.log(foo(i));
}

function foo(n) {
  if (n === 1 || n === 2) {
	  return 1;
  } 
  return foo(n-1) + foo(n-2);
}
// 斐波那契数列
function foo(n) {
  var n1 = 1, n2 = 1;
  for (var i = 3; i <= n; i++) {
    var c = n2;
	n2 = n1 + n2;
    n1 = c;
  }
  return n2;
}*/

// 函数表达式返回两个数之间所有整数的和
/*var getSum = function(n1, n2) {
  var sum = 0;
  for (var i = n1; i <= n2; i++) {
    sum += i;
  }
  return sum;
}
console.log(getSum(1, 9));*/
var c = 3;

function c() {
  console.log('ok');
}
// 函数提升在变量提升之前，此处 c 为 3，无法调用
c();