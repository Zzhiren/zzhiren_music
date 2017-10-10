<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>
<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import { mapGetters } from 'vuex'

export default {
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    // 是否开启横向滚动，默认关闭
    scrollX: {
      type: Boolean,
      default: false
    },
    scrollY: {
      type: Boolean,
      default: false
    },
    // scrollbar: {
    //   type: Boolean,
    //   default: false
    // },
    click: {
      type: Boolean,
      default: true
    },
    // listenScroll: {
    //   type: Boolean,
    //   default: true
    // },
    pullup: {
      type: Boolean,
      default: false
    },
    beforeScroll: {
      type: Boolean,
      default: false
    },
    refreshDelay: {
      type: Number,
      default: 20
    }
  },
  data() {
    return {
      state: null
    }
  },
  computed: {
    // refresh_state() {
    //   return this.state = this.refresh_state
    // },
    ...mapGetters([
      'refresh_state'
    ])
  },
  created() {
    
  },
  mounted() {
    setTimeout(() => {
      this._initScroll()
    }, 20)
    
    setTimeout(() => {
      this.refresh()
    }, 2000)
  },
  updated() {
    this.refresh()
  },
  methods: {
    _initScroll() {
      if (!this.$refs.wrapper) {
        return
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        scrollX: this.scrollX,
        // scrollY: this.scrollY,
        click: this.click
      })

      if (this.listenScroll) {
        let me = this
        this.scroll.on('scroll', (pos) => {
          me.$emit('scroll', pos)
        })
      }

      if (this.pullup) {
        this.scroll.on('scrollEnd', () => {
          if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
            this.$emit('scrollToEnd')
          }
        })
      }

      if (this.beforeScroll) {
        this.scroll.on('beforeScrollStart', () => {
          this.$emit('beforeScroll')
        })
      }
    },
    disable() {
      this.scroll && this.scroll.disable()
    },
    enable() {
      this.scroll && this.scroll.enable()
    },
    refresh() {
      this.scroll && this.scroll.refresh()
      console.log('refresh11111')

    },
    scrollTo() {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    },
    scrollToElement() {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    }

  },
  watch: {
    refresh_state() {
      setTimeout(() => {
        this.refresh()
      }, this.refreshDelay)
    }
  }
}
</script>
<style lang="less" scoped>

</style>
