//引入fs模块
const fs = require('fs');
//创建可读取的文件流
let rs = fs.createReadStream('./images/Lucy.jpg');

//创建可写入的文件流
let ws = fs.createWriteStream('./images/LucyCopy.jpg');

//将读取的文件流以管道的形式添加到写入流
rs.pipe(ws);


/*
//通过事件获取数据
//添加事件，监听数据流入内存,通过回调函数获取结果
let count = 0; //用于记录读取的段数
rs.on('data', (chunk) => {
  //获取的分段数据
  //console.log(chunk);
  //读取一次记录一次
  count++;
});
//添加事件，监听读取结束
rs.on('end', () => {
  console.log('读取结束：' + count);
});
*/