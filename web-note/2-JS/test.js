// 假设有本金10000元，银行年利率4%，存五年，一共多少钱
/*var principal = parseFloat(10000);
principal = 10000 * (1 + 0.04) ** 5;
console.log(principal);*/

// 打印素数
/*for (var i = 2; i < 10; i++){
  var count = 0;
  for (var j = 2; j < i; j++){
    if (i % j === 0){
	  count++;
	  break;
    }
  }
  
  count === 0 ? console.log(i + '素数'):console.log(i + '非素数');
}

// 打印9 * 9乘法表
var str = '';
for (var i = 1; i <= 9; i++){
  for (var j = 1, str = ''; j <= i; j++){
    str += i + '*' + j + '=' + (i * j) + ' ';
  } 
  console.log(str);
}
*/

// 创建函数，传递任意一个日期，最后返回这个日期是一年中的第几天
function getDays(year, month, date) {
  let d1 = new Date(year, month-1, date);
  let d2 = new Date(year, 0, 1);
  let time = d1.getTime() - d2.getTime();
  let day = Math.floor(time / (1000*60*60*24));
  console.log(d1,d2,d1-d2,time,day);
}
function getDays2(year, month, date) {
  let february = year%4===0 && year%100!==0 || year%400===0 ? 29:28;
  let months = [31, february, 31,30,31,30,31,31,30,31,30,31];
  console.log(months);
  let sum = 0;
  for (let i = 0; i < month - 1; i++){
    sum += months[i];
  }
  sum = sum + date - 1;
  console.log(sum);
}
//getDays(21,1,20);
getDays2(21,3,2);