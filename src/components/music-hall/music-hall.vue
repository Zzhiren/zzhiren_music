<template>
  <div id="musci-hall">
    <scroll ref="scroll" class="scroll" :recommends='recommends' :songsheet='songsheet' :toplist='toplist'>
      <div>
        <!-- <Search></Search> -->
        <recommend :recommends='recommends'></recommend>
        <song-sheet :songsheet='songsheet'></song-sheet>
        <top-list :toplist='toplist'></top-list>
        <!-- <new-song></new-song>
          <mv-recommend></mv-recommend> -->
      </div>

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

import { getDataList, getSongSheet, getTopList } from 'api/music_hall_data'
import { getRecommend } from 'data/getdata'

export default {
  data() {
    return {
      recommends: [],
      songsheet: [],
      toplist: []
    }
  },
  mounted() {
    this._getRecommends()
    this._getSongSheet()
    setTimeout(() => {
      this._getTopList()
    }, 5000)
  },
  methods: {
    _getRecommends() {
      getRecommend().then(response => {
        this.recommends = response.data.data.slider
      })
    },

    _getSongSheet() {
      getSongSheet().then((response) => {
        this.songsheet = response.data.hotdiss.list.slice(0, 6)
        // console.log(response)
      })
    },

    _getTopList() {
      getTopList().then((response) => {
        this.toplist = response.songlist
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
  // height: 100%;
  // overflow: hidden;
  top: 40px;
  bottom: 0;
}
.scroll {
  height: 100%;
      overflow: hidden;
}
.space {
  width: 100%;
  height: 44px;
  background: green;
  z-index: 9999;
}
</style>
