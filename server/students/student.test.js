/* global describe, it */
/* eslint-disable node/handle-callback-err */
process.env.NODE_ENV = 'test';
require('dotenv').config();
const chai = require('chai');
const chaiHttp = require('chai-http');

const BASE_URL = process.env.TEST_HOST;
const expect = chai.expect();
chai.use(chaiHttp);

describe('Registers student', function () {
  it('registers an admitted student', function (done) {
    chai.request(BASE_URL).get('/admin/students/register')
      .post('/students/register').end(function (err, res) {
        expect(res).status('OK');
        expect(res).statusCode(200);
        done();
      });
  });
});
