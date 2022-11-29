/*var d1 = new Date('2021/6/17');
//var d2 = new Date(2021,5,17,10,20,30); 
var d2 = new Date(2021,5,17);
var d3 = new Date(1683036000000);
var d4 = new Date();
console.log(d1);
console.log(d2);
console.log(d3);
console.log(d4);
var d = new Date();
var year = d.getFullYear();
var month = d.getMonth();
var date = d.getDate();
if (date < 10){
  date = '0' + date;
}
var hour = d.getHours();
if (hour < 10){
  hour = '0' + hour;
}
var second = d.getSeconds();
if (second < 10){
  second = '0' + second;
}
var minute = d.getMinutes();
var arrDay = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
var day = arrDay[d.getDay()];

console.log('今天是'+year+'年'+month+'月'+date+'日 '+hour+':'+minute+':'+second+' '+day);

// 计算当前时间距离2021年7月1日过了x天x小时x分x秒
var d1 = new Date();
var d2 = new Date('2021/7/1');
var d = d1.getTime() - d2.getTime();
console.log(new Date(d1));
console.log(new Date(d2));
d = Math.floor(d/1000);
console.log(d);
var seconds = d%60;
var minutes = Math.floor(d%(60*60)/60);
var hours = Math.floor(d%(24*60*60)/(60*60));
var days = Math.floor(d/(24*60*60));
console.log(days,hours,minutes,seconds);

// 获取本地时间
var d = new Date();
console.log(d.toLocaleString());
console.log(d.toLocaleDateString());
console.log(d.toLocaleTimeString());

var d = new Date();
console.log(d);
d.setDate(d.getDate() + 3);
*/

var d1 = new Date('2021/6/17');
console.log('入职时间: '+d1.toLocaleDateString());