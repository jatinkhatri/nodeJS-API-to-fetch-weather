const chai = require('chai');
const { expect } = chai;
const chaiAsPromised = require("chai-as-promised");
const getWeather = require('../../src/Controller');
chai.use(chaiAsPromised);

describe('getWeather ', () => {
    
    it('will get the weather information',async () => {
        const weather = await getWeather("toronto");
        expect(weather).to.not.be.empty;
    });

    it('will get the weather information unknown city',async () => {
        expect(getWeather("delhi")).to.eventually.be.rejected; 
    });

});