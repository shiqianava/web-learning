//引入express第三方模块
//express既是函数，也是对象
const express = require('express');
//创建WEB服务器
const app = express();

//设置端口
app.listen(8080, () => {
  console.log('服务器启动成功');	
});

//添加路由
//请求的URL:/index 请求的方法: get
app.get('/index', (req, res) => {
  res.send('<h1>学子商城11<h1>');
});
//添加商品列表的路由
//请求的URL:/list 请求的方法：get
//响应<h2>这是商品列表</h2>
app.get('/list', (req, res) => {
  res.send(`
	这是商品列表
	商品介绍
  `);
});
//重定向
app.get('/', (req, res) => {
  res.redirect('/index');
});
//响应文件
app.get('/reg', (req, res) => {
  res.sendFile(__dirname + '/reg.html');
});