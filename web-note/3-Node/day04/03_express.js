const querystring = require('querystring');
const express = require('express');
const app = express();
app.listen(8080);

app.get('/search', (req, res) => {
  res.sendFile(__dirname + '/search.html');
});

app.get('/mysearch', (req, res) => {
  //获取传递的数据
  /*let local = req.url.indexOf('?');
  let str = req.url.slice(local+1);
  console.log(local);
  console.log(str);
  console.log(querystring.parse(str));
  console.log(req.url);
  console.log(new URL('http://127.0.0.1:8080/mysearch?kw=%E5%91%BC%E5%91%BC%E5%91%BC%E5%91%BC%E5%91%BC'));*/
  //获取传递的数据
  console.log(req.query);
  res.send(req.query.kw);
});