const http = require('http');
const fs = require('fs');
const app = http.createServer();
/*
编写文件05_http.js，创建WEB服务器，设置端口为8080，根据请求作出响应
   /       响应   '<h1>这是首页</h1>'
   /study  跳转   'https://www.tmooc.cn'
   /login  响应网页 1.html   （先读取文件的数据，然后作为响应的内容）
   其它     响应 404    not  found
*/
app.listen(8080, () => {
  console.log('服务器启动');
});

app.on('request', (req, res) => {
  /*if (req.url == '/'){
	res.writeHead(302,{
	  Location: 'https://www.tmooc.cn'
	});
  } else if()*/
  switch (req.url){
    case '/':
	  res.writeHead(200, {
	    'Content-Type': 'text/html;charset=utf-8'
	  });
	  res.write('<h1>这是首页</h1>');
	  break;
	case '/index':
	  res.writeHead(302, {
	    Localtion: '/'
	  })
	  break;
	case '/study':
	  res.writeHead(302,{
	    Location: 'https://www.tmooc.cn'
	  });
	  break;
	case '/login':
	  res.writeHead(200, {
	    'Content-Type': 'text/html;charset=utf-8'
	  });
	  let data = fs.readFileSync('./01.html');
	  //设置为响应的内容，buffer会自动转为字符串
      //res.write(data.toString());
	  res.write(data);
	  break;
	default:
	  res.writeHead(404);
	  res.write('not found');
  }
  res.end();
});