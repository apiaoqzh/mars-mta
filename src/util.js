// import Qs from 'qs'
import MtaH5 from 'mta-h5-analysis'
const initMars = function ({ sid = '', cid = '', autoReport = 0, senseHash = 1, senseQuery = 0, performanceMonitor = 0, ignoreParams = 0 }) {
  MtaH5.init({
    sid: sid, // 必填，统计用的appid
    cid: cid, // 如果开启自定义事件，此项目为必填，否则不填
    autoReport: autoReport, // 是否开启自动上报(1:init完成则上报一次,0:使用pgv方法才上报)
    senseHash: senseHash, // hash锚点是否进入url统计
    senseQuery: senseQuery, // url参数是否进入url统计
    performanceMonitor: performanceMonitor, // 是否开启性能监控
    ignoreParams: ignoreParams // 开启url参数上报时，可忽略部分参数拼接上报
  })
  // MtaH5.pgv()
}
/**
 *上报方法
 *
 * @param {*} options
 */
const stat = function (options) {
  const {
    type = 'click',
    event = '',
    data = {}
  } = options
  launch({
    type,
    event,
    data
  })
}
/**
 *发射
 *
 * @param {*} options
 */
const launch = function (options) {
  if (!window.MarsConfig.open) return
  switch (options.type) {
    case 'pv': MtaH5.pgv()
      break
    case 'click': options.event !== '' && MtaH5.clickStat(options.event, options.data)
      break
    default: options.event !== '' && MtaH5.clickStat(options.event, options.data)
  }
}
export {
  initMars,
  stat
}
export default stat
