<template>
  <!-- <scroll> -->
    <div class="wrapper">
      <div class="content">
          <slot></slot>
      </div>
    </div>
  <!-- </scroll> -->
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'

  export default {
    props: {
       scrollX: {
        type: Boolean,
        default: 0
      },
    },
    components: {
      Scroll
    }
  }
</script>

<style scoped lang="less" >
  .listview {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden,
  }
</style>
