/* global describe, it */
/* eslint-disable node/handle-callback-err, no-console, no-unused-expressions */
process.env.NODE_ENV = 'test';
require('dotenv').config();
if (!global.Promise) {
  global.Promise = require('q');
}
const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../index');
const expect = chai.expect;
chai.use(chaiHttp);

describe('RESULT', function () {
  describe('#PinValidation', function () {
    it('Checks pin and serial number validity', function (done) {
      chai.request(app).post('/results/validate-pin').send({
        serial_number: Date.now,
        pin:           '23TDELOIGFG87'
      }).end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('message', 'valid pin');
        done();
      });
    });

    it('Invalidates pin and serial number', function (done) {
      chai.request(app).post('/results/validate-pin')
        .send({ pin: 'ekepdc,ie', serial_number: 'lwee,o,' })
        .end(function (err, res) {
          expect(err).not.to.be.null;
          expect(res).to.have.status(400);
          expect(res.body).to.have.property('message', 'Pin and Serial do not match');
        });
    });
  });
});
