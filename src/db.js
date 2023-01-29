const mysql = require('mysql-await');
require('dotenv').config();

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

const connectDB = () => {
    const con = mysql.createConnection({
        host: dbHost,
        user: dbUser,
        password: dbPassword,
        database: dbName
    });
    return con;

}
const getCityId = async (cityName) => {
    const con = connectDB();
    const query = `SELECT id FROM cities WHERE city_name = '${cityName}'`;
    let result = await con.awaitQuery(query);
    if (result.length > 0) {
        return result[0].id;
    };
    return false;
}

const getCityweather = async (cityId) => {
    const con = connectDB();
    const query = `SELECT * FROM city_weather WHERE city_id = '${cityId}'`;
    let result = await con.awaitQuery(query);
    if (result.length > 0) {
        return result[0];
    };
    return false;
}

const insertCityweather = async (cityId, weatherData, ts) => {
    try {
        const con = connectDB();
        const query = `INSERT INTO city_weather (city_id, weather_data, updated_at) VALUES (${cityId}, '${weatherData}',  ${ts});`;
        let result = await con.awaitQuery(query);
        return true;
    } catch (error) {
        console.log("Insertion error:", error);
    }
}

const updateCityWeather = async (cityId, weatherData, ts) => {
    try {
        const con = connectDB();
        const query = `UPDATE city_weather SET `+
        `weather_data = '${weatherData}',`+
        `updated_at = '${ts}'`+
        `WHERE city_id = ${cityId};`;
        let result = await con.awaitQuery(query);
        return true;
    } catch (error) {
        console.log("Insertion error:", error);
    }
}



exports.getCityId = getCityId;
exports.getCityweather = getCityweather;
exports.insertCityweather = insertCityweather;
exports.updateCityWeather = updateCityWeather;