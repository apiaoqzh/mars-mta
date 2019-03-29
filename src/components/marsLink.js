import { stat } from '../util'
export default {
  name: 'mars-link',
  props: {
    href: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    event: {
      type: String,
      default: ''
    },
    data: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  render (createElement) {
    const _self = this
    const on = {
      click: () => {
        if (window.MarsConfig.open) {
          stat({
            event: _self.event,
            data: _self.data
          })
        }
        setTimeout(() => {
          location.href = _self.href
        }, 300)
      }
    }
    return createElement(_self.tag, { on }, _self.$slots.default)
  }
}
