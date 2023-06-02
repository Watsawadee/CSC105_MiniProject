const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

module.exports = (connection) => {

    // Sort by Breakfast
    router.get("/breakfast", (req, res) => {
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
        
    });

    // Sort By Lunch
    router.get("/lunch", (req, res) => {
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
    });

    // Sort By Glten_free
    router.get("/gluten", (req, res) => {
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
    });

    // Sort By Dinner
    router.get("/dinner", (req, res) => {
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
    });

    return router;
};
