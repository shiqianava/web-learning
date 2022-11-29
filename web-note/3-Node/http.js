//引入http协议
const http = require('http');
//创建web服务器
const app = http.createServer();
//设置端口
app.listen(8080, () => {
  console.log('服务器启动成功');
});
//请求服务器
//域名/IP地址
//http://localhost:8080
//http://127.0.0.1:8080

//接收浏览器的请求，并作出响应
//通过事件

app.on('request', (req, res) => {
  //req 请求的对象 
  //获取请求的URL，请求的方法
  console.log(req.url, req.method);
  //res 响应的对象
  //设置响应的状态码和头信息
  /*res.writeHead(200, {
    'Content-Type': 'text/html;charset=utf-8'
  });
  //设置响应的内容
  res.write('这是你的jianbing');
  res.end();
  
  //设置状态码为302，跳转到https://www.tmooc.cn
  res.writeHead(302, {
    Location: 'https://www.tmooc.cn'
  });
  res.end();
  
  //设置状态码404。 网页内容为 not found
  res.writeHead(404);
  res.write('not found');
  res.end();*/
});