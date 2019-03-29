
import { initMars, stat } from './util'
import marsLink from './components/marsLink'
import marsBtn from './components/marsBtn'
const version = '0.0.1'
const MarsLink = marsLink
const MarsBtn = marsBtn
window.MarsConfig = {}
/**
 *初始化埋点
 *
 * @param {*} options
 */
const install = function (Vue, options) {
  if (install.installed) return
  window.MarsConfig = options
  window.MarsConfig.open && initMars(options.config)
  Vue.component(marsLink.name, marsLink)
  Vue.component(marsBtn.name, marsBtn)
  Vue.mixin({
    beforeRouteEnter (to, from, next) {
      stat({
        type: 'pv'
      })
      next()
    },
    created () {
      // if (window.marsOptions.includeEntry) {
      //   // 开启入场事件埋点
      //   if (window.marsOptions.includeLeave) {
      //     // 开启出场事件埋点
      //     if (window.navigator.userAgent.indexOf('iPhone') < 0) {
      //       !window.onbeforeunload && (window.onbeforeunload = function () {
      //         stat({
      //           type: 'leave',
      //           event: 'leave_app'
      //         })
      //       })
      //     } else {
      //       !window.onpagehide && (window.onpagehide = function () {
      //         stat({
      //           type: 'leave',
      //           event: 'leave_app'
      //         })
      //       })
      //     }
      //   }
      // }
    }
  })
  Object.defineProperty(Vue.prototype, `$stat`, { value: stat })
  Object.defineProperty(Vue.prototype, `$initMars`, { value: initMars })
}
export {
  version,
  stat,
  initMars,
  marsBtn,
  MarsBtn,
  MarsLink,
  marsLink
}
export default {
  version,
  install,
  stat,
  initMars,
  marsBtn,
  MarsBtn,
  MarsLink,
  marsLink
}
