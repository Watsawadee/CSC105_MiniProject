const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

module.exports = (connection, secretKey) => {
    // Middleware for authentication
    const authenticate = (req, res, next) => {
        const token = req.cookies.token;

        if (token) {
            jwt.verify(token, secretKey, (err, decoded) => {
                if (err) {
                    console.error("Error verifying token: ", err);
                    res.sendStatus(401);
                } else {
                    // Token is valid, proceed to the next middleware/route handler
                    next();
                }
            });
        } else {
            // Token does not exist, authentication failed
            res.sendStatus(401);
        }
    };

    // Sort by Breakfast
    router.get("/breakfast", (req, res) => {
        if (req.user) {
            const sqlSelect = "SELECT * FROM recipe WHERE breakfast = 1";
            connection.query(sqlSelect, (err, rows) => {
                if (err) {
                    res.json({
                        success: false,
                        data: null,
                        error: err.message,
                    });
                } else {
                    // Return data to the client if successful
                    res.json({
                        success: true,
                        data: rows,
                        error: null,
                    });
                }
            });
        } else {
            res.status(401).json({
                success: false,
                message: "Not authorized",
            });
        }
    });

    // Sort By Lunch
    router.get("/lunch", (req, res) => {
        if (req.user) {
            const sqlSelect = "SELECT * FROM recipe WHERE Lunch = 1;";
            connection.query(sqlSelect, (err, rows) => {
                if (err) {
                    res.json({
                        success: false,
                        data: null,
                        error: err.message,
                    });
                } else {
                    // Return data to the client if successful
                    res.json({
                        success: true,
                        data: rows,
                        error: null,
                    });
                }
            });
        } else {
            res.status(401).json({
                success: false,
                message: "Not authorized",
            });
        }
    });

    // Sort By Glten_free
    router.get("/gluten", (req, res) => {
        if (req.user) {
            const sqlSelect = "SELECT * FROM recipe WHERE Gluten_Free = 1;";
            connection.query(sqlSelect, (err, rows) => {
                if (err) {
                    res.json({
                        success: false,
                        data: null,
                        error: err.message,
                    });
                } else {
                    // Return data to the client if successful
                    res.json({
                        success: true,
                        data: rows,
                        error: null,
                    });
                }
            });
        } else {
            res.status(401).json({
                success: false,
                message: "Not authorized",
            });
        }
    });

    // Sort By Dinner
    router.get("/dinner", (req, res) => {
        if (req.user) {
            const sqlSelect = "SELECT * FROM recipe WHERE Dinner = 1;";
            connection.query(sqlSelect, (err, rows) => {
                if (err) {
                    res.json({
                        success: false,
                        data: null,
                        error: err.message,
                    });
                } else {
                    // Return data to the client if successful
                    res.json({
                        success: true,
                        data: rows,
                        error: null,
                    });
                }
            });
        } else {
            res.status(401).json({
                success: false,
                message: "Not authorized",
            });
        }
    });

    return router;
};
