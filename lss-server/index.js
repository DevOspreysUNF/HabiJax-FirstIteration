const express = require("express");
const app = express();
//const { connection } = require("./config");
const createError = require("http-errors");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(express.json());

app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);
app.use(cors());

app.listen(5000, () => {
	console.log("express server started!");
});

app.use(express.static("../lss-client-v1/dist"));
