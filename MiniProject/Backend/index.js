const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const jwt = require('jsonwebtoken');
const cors = require('cors');

const connection = mysql.createPool({ // Use createPool instead of createConnection
	host: "server2.bsthun.com",
	port: "6105",
	user: "lab_1gghlc",
	password: "NkPRxVpdx9JYqdMS",
	database: "lab_blank01_1g3sdcc",
});

connection.getConnection((err) => { // Use getConnection to ensure connection is established
	if (err) {
		console.error("Error connecting to the database: ", err);
	} else {
		console.log("Database is connected");
	}
});

const app = express();
const port = 8000;

app.use(bodyParser.json({ type: "application/json" }));
app.use(cookieParser());
app.use(cors());

// Register endpoints
app.get("/", (req, res) => {
	res.send("Hello world!!");
});

const secretKey = '4290620fbf80c32ef6d0d71c80ebf0e6d05f78d2f48f10f224eec379e812f14c';

const loginRoute = require("./Routes/endpoint_login")(connection, secretKey);
// const signupRoute = require("./Routes/endpoint_signup")(connection);
// const logoutRoute = require("./Routes/endpoint_logout")(connection);

app.use('/login', loginRoute);

app.get("/getAll", (req, res) => {
	const sqlSelect = "SELECT * FROM user";
	connection.query(sqlSelect, (err, results) => {
		res.send("Hello world!!");
	});
});

app.listen(port, () => {
	console.log(`Recipe app listening on port ${port}`);
});

