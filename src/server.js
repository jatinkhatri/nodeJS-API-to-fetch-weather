//Import all the dependecies
const express = require('express');
const routes = require('../src/routes');
const logger = require("./logging");
require('dotenv').config();

//Server Creation
const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(routes);

//Listen Server at port specified or by defaulr 3000
app.listen(PORT, () => {
    const info = `Server Running at ${PORT}`;
    console.log(info);
    logger.info(info);
});

module.exports = app;