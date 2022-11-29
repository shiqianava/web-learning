//引入url模块
/*const url = require('url');
let str = 'http://www.codeboy.com:9999/product_details.html?lid=22';
//解析URL，为了获取各个部分
let obj = url.parse(str);
console.log(obj);*/

const querystring = require('querystring');
let str = 'http://www.codeboy.com:9999/product_details.html?lid=22';
let obj2 = new URL(str);
console.log(obj2);
let searchStr = obj2.search.substr(1);
console.log(searchStr);
let searchObj = querystring.parse(searchStr);
console.log(searchObj);