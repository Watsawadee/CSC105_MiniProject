const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

module.exports = (connection, secretKey) => {
    router.post('/login', (req, res) => {
        const { username, password } = req.body;  
        // Perform database query to check credentials
        connection.query('SELECT * FROM user WHERE name = ? AND password = ?', [username, password], (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
    
            if (results.length === 0) {
                // Invalid credentials
                return res.status(401).json({ error: 'Invalid username or password' });
            }
    
            // Valid credentials
            const user = results[0];
            const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });
    
            // Set the token as a cookie or send it in the response
            res.cookie('token', token, { httpOnly: true }).json({ message: 'Login successful' });
        });
    });

    return router;
};

