<template>
  <div ref="wrapper" class=".xxx">
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
    click: {
      type: Boolean,
      default: true
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      default: null
    },
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
    },
    recommends: {
      type: Array,
      default: []
    },
    songsheet: {
      type: Array,
      default: []
    },
    toplist: {
      type: Array,
      default: []
    }
  },
  mounted() {
    setTimeout(() => {
      this._initScroll()
    }, 20)

  },
  computed: {
    ...mapGetters([
      'xxx'
    ])
  },
  methods: {
    _initScroll() {
      if (!this.$refs.wrapper) {
        return
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click
      })

      if (this.listenScroll) {
        let me = this
        this.scroll.on('scroll', (pos) => {
          me.$emit('scroll', pos)
        })
      }

      // if (this.pullup) {
      //   this.scroll.on('scrollEnd', () => {
      //     if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
      //       this.$emit('scrollToEnd')
      //     }
      //   })
      // }

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
        console.log('xxxxxxxxxx')
      
    },
    scrollTo() {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
      console.log(this.xxx + '111111111')
    },
    scrollToElement() {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    },

  },
  watch: {
    // recommends() {
    //   setTimeout(() => {
    //     this.refresh()
    //   }, this.refreshDelay)
    // },
    // songsheet() {
    //   setTimeout(() => {
    //     this.refresh()
    //     console.log('b')
    //   }, this.refreshDelay)
    // },
    toplist() {
      setTimeout(() => {
        this.refresh()
        console.log('c')
      }, this.refreshDelay)
    }
  }
}
</script>
<style lang="less" scoped>

</style>
