/**
 * Import all dependecy
 */
const express = require('express');
const getWeather = require('../Controller');

//Initialize the Router
const router = express.Router();
const logger = require("../logging");

/**
 * GET API to fetch the server
 */
router.get('/weather', async (req, res) => {
    try {
        // Request timout 5 Seconds
        req.setTimeout(5000);
        const cityName = req.query.city;

        // If city name not exits then reurn the error
        if (!cityName) {
            res.status(401).send({
                status: 'ERROR',
                message: "city is required"
            });
            logger.info("city name not found in the query params");
        }

        // Call get weather promise
        const server = await getWeather(cityName);
        logger.info("Success user request");
        res.status(200).send({
            status: 'success',
            message: server,
        });
    } catch (error) {
        logger.error("Request Error" + error);
        res.status(500).send({
            status: 'ERROR',
            message: error
        });
    }
});

module.exports = router;