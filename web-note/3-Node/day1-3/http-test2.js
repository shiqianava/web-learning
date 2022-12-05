/*
练习：创建web服务器，设置端口8080，根据请求作出响应
   /index    响应  '<h1>学子商城</h1>'
   /         跳转到   /index
   /reg      响应   reg.html
   其它      404   not found
*/
const http = require('http');
const fs = require('fs');

let app = http.createServer();
app.listen(8080, () => {
  console.log('服务器启动');
});

app.on('request', (req, res) => {
  if (req.url === '/index'){
    res.writeHead(200, {
	  'Content-Type': 'text/html;charset=utf-8'
	});
	res.write('<h1>学子商城</h1>');
  } else if (req.url === '/'){
	res.writeHead(302, {
	  Location: '/index'
	});
  } else if (req.url === '/reg'){
	res.writeHead(200, {
	  'Content-Type': 'text/html;charset=utf-8'
	});
	let data = fs.readFileSync('./index.html');
	res.write(data);
  } else {
    res.writeHead(404);
	res.write('not found');
  }
  res.end()
});