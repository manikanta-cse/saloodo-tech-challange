let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../src/main');
let should = chai.should();

chai.use(chaiHttp);


describe('/GET string reverse', () => {
    it('it should reverse value for a given string', (done) => {
        chai.request(server)
            .get('/api/string/reverse/hello')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                res.body.should.have.property('message').eql('olleh');
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
