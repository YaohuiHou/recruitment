import sensors from '../utils/sensorsdata/sensorsdata'
const sensorsDataFun = {
  sensorsPublic: () => {
    sensors.register({
      app_name: '招聘求职(小程序)',
      app_version: 'v1.0.0'
    })
  },
  // 相关埋点
  RelatedBurialPoint: (category, action,label) => {
    sensors.track("myevent", {
      Category: category,
      action: action,
      Label: label ? label : ''
    })
  },
  autoTrackPageShow: (pageTitle) => {
    sensors.para.autoTrack.pageShow = {
      title: pageTitle
    }
  },
  getDistinctId: () => {
    return sensors.store.getDistinctId()
  }

}

export default sensorsDataFun;
