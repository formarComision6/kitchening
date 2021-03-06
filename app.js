require('dotenv').config();
const express = require('express');
const app = express();
const port = 3030;
const path = require('path');

app.use(express.static('public'));

app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', 'home.html')))

app.listen(process.env.PORT || port, () => console.log('Server runing in http://localhost:' + process.env.PORT || port))