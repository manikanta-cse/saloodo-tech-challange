
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../src/server');
const nock = require('nock');

chai.use(chaiHttp);

describe('/GET string reverse', () => {
    beforeEach(function () {
        nock.cleanAll();
    });

    it('it should reverse value for a given string', (done) => {
        var ApiResponse = { message: "olleh" };
        nock('http://localhost:8090')
            .get('/api/string/reverse/hello')
            .reply(200, ApiResponse);
        chai.request(server)
            .get('/api/string/reverse/hello')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                res.body.should.have.property('random');
                res.body.should.have.property('message').eql('olleh');
                done();
            });
    });

    it('it should return an error when an dependent svc is unreachable', (done) => {

        chai.request(server)
            .get('/api/string/reverse/hello')
            .end((err, res) => {
                res.should.have.status(500);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });

    it('it should throw an error when an input wasnt passed', (done) => {
        chai.request(server)
            .get('/api/string/reverse')
            .end((err, res) => {
                res.should.have.status(404);
                res.body.should.be.a('object');
                done();
            });
    });


});