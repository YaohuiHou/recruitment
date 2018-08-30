import wepy from 'wepy';

// 开发模式
const DEV_BUILD = true;

export default class Mixin extends wepy.mixin {
  onShareAppMessage() {
    return {
      title: '我在这里找替班司机，技术好还便宜',
      path: '/pages/index',
      imageUrl: 'https://bbs.cehome.com/wxApp/jobResume/imgs/share.png',
      success: function(res) {
        // 转发成功
      },
      fail: function(res) {
        // 转发失败
      }
    }
  }
  data = {
    // 线上地址
    // host: 'https://rentapitest.cehome.com/',
    host: DEV_BUILD
      ? 'https://mtest.cehome.com/zhengji/api/'
      : 'https://rentapi.cehome.com/',
    // 当前时间
    currentTime: ''
  };
  methods = {
    tap() {}
  };

  onShow() {}

  onLoad() {
    // 获取时间
    this.getCurrentDate();
  }

  // 获取时间
  getCurrentDate(n) {
    let date;
    if (n) {
      date = new Date(Number(n) * 1000);
    } else {
      date = new Date();
    }
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
      month = '0' + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = '0' + strDate;
    }
    if (n) {
      let me = date.getFullYear() + '-' + month + '-' + strDate;

      return me;
    }
    this.currentTime = date.getFullYear() + '-' + month + '-' + strDate;
  }
}
