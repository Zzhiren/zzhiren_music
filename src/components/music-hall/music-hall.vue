<template>
  <div id="music-hall">
      <Search></Search>
      <Recommend></Recommend>
  </div>
</template>
<script>
  import Search from 'components/search/search'
  import Recommend from 'components/recommend/recommend'

export default {
  components: {
    Search,
    Recommend
  }
}
</script>
<style lang="less" scoped>

</style>
