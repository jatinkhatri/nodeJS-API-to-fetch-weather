

const supertest = require('supertest');
const should = require('should');
const app = require("../../src/server");

describe('Router', () => {
    let request = null
    let server = null
    before(function (done) {
        server = app.listen(done)
        request = supertest.agent(server)
    })

    //Calling API
    it('should test weather api without cityname', (done) => {
        request.get('/weather').expect('Content-type',/json/).expect(401).end( (err,res) => {
            res.status.should.equal(401);
            done();
        });
    });

    it('should test weather', (done) => {
        request.get('/weather?city=toronto').expect('Content-type',/json/).expect(200).end( (err,res) => {
            res.status.should.equal(200);
            done();
        });
    });
});