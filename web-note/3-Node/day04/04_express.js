const express = require('express');
const app = express();

app.listen(8080);
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});
app.post('/mylogin', (req, res) => {
  req.on('data', (chunk) => {
    console.log(chunk.toString());
	res.send(chunk.toString());
  });
});