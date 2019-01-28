const express = require("express");
const bodyParser = require('body-parser');

//Iniciando o app
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', require('./src/routes'));

app.listen(3001);
