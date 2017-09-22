<template>
  <div class="tab">
    <div class="tab-list">
      <router-link tag="div" class="tab-item" to="/">
        <span>我的</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/tab/musichall">
        <span>音乐馆</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/">
        <span>发现</span>
      </router-link>
    </div>
    <Search></Search>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
  </div>
</template>
<script>
import ListView from 'base/listview/listview'
import Search from 'components/search/search'


export default {
  components: {
    ListView,
    Search
  }
}
</script>
<style lang="less" scoped>
@import '~common/less/skin';
@height: 44px;
.tab {
  position: relative;
  height: @height;
  .tab-list {
    max-width: @max-width;
    min-width: @min-width;
    width: 100%;
    height: @height;
    background: @skin-green;
    justify-content: center;
    display: flex;
    font-size: 18px;
    top: 0; // position: fixed;
    .tab-item {
      width: 60px;
      text-align: center;
      line-height: @height;
      color: white;
    }
  }
} // .space {
//   width: 100%;
//   height: @height;
// }
</style>
