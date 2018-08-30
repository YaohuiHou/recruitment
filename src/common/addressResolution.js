var QQMapWX = require('../utils/qqmap-wx-jssdk.js');
var MapWx = new QQMapWX({
  key: 'O5XBZ-6MMLG-KXBQT-IOK2Z-MPJ2K-76FTW'
});

export const ReverseGeocoder = (params = {}, callback) => {
  // return new Promise((resolve, reject) => {
  MapWx.reverseGeocoder({
    location: {
      latitude: params ? params.latitude : 0,
      longitude: params ? params.longitude : 0
    },
    success: function(res) {
      callback(res);
      // if (res.status === 0) {
      //   // resolve(res.result)
      // } else {
      //   // reject('err')
      // }
    },
    fail: function(err) {
      // reject('err')
    }
  });
  // })
};

const qqmapwx = {
  ReverseGeocoder: ReverseGeocoder
};

export default qqmapwx;
