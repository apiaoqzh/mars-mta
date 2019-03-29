import { stat } from '../util'
export default {
  name: 'mars-btn',
  props: {
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
      click: (e) => {
        stat({
          event: _self.event,
          data: _self.data
        })
        this.$emit('click', e)
      }
    }
    return createElement(_self.tag, { on }, _self.$slots.default)
  }
}
