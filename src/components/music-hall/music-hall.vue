<template>
  <div id="musci-hall">    
    <scroll ref="scroll" class="scroll" :datas='datas'>
      <div>
        <recommend :datas='datas'></recommend>
        <song-sheet :datas='datas'></song-sheet>
        <top-list :datas='toplist'></top-list>
        <new-song :datas='newsongs'></new-song>
        <mv-recommend :datas='mvlist'></mv-recommend>
      </div>

    </scroll>
  </div>
</template>
<script>
import Recommend from 'components/recommend/recommend'
import SongSheet from 'components/songsheet/songsheet'
import TopList from 'components/toplist/toplist'
import NewSong from 'components/newsongs/newsong'
import MvRecommend from 'components/mv/mv-recommend'
import Scroll from 'base/scroll/scroll'

import { getDataList, getSongSheet, getTopList, getNewSongs, getMvList } from 'api/music_hall_data'
import { getRecommend } from 'data/getdata'

export default {
  data() {
    return {
      focus: [], //轮播图
      songsheet: [], // 歌单推荐
      toplist: [], //每日为你推荐30首
      newsongs: [], //新歌速递
      mvlist: [],
      datas: {}
    }
  },
  mounted() {
    // this._getRecommends()
    this._getSongSheet()
    // this._getTopList()
    // this._getNewSongs()
    // this._getMvList()
  },
  methods: {
    _getRecommends() {
      getRecommend().then(response => {
        this.recommends = response.data.data.slider
        this.datas['recommends'] = this.recommends
      })
    },

    _getSongSheet() {
      getSongSheet().then((response) => {
        this.songsheet = response.data.hotdiss.list.slice(0, 6)
        this.focus = response.data.focus
        this.datas['songsheet'] = this.songsheet
        // this.datas['focus'] = response.data.focus
      })
    },

    _getTopList() {
      getTopList().then((response) => {
        this.toplist = response.songlist
        this.datas['toplist'] = this.toplist
      })
    },

    _getNewSongs() {
      getNewSongs().then((response) => {
        this.newsongs = response.songlist.slice(0, 3)
        this.datas['newsongs'] = this.newsongs
      })
    },

    _getMvList() {
          getMvList().then((response) => {
              this.mvlist = response.data.mvlist
              this.datas['mvlist'] = this.mvlist

              this.area = response.data.taglist.area
              this.tag = response.data.taglist.tag
              this.year = response.data.taglist.year
          })
      }
  },
  components: {
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
  width: 100%; // height: 100%;
  // overflow: hidden;
  top: 84px;
  bottom: 44px;
}

.scroll {
  height: 100%;
  overflow: hidden;
}

</style>
