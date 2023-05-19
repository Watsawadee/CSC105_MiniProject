const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const connection = mysql.createConnection({
	host: "server2.bsthun.com",
	port: "6105",
	user: "lab_1gghlc",
	password: "NkPRxVpdx9JYqdMS",
	database: "lab_blank01_1g3sdcc",
});

connection.connect(() => {
	console.log("Database is connected");
});

// Export connection to use in other files
global.connection = connection;

// Create express app
const app = express();
const port = 3000;

// Parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: "application/json" }));
app.use(cookieParser());

// Register endpoints
app.post("/login", require("./endpoint_login"));
app.post("/register", require("./endpoint_register"));
app.get("/check", require("./endpoint_check_login"));
app.get("/todo/all", require("./endpoint_get_all_todos"));

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});