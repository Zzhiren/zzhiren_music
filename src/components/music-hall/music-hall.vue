<template>
  <div id="music-hall">
      <Search></Search>
      <Recommend></Recommend>
      <song-sheet></song-sheet>
  </div>
</template>
<script>
  import Search from 'components/search/search'
  import Recommend from 'components/recommend/recommend'
  import SongSheet from 'components/songsheet/songsheet'

export default {
  components: {
    Search,
    Recommend,
    SongSheet
  }
}
</script>
<style lang="less" scoped>

</style>
