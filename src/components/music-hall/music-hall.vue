<template>
  <div id="musci-hall">
    <scroll ref="scroll" :data="data">
      <!-- <Scroll :data="toplist"> -->
      <div>
        <Search></Search>
        <recommend></recommend>
        <song-sheet></song-sheet>
        <top-list></top-list>
        <new-song></new-song>
        <mv-recommend></mv-recommend>
      </div>

      <!-- </Scroll> -->
    </scroll>
  </div>
</template>
<script>
import Search from 'components/search/search'
import Recommend from 'components/recommend/recommend'
import SongSheet from 'components/songsheet/songsheet'
import TopList from 'components/toplist/toplist'
import NewSong from 'components/newsongs/newsong'
import MvRecommend from 'components/mv/mv-recommend'
import Scroll from 'base/scroll/scroll'

import { getDataList } from 'api/music_hall_data'

export default {
  data() {
    return {
      focus: [],
      hotdiss: {},
      shoubomv: {},
      toplist: [],
      data: {}
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
        this.data = response.data
        console.log(response)
      })
    }
  },
  components: {
    Search,
    Recommend,
    SongSheet,
    TopList,
    NewSong,
    MvRecommend,
    Scroll
  }
}
</script>
<style lang="less" scoped>
#musci-hall {
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: 40px;
}

.space {
  width: 100%;
  height: 44px;
  background: green;
  z-index: 9999;
}
</style>
