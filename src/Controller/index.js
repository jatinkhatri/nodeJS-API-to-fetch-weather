
const DB = require("../db");
const axios = require('axios');
const logger = require("../logging");

require('dotenv').config();

const weatherApiKey = process.env.OPENWEATHER_API;
/**
 * Function to return list of all the servers
 * @returns {Promise}
 */
const getWeather = async (cityName) => {
    return new Promise(async (resolve, reject) => {
        try {
            var ts = Math.round((new Date()).getTime() / 1000);
            const cityId = await DB.getCityId(cityName);
            logger.info("Init process");
            if (!cityId) {
                logger.info("Requested city not found in the database");
                reject("City doesn't exist in the database");
            }

            logger.info("Requested city exists in the DB");

            // Get city Weather from the database
            const cityWeather = await DB.getCityweather(cityId);
            logger.info("Get city weather information from the DB");

            // if city weather not exists in the database
            // pull data from weather API and inster in the database
            if (!cityWeather) {

                logger.info("Get city weather information not found in the DB");
                // Get Weather information from the API
                const currentWeatherData = await getCurrentWeather(cityName);
                logger.info("Requested weather API");

                // insert weather data in the database
                await DB.insertCityweather(cityId, JSON.stringify(currentWeatherData), ts); 4
                logger.info("inserted weather information the DB");

                resolve(currentWeatherData);
            }

            // if weather data exists and last updated entry after 20 seconds
            // return the weather data
            if (cityWeather && cityWeather.updated_at >= ts - 20) {
                logger.info("Get weather information from the database and return to user");
                resolve(JSON.parse(cityWeather.weather_data));
            } else {
                logger.info("Get weather information from the API and update in the database");
                // if the weather entry crossed 20 seconds update the entry
                const currentWeatherData = await getCurrentWeather(cityName);
                await DB.updateCityWeather(cityId, JSON.stringify(currentWeatherData), ts);
                resolve(currentWeatherData);
            }
        } catch (error) {
            logger.error(error);
            reject(error);
        }
    });
}

const getCurrentWeather = async (cityName) => {
    return new Promise(async (resolve, reject) => {
        const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${weatherApiKey}`;
        axios.get(weatherURL, { timeout: 1000 * 5 })
            .then(response => {
                logger.info("retruned data from weather API");
                resolve(response.data);
            }).catch((error) => {
                // return error
                logger.error("Error in weather API:" + error);
                reject(error);
            });
    });
}


module.exports = getWeather;