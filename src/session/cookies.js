import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';
import cookie from 'react-cookie';

let userTimeout;

let encryptKey = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_ENCRYPTION_KEY : process.env.REACT_APP_ENCRYPTION_KEY;

let secureCookies = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_SECURE_COOKIES : process.env.REACT_APP_SECURE_COOKIES;

export const getSession = (key) => {
  let sessionData = cookie.load('qt_d');

  if (sessionData) {
    let data = decryptObject(sessionData);
    return key ? data[key] : data;
  } else {
    return {};
  }
};

export const decrypt = (cipherText) => {
  let bytes = AES.decrypt(cipherText.toString(), encryptKey);
  let plainText = bytes.toString(Utf8);
  return plainText;
};

export const decryptObject = (cipherText) => {
  let bytes = AES.decrypt(cipherText.toString(), encryptKey);
  let decrypted = JSON.parse(bytes.toString(Utf8));
  return decrypted;
};


export const removeSession = () => {
  userTimeout && clearTimeout(userTimeout);
  cookie.remove('qt_d');
};

export const timeRemaining = () => {
  let isActive = cookie.load('qt_d') ? 1 : 0;
  return isActive;
};

export const timeOutUser = (expiry) => {
  userTimeout && clearTimeout(userTimeout);
  userTimeout = setTimeout(() => {
    removeSession();
    window.location.href = '/';
  }, expiry);
};

export const saveSession = (data, token) => {
  let tokenExpiry = new Date((data.exp - 10) * 1000);
  let cookieOptions = {
    expires:       tokenExpiry,
    secureCookies: secureCookies ? true : false,
    path:          '/'
  };

  data.expiryDate = tokenExpiry;
  data.access_token = token;

  let cipherText = AES.encrypt(JSON.stringify(data), encryptKey);
  cipherText = cipherText + '';

  cookie.save('qt_d', cipherText, cookieOptions);
};

export const hasToken = () => {
  let sessionData = cookie.load('qt_d');
  if (sessionData) {
    let data = decryptObject(sessionData);
    return data.exp * 1000 > Date.now();
  }
  return false;
};
