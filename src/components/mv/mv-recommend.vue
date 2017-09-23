<template>
  <div class="mv-recommend">
      <div class="title">
            <span>MV推荐</span>
            <div class="icon">
                <Icon type="ios-arrow-right" class="ios-arrow-right"></Icon>
            </div>
        </div>
        <div class="list">
            <div v-for="(item, index) in datas.mvlist.slice(0, 2)" v-bind:key="item.mv_id">
                <img v-bind:src="item.picurl" alt="">
                <p class="mvtitle">{{ item.mvtitle }}</p>
                <span class="dissname">{{ _singerName(item.singers) }}</span>
            </div>
        </div>
        <div class="list">
            <div v-for="(item, index) in datas.mvlist.slice(2, 4)" v-bind:key="item.mv_id">
                <img v-bind:src="item.picurl" alt="">
                <p class="mvtitle">{{ item.mvtitle }}</p>
                <span class="dissname">{{ _singerName(item.singers) }}</span>
            </div>
        </div>
  </div>
</template>
<script scoped>
// import { getMvList } from 'api/music_hall_data'
import { mapMutations } from 'vuex'

export default {
    props: {
        datas: {
            type: Object,
            default: {}
        }
    },
    data() {
        return {
            // mvlist: [],
            // area: [],
            // tag: [],
            // year: [],
            // name: ''
        }
    },
    computed: {
      
  },
  mounted() {
   this._scrollRefresh()
  },
  
  methods: {
      _scrollRefresh() {
            if(this.datas.mvlist.length > 0) {
                this.scrollRefresh('mv-recommend')
            }
        },
      _getMvList() {
          getMvList().then((response) => {
              this.mvlist = response.data.mvlist
              this.area = response.data.taglist.area
              this.tag = response.data.taglist.tag
              this.year = response.data.taglist.year
          })
      },
      _singerName(singers){ 
          var array = []
          for(var i in singers) {
              array.push(singers[i].name)
          }
          return array.join('/')
      },
      ...mapMutations({
          scrollRefresh: 'SCROLL_REFRESH'
      })
  }
}
</script>
<style lang="less" scoped>
@import '~common/less/skin';

    .mv-recommend {
        max-width: @max-width;
        min-width: @min-width;
        width: 100%;
        text-align: center;
        .title {
            margin-top: 20px;
            margin-bottom: 10px;
            position: relative;
            .icon {
                display: inline-block;
                border: 1px solid #8B8B83;
                width: 20px;
                height: 20px;
                border-radius: 10px;
                right: @musci-hall-icon-right;
                position: absolute;
                top: @musci-hall-icon-top;
                .ios-arrow-right {
                    font-size: 20px;
                    color: #8B8B83;
                }
            }
            span {
                font-size: @music-hall-title;
                letter-spacing: 2px;
                color: black;
            }
        }
        .list {
            max-width: @max-width;
            min-width: @min-width;
            width: 100%;
            display: flex;
            margin-top: 12px;
            div {
                flex: 1;
                white-space: nowrap;
                overflow:hidden;
                img {
                    width: 100%;
                }
                
            }
            div:nth-child(2n) {
                margin-left: 2px;
                // margin-right: 2px;
            }
            .mvtitle {
                width: 100%;
                overflow: hidden;
                text-align: left;
                margin-left: 1px;
                margin-right: 2px;
                font-size: 12px;
                color: black;
                text-overflow: ellipsis;
            }
            .dissname {
                font-size: 10px;
                text-align: left;
                display: block;
                margin-right: 2px;
                margin-left: 2px;
            }
        }
    }
</style>
