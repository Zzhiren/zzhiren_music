<template>
  <div id="music-hall">
      <Search></Search>
      <recommend></recommend>
      <song-sheet></song-sheet>
      <top-list></top-list>
      <new-song></new-song>
      <mv-recommend></mv-recommend>
  </div>
</template>
<script>
  import Search from 'components/search/search'
  import Recommend from 'components/recommend/recommend'
  import SongSheet from 'components/songsheet/songsheet'
  import TopList from 'components/toplist/toplist'
  import NewSong from 'components/newsongs/newsong'
  import MvRecommend from 'components/mv/mv-recommend'

  import { getDataList } from 'api/music_hall_data'
  
export default {
  data() {
    return {
      focus: [],
      hotdiss: {},
      shoubomv: {},
      toplist: []
    }
  },
  mounted() {
    this._getDataList()
  },
  methods: {
    _getDataList() {
      getDataList().then((response) => {
        this.focus = response.data.focus
        this.hotdiss = response.data.hotdiss
        this.shoubomv = response.data.shoubomv
        this.toplist = response.data.toplist
      })
    }
  },
  components: {
    Search,
    Recommend,
    SongSheet,
    TopList,
    NewSong,
    MvRecommend
  }
}
</script>
<style lang="less" scoped>

</style>
