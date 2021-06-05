/* eslint-disable no-console */
import axios from 'axios';
import formUrlEncoded from 'form-urlencoded';
import { getSession } from '../session/cookies';

const request = {};
let CancelToken = axios.CancelToken;
let cancel;

request.make = (options, withToken) => {
  let access_token;
  let headers = {};
  let _options = options || {};
  let isEncoded = options.encode;

  _options.headers = _options.headers || {};
  headers = {
    ..._options.headers,
    'Content-Type': isEncoded ? 'application/x-www-form-urlencoded' : 'application/json'
  };

  if (withToken) {
    access_token = getSession('access_token');
    if (typeof access_token === 'object') {
      request.cancel();
      alert('Session expired, kindly login again to begin new session');
      window.location.href = '/';
    }
    headers[ 'Authorization' ] = `Bearer ${access_token}`;
  }
  const defer = new Promise(function(resolve, reject){
    axios({
      cancelToken: new CancelToken(function ex(c) {
        cancel = c;
      }),
      url:     _options.url,
      method:  _options.method,
      baseURL: _options.baseURL,
      headers: headers,
      params:  _options.params,
      data:    isEncoded ? formUrlEncoded(_options.data || {}) :
        _options.data || {}
    }).then((response) => {
      resolve(response);
    }).catch((error) => {
      if (axios.isCancel(error)) {
        reject(error.message);
      } else if (error.response) { // server returns an error
        reject(error.response.data);
      } else {
        reject('OOPS! NO RESPONSE');
      }
    });
  });
  return defer;
};

request.get = (options) => {
  options.method = 'GET';
  return request.make(options);
};

request.post = (options) => {
  options.method = 'POST';
  return request.make(options, true);
};

request.auth = (options) => {
  options.method = 'POST';
  return request.make(options);
};

request.put = (options) => {
  options.method = 'PUT';
  return request.make(options, true);
};

request.cancel = () => {
  cancel && request.cancel();
};

export default request;
