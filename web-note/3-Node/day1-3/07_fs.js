//引入文件系统模块
const fs = require('fs');
//查看文件状态
/*let s = fs.statSync('./06_url.js');
console.log(s);
//查看是否为文件形式
//console.log( s.isFile() );
//查看是否为目录形式
//console.log( s.isDirectory() );

//异步方法
fs.stat('./06_url.js', (err, stats) => {
  if(err) throw err;
  console.log(stats);
});

// 读取目录
let arr = fs.readdirSync('../2-JS');
console.log(arr);

// 异步读取
fs.readdir('../2-js', (err, arr) => {
  if(err) throw err;
  console.log(arr);
});
// 写入文件
fs.writeFileSync('./1.txt','taosang');
*/

// 创建数组包含多人姓名，遍历数组，将每个姓名写入到文件stu.txt，使用异步写入方式
let arrStu = ['张毅','谢冰','王武','刘毅'];
for (let i = 0; i < arrStu.length ; i++) {
  fs.appendFile('./stu.txt', arrStu[i]+'\n', (err) => {
    if(err) throw err;
  });
}
