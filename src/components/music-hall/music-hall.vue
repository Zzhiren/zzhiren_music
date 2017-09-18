<template>
  <div id="music-hall">
      <Search></Search>
      <recommend></recommend>
      <song-sheet></song-sheet>
      <top-list></top-list>
  </div>
</template>
<script>
  import Search from 'components/search/search'
  import Recommend from 'components/recommend/recommend'
  import SongSheet from 'components/songsheet/songsheet'
  import TopList from 'components/toplist/toplist'

export default {
  components: {
    Search,
    Recommend,
    SongSheet,
    TopList
  }
}
</script>
<style lang="less" scoped>

</style>
