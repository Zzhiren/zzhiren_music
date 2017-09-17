<template>
  <div id="tab">
    <router-link tag="div" class="tab-item" to="/">
      <span>我的</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/musicHall">
      <span>音乐馆</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/">
      <span>发现</span>
    </router-link>

  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
@import '~common/less/skin';
@height: 44px;
#tab {
  max-width: @max-width;
  min-width: @min-width;
  width: 100%;
  height: @height;
  background: @skin-green;
  justify-content: center;
  display: flex;
  font-size: 18px;
  .tab-item {
    width: 50px;
    text-align: center;
    line-height: @height;
    color: white;
  }
}
</style>
