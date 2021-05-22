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

const { student } = require('./utils');

describe('STUDENT', function () {
  describe('#Enroll', function () {
    it('Enroll an admitted student', function (done) {
      chai.request(app)
        .post('/students/register')
        .send(student)
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('message', 'Registration successful');
          done();
        });
    });

    it('Fails when a required field is missing', function (done) {
      chai.request(app)
        .post('/student/register')
        .send({ ...student, first_name: '' })
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('message', 'could not validate request, a required field might be misssing');
        });
    });
  });
});
