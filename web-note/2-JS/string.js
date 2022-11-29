/*var str1 = 'aa11';
var str2 = new String(1);
var str3 = String(1);
console.log(typeof str1, typeof str2, typeof str3);
console.log(str1 + str2);
console.log(typeof null);
console.log(String( null ));
console.log('C:\\Users\\web')
console.log(str1[0]);
console.log(str1.indexOf('1'));
arr = [0, 1, 0];
console.log(arr.lastIndexOf('0'));*/

/*var id = '110235199512203786';
var y = id.substr(6, 4);
var m = id.substr(10, 2);
var d = id.substr(12, 2);
var sex = id.substr(-2, 0) ? '男' : '女';
console.log(y + '年' + m + '月' + d + '日 性别' + sex);

var str = 'hOw aRE yOu';
var arr = str.split(' ');
for (var i = 0; i< arr.length; i++) {
  var headChar = arr[i].substr(0, 1).toUpperCase();
  var sub = arr[i].substr(1).toLowerCase();

  arr[i] = headChar + sub;
}

console.log(arr.join(' '));*/
var arr1 = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','e','s','t','u','v','w','x','y','z'];
var arr2 = [];
for (var i = 0; i < 4; i++){
	var n = Math.floor(Math.random() * 26);
	arr2[i] = arr1[n];
}
console.log(arr2);