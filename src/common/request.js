import Api from './api';
import sensor from '../utils/sensorsdata/sensorsdata';
var CryptoJS = require('crypto-js');

export function aesEncrypt(visitorid) {
  let key = CryptoJS.enc.Utf8.parse('mp$4Ru@WtsPo2mAf');
  var keyAesData = CryptoJS.AES.encrypt('cehomemp@' + visitorid, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return keyAesData.toString();
}

export const VisitorId = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const getHeaderData = () => {
  let visitorid = VisitorId();
  let loginInfo = wx.getStorageSync('loginInfo');
  var obj = {
    'content-Type': 'application/x-www-form-urlencoded',
    token: aesEncrypt(visitorid),
    visitorid: visitorid,
    udid: sensor.store.getDistinctId(),
    uid: loginInfo ? loginInfo.uid : '',
    client: 'mp',
    version: 3640
  };

  return obj;
};

export const cehomeRequest = (url, params = {}, method, _this) => {
  var header = Object.assign(getHeaderData(), {});
  return new Promise((resolve, reject) => {
    wx.request({
      method: method,
      url: url,
      data: Object.assign(params),
      header: header,
      success: function(res) {
        resolve(res);
      },
      fail: err => {
        return reject(err); //这里可以使用resolve(err),将错误信息传回去
      },
      complete: com => {
        reject(com);
      }
    });
  });
};

module.exports = {
  cehomeRequest: cehomeRequest,
  Api: Api,
  getHeaderData
};
