const express = require('express');

const app = express();

const logWelcomeMessage = (req, res, next) => {
  console.log('Yeni bir istek geldi');
  next();
};

const logPostMessage = (req, res, next) => {
  console.log('Post isteği için istek gönderildi');
  next();
};

app.use(logWelcomeMessage);

app.get('/hello', (req, res) => {
  res.json('Merhaba, GET isteği attınız');
});

app.post('/hello', logPostMessage, (req, res) => {
  res.json('Merhaba, POST isteği attınız');
});

app.put('/hello', (req, res) => {
  res.json('Merhaba, PUT isteği attınız');
});

app.delete('/hello', (req, res) => {
  res.json('Merhaba, DELETE isteği attınız');
});

app.listen(8081);
