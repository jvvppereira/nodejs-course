const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

//Iniciando o app
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/", require("./src/routes"));

app.listen(process.env.PORT || 3001);
