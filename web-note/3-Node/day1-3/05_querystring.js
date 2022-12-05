const querystring = require('querystring');
/*console.log(querystring);
let str = 'keyworf=笔记本&enc=utf-8&n=1';
//将查询字符串解析为对象
let obj = querystring.parse(str);
console.log(obj);*/

let str = 'pname=小米 Air&price=4199';
let obj = querystring.parse(str);
console.log(
  `商品名称：${obj.pname}
价格：${obj.price}`
);