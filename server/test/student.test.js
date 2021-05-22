/* global describe, it */
/* eslint-disable node/handle-callback-err, no-console, no-unused-expressions */
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
          expect(res.body.data).to.exist;
          expect(res.body.data.id).to.exist;
          done();
        });
    });

    it('Fails when a required field is missing', function (done) {
      chai.request(app)
        .post('/students/register')
        .send({ ...student, first_name: '' })
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          expect(res.body).to.haveOwnProperty('message');
          expect(res.body).to.have.property('message', 'Failed, a required field might be missing');
          done();
        });
    });
  });
});
