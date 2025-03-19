const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./router/root');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/', router);

app.listen(3000, () => {
    console.log("Server đang chạy tại http://localhost:3000");
});
