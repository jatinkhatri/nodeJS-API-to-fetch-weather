const chai = require('chai');
const { expect } = chai;
const chaiAsPromised = require("chai-as-promised");
const db = require('../src/db');
const should = require('should');
chai.use(chaiAsPromised);

describe('database ', () => {

    it('will get the city id',async () => {
        const cityId = await db.getCityId("toronto");
        cityId.should.equal(1);
    });

    it('will get the getCityweather by city id',async () => {
        const cityWeather = await db.getCityweather(1);
        expect(cityWeather).to.not.be.empty;
    });

    it('will get the getCityweather by city id return false',async () => {
        const cityWeather = await db.getCityweather(500);
        expect(cityWeather).to.be.false;
    });

    it('will add the weather record in the db',async () => {
        var ts = Math.round((new Date()).getTime() / 1000);
        const weatherAdded = await db.insertCityweather(10,JSON.stringify({temp:5}), ts);
        expect(weatherAdded).to.be.true;
    });


    it('will update the weather record in the db',async () => {
        var ts = Math.round((new Date()).getTime() / 1000);
        const weatherAdded = await db.updateCityWeather(10,JSON.stringify({temp:8}), ts);
        expect(weatherAdded).to.be.true;
    });

});