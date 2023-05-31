const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const connection = mysql.createPool({
  host: 'server2.bsthun.com',
  port: '6105',
  user: 'lab_1gghlc',
  password: 'NkPRxVpdx9JYqdMS',
  database: 'lab_blank01_1g3sdcc',
});

connection.getConnection((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Database connected');
  }
});

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Register endpoints
app.get('/', (req, res) => {
  res.send('Hello world!');
});

const secretKey = '4290620fbf80c32ef6d0d71c80ebf0e6d05f78d2f48f10f224eec379e812f14c';

const protectedRoute = require('./Routes/protected_route')(secretKey);
const loginRoute = require('./Routes/endpoint_login')(connection, secretKey);
const signupRoute = require('./Routes/endpoint_signup')(connection);
// const logoutRoute = require('./Routes/endpoint_logout')(connection);
const RecipeRoute = require('./Routes/endpoint_recipes')(connection);
// const CreateRecipeRoute = require('./Routes/endpoint_CreateRecipe')(connection, secretKey);
// const EditRecipeRoute = require('./Routes/endpoint_EditRecipe')(connection, secretKey);
// const DeleteRecipeRoute = require('./Routes/endpoint_DeleteRecipe')(connection, secretKey);
// const RecipeRoute = require('./Routes/endpoint_recipe')(connection);

app.use('/protected', protectedRoute);
app.use('/login', loginRoute);
app.use('/signup', signupRoute);
// app.use('/logout', logoutRoute);
app.use('/recipes', protectedRoute, RecipeRoute);
// app.use('/create', CreateRecipeRoute);
// app.use('/edit', EditRecipeRoute);
// app.use('/delete', DeleteRecipeRoute);
// app.use('/recipe', RecipeRoute);

function authenticateToken(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ success: false, message: 'Not authorized' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ success: false, message: 'Invalid token' });
    }

    // Store the decoded token in the request object for later use
    req.user = decoded;
    next();
  });
}

// Add the /users endpoint to retrieve and display all users
app.get('/users', (req, res) => {
  const sqlSelect = 'SELECT * FROM user';
  connection.query(sqlSelect, (err, results) => {
    if (err) {
      console.error('Error executing the SQL query:', err);
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Recipe app listening on port ${port}`);
});
