var dev = false;

export function EnvironmentSwitching(Identification) {
  let DomainName = {
    solarapi: dev
      ? 'https://solarapitest.cehome.com/app'
      : 'https://solarapi.cehome.com/app',
    cehomeTiebaobei: dev
      ? 'https://shenceapi.tiebaobei.com/sa?project=cehome_test'
      : 'https://shenceapi.tiebaobei.com/sa?project=cehome'
  };
  return DomainName[Identification];
}
// http: //solarapitest.cehome.com/app/tbb/boss/saveFeedback

const Api = {
  testFun: () => EnvironmentSwitching('solarapi') + '/appTopicPage/getPostList',
  // 神策
  sensorsdata: () => EnvironmentSwitching('cehomeTiebaobei'),
  // 获取openId
  getOpenid: () => EnvironmentSwitching('solarapi') + '/wx/getWxSessionForJob',
  // 获取所有字典数据
  getAllDictionarles: () =>
    EnvironmentSwitching('solarapi') + '/job/common/getAllDictionaries',
  //获取求职聚合数据
  getResumeListByAd: () =>
    EnvironmentSwitching('solarapi') + '/job/resume/listByAd',
  // 获取招聘聚合数据
  getHiringDriverListByAd: () =>
    EnvironmentSwitching('solarapi') + '/job/hiringDriver/listByAd',
  // 登录发送验证码
  sendVCOfRegisterLogin: () =>
    EnvironmentSwitching('solarapi') + '/login/sendVCOfRegisterLogin',
  // 手机号验证码注册
  registerLoginByMobileVC: () =>
    EnvironmentSwitching('solarapi') + '/login/registerLoginByMobileVC',
  // 简历手机验证码
  getPhoneCode: () =>
    EnvironmentSwitching('solarapi') + '/job/common/sendVerificationCode',
  // 发布简历
  addResume: () => EnvironmentSwitching('solarapi') + ' /job/resume/add',
  // 编辑简历
  editResume: () => EnvironmentSwitching('solarapi') + ' /job/resume/edit',
  // 发布职位
  addJob: () => EnvironmentSwitching('solarapi') + '/job/hiringDriver/save',
  // 编辑职位
  editJob: () => EnvironmentSwitching('solarapi') + '/job/hiringDriver/edit',
  // 用户认证
  adrove: () => EnvironmentSwitching('solarapi') + '/job/common/authUser',
  // 上传图片
  upImageFile: () => EnvironmentSwitching('solarapi') + '/upyun/uploadImage',
  // 根据unionid换取用户信息
  getUserByWxUnionid: () =>
    EnvironmentSwitching('solarapi') + '/login/getUserByWxUnionid',
  // 职位详情
  hiringDriverDetails: () =>
    EnvironmentSwitching('solarapi') + '/job/hiringDriver/details',
  // 我的职位详情
  myDetails: () =>
    EnvironmentSwitching('solarapi') + '/job/hiringDriver/myDetails',
  // 职位列表
  hiringDriverList: () =>
    EnvironmentSwitching('solarapi') + '/job/hiringDriver/find',
  // 简历列表
  resumeList: () => EnvironmentSwitching('solarapi') + '/job/resume/list',
  // 简历详情
  getResumeDetail: () =>
    EnvironmentSwitching('solarapi') + '/job/resume/detail',
  // 我的简历详情
  findByUserId: () =>
    EnvironmentSwitching('solarapi') + '/job/resume/findByUserId',
  // 查看别人简历详情
  findByUserIdForLook: () =>
    EnvironmentSwitching('solarapi') + '/job/resume/findByUserIdForLook',
  // 电话联系
  callPhone: () => EnvironmentSwitching('solarapi') + '/job/common/callPhone',
  // 获取全部省份城市列表
  getAllDistrictGB: () =>
    EnvironmentSwitching('solarapi') + '/district/getDistrictList',
  // 获取省份列表
  getProvinceList: () =>
    EnvironmentSwitching('solarapi') + '/district/getProvinceList',
  // 获取城市列表
  getCityList: () => EnvironmentSwitching('solarapi') + '/district/getCityList',
  // 我的发布 职位列表
  myHiringDriver: () =>
    EnvironmentSwitching('solarapi') + '/job/hiringDriver/myHiringDriver',
  // 我的发布  简历列表
  myResumeList: () =>
    EnvironmentSwitching('solarapi') + '/job/resume/findByUserId',
  // 我的收藏 职位列表
  myCollectJobs: () =>
    EnvironmentSwitching('solarapi') + '/job/fav/findHiringDriver',
  // 我的收藏 简历列表
  myCollectResume: () =>
    EnvironmentSwitching('solarapi') + '/job/resume/favoriteList',
  // 他的主页 职位列表
  otherHiringJobs: () =>
    EnvironmentSwitching('solarapi') +
    '/job/hiringDriver/findHiringDriverByUserId',
  // 个人中心
  getJobUserInfo: () =>
    EnvironmentSwitching('solarapi') + '/job/common/getJobUserInfo',
  // 获取腾讯云签名
  gitFileSidnature: () =>
    EnvironmentSwitching('solarapi') + '/tencent/getFileUploadSignature',
  // 收藏
  favAdd: () => EnvironmentSwitching('solarapi') + '/job/fav/add',
  // 取消收藏
  favCancel: () => EnvironmentSwitching('solarapi') + '/job/fav/cancel',
  // 取消收藏
  report: () => EnvironmentSwitching('solarapi') + '/job/complaint/add',
  // 获取用户自己的认证信息
  getUserAuthInfo: () =>
    EnvironmentSwitching('solarapi') + '/job/common/getUserAuthInfo'
};
export default Api;
