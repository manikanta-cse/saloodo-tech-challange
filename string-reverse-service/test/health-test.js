let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../src/main');
let should = chai.should();

chai.use(chaiHttp);

describe('/GET health', () => {
    it('it should get health status', (done) => {
        chai.request(server)
            .get('/health')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('status');
                res.body.should.have.property('status').eql('UP');
                done();
            });
    });
});