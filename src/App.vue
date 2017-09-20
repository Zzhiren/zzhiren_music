<template>
  <div id="app">
    <!-- <tab></tab> -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    <div class="play-music">
    </div>
  </div>
</template>

<script>
  import Tab from 'components/tab/tab'
  // import PlayMusic from 'components/playmusic/play-music'

  export default {
    components: {
      Tab
    }
  }
</script>

<style lang="less">
  @import 'common/less/base.less';
  @import 'common/less/skin.less';

  #app {
    max-width: @max-width;
    min-width: @min-width;
    width: 100%;
    // height: 100%;
    display: flex;
    flex-direction: column;
    .content {
      flex:1;
    }
    .play-music {
      max-width: @max-width;
      min-width: @min-width;
      width: 100%;
      height: 40px;
      background:@skin-green;
      flex: 1;
      position: fixed;
      bottom: 0;
    }
  }
</style>
