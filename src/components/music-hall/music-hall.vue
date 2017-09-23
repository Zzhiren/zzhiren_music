<template>
  <div id="musci-hall">    
    <scroll ref="scroll" class="scroll" :datas='datas'>
      <div>
        <recommend v-if="datas.focus.length>0" :datas='datas'></recommend>
        <song-sheet v-if="datas.songsheet.length>0" :datas='datas'></song-sheet>
        <top-list v-if="datas.toplist.length>0" :datas='datas'></top-list>
        <new-song v-if="datas.newsongs.length>0" :datas='datas'></new-song>
        <mv-recommend v-if="datas.mvlist.length>0" :datas='datas'></mv-recommend>
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
      datas: {
        'focus': [], //轮播图
        'songsheet': [], // 歌单推荐
        'toplist': [], //每日为你推荐30首
        'newsongs': [], //新歌速递
        'mvlist': [],
      }
    }
  },
  computed: {
    // data() {
    //   if(!this.datas.hasOwnProperty('focus')) {
    //     this.datas['focus'] = this.focus
    //   }
    //   if(!this.datas.hasOwnProperty('songsheet')) {
    //     this.datas['songsheet'] = this.songsheet
    //   }
    //   if(!this.datas.hasOwnProperty('toplist')) {
    //     this.datas['toplist'] = this.toplist
    //   }
    //   if(!this.datas.hasOwnProperty('newsongs')) {
    //     this.datas['newsongs'] = this.newsongs
    //   }
    //   if(!this.datas.hasOwnProperty('mvlist')) {
    //     this.datas['mvlist'] = this.mvlist
    //   }

    //   if(this.datas.hasOwnProperty('focus') && this.datas.hasOwnProperty('songsheet') && this.datas.hasOwnProperty('toplist') && this.datas.hasOwnProperty('newsongs') && this.datas.hasOwnProperty('mvlist')) {
    //     return this.datas
    //   }
    // }
  },
  created() {
    this._getRecommends()
    this._getSongSheet()
    this._getTopList()
    this._getNewSongs()
    this._getMvList()
  },
  methods: {
    _getRecommends() {
      getRecommend().then(response => {
        this.datas.focus = response.data.data.slider
        // this.datas['recommends'] = this.recommends
      })
    },

    _getSongSheet() {
      getSongSheet().then((response) => {
        // this.datas.songsheet = response.data.hotdiss.list.slice(0, 6)
        // this.datas.focus = response.data.focus
        // this.datas['songsheet'] = this.songsheet
        // this.datas['focus'] = response.data.focus
      })
    },

    _getTopList() {
      getTopList().then((response) => {
        this.datas.toplist = response.songlist
        // this.datas['toplist'] = this.toplist
      })
    },

    _getNewSongs() {
      getNewSongs().then((response) => {
        this.datas.newsongs = response.songlist.slice(0, 3)
        // this.datas['newsongs'] = this.newsongs
      })
    },

    _getMvList() {
          getMvList().then((response) => {
              this.datas.mvlist = response.data.mvlist
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
