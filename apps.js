const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
// http://127.0.0.1:3000/
app.get('/', (req, res) => res.send(' 하은~~ 손발 따듯하게 푹 자고 내가 많이 사랑해♥ '));

app.get('/main',function (req, res) {
    fs.readFile('main.html', function (error, data) {
        res.writeHead(200, { 'Content-Type': 'text.html' });
        res.end(data);
    });
});

app.get('/imgs',function (req, res) {
    fs.readFile('imgs.jpg', function (error, data) {
        res.writeHead(200, { 'Content-Type': 'text.html' });
        res.end(data);
    });
});

// http://127.0.0.1:3000/welcome?name=jinhee
app.get('/welcome', (req, res) => {
    var user_name = req.param('name');
    res.sendStatus('Hi there. Welcome to the Nodejs service [' + user_name + ']');
});

app.listen(port, () => console.log('Example app listening on port 3000')) // port를 사용하지 않으면 port번호 3000번을 사용