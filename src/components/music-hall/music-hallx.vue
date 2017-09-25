<template>
    <div id="musci-hall">
        <scroll ref="scroll" :data="data">
            <!-- <Scroll :data="toplist"> -->
            <div>
                <Search></Search>
                <div class="recommend">
                    <div v-if="recommends.length" class="slider-wrapper">
                        <slider>
                            <div class="slider-item " v-for="(item, index) in recommends" v-bind:key="item.index">
                                <a v-bind:href="item.linkUrl">
                                    <img v-bind:src="item.picUrl" alt="">
                                </a>
                            </div>
                        </slider>
                    </div>
                    <div class="category">
                        <router-link to="singers" tag="div" class="category_items">
                            <div class="icon">
                                <Icon type="person" class="i-icon"></Icon>
                            </div>
                            <div class="span">
                                <span>歌手</span>
                            </div>
                        </router-link>
                        <div class="category_items">
                            <div class="icon">
                                <Icon type="podium" class="i-icon"></Icon>
                            </div>
                            <div class="span">
                                <span>排行</span>
                            </div>
                        </div>
                        <div class="category_items">
                            <div class="icon">
                                <Icon type="android-wifi" class="i-icon"></Icon>
                            </div>
                            <div class="span">
                                <span>电台</span>
                            </div>

                        </div>
                    </div>
                    <div class="category">
                        <div class="category_items">
                            <div class="icon">
                                <Icon type="ios-keypad" class="i-icon"></Icon>
                            </div>
                            <div class="span">
                                <span>分类歌单</span>
                            </div>

                        </div>
                        <div class="category_items">
                            <div class="icon">
                                <Icon type="social-youtube-outline" class="i-icon"></Icon>
                            </div>
                            <div class="span">
                                <span>视频MV</span>
                            </div>

                        </div>
                        <div class="category_items">
                            <div class="icon">
                                <Icon type="social-pinterest-outline" class="i-icon"></Icon>
                            </div>
                            <div class="span">
                                <span>数字专辑</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="song-sheet">
                    <div class="title">
                        <span>歌单推荐</span>
                        <div class="icon">
                            <Icon type="ios-arrow-right" class="ios-arrow-right"></Icon>
                        </div>
                    </div>
                    <div class="list">
                        <div v-for="(item, index) in list.slice(0, 3)" v-bind:key="item.dissid">
                            <img v-bind:src="item.imgurl" alt="">
                            <span class="dissname" v-html="item.dissname">{{ item.dissname }}</span>
                        </div>
                    </div>
                    <div class="list">
                        <div v-for="(item, index) in list.slice(3)" v-bind:key="item.dissid">
                            <img v-bind:src="item.imgurl" alt="">
                            <span class="dissname" v-html="item.dissname">{{ item.dissname }}</span>
                        </div>
                    </div>
                </div>

                <div class="top-list">
                    <div class="title">
                        <span>每日为你推荐·30首歌</span>
                        <div class="icon">
                            <Icon type="ios-arrow-right" class="ios-arrow-right"></Icon>
                        </div>
                    </div>
                    <!-- <span v-for="(item,index) in toplist" v-bind:key="item.ListName">12312{{item.ListName}}</span> -->
                    <div class="list" v-for="(item, index) in toplist.slice(0, 5)" v-bind:key="item.cur_count">
                        <div class="albumm-pic">
                            <img v-bind:src="'//y.gtimg.cn/music/photo_new/T002R90x90M000' + item.data.albummid + '.jpg?' + '259200'" alt="">
                        </div>
                        <div class="song-desc">
                            <div class="content">
                                <p class="song-name">{{ item.data.songname }}</p>
                                <p class="song-author">
                                    <span v-for="(singer, index) in item.data.singer" v-bind:key="singer.id">{{ singer.name }}</span>
                                    <span class="albumname">·{{ item.data.albumname }}</span>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="new-song">
                    <div class="title">
                        <span>新歌速递</span>
                        <div class="icon">
                            <Icon type="ios-arrow-right" class="ios-arrow-right"></Icon>
                        </div>
                    </div>
                    <div class="list">
                        <div v-for="(item, index) in list.slice(0, 3)" v-bind:key="item.songid">
                            <img v-bind:src="'//y.gtimg.cn/music/photo_new/T002R90x90M000' + item.data.albummid + '.jpg?' + '259200'" alt="">

                            <span class="dissname">{{ item.data.songname }}</span>
                        </div>
                    </div>
                </div>

                <div class="mv-recommend">
                    <div class="title">
                        <span>歌单推荐</span>
                        <div class="icon">
                            <Icon type="ios-arrow-right" class="ios-arrow-right"></Icon>
                        </div>
                    </div>
                    <div class="list">
                        <div v-for="(item, index) in mvlist.slice(0, 2)" v-bind:key="item.mv_id">
                            <img v-bind:src="item.picurl" alt="">
                            <p class="mvtitle">{{ item.mvtitle }}</p>
                            <span class="dissname">{{ _singerName(item.singers) }}</span>
                        </div>
                    </div>
                    <div class="list">
                        <div v-for="(item, index) in mvlist.slice(2, 4)" v-bind:key="item.mv_id">
                            <img v-bind:src="item.picurl" alt="">
                            <p class="mvtitle">{{ item.mvtitle }}</p>
                            <span class="dissname">{{ _singerName(item.singers) }}</span>
                        </div>
                    </div>
                </div>
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
        // this._getDataList()
        this._getMvList()
        this._getRecommends()
    },
    methods: {
        // _getDataList() {
        //     getDataList().then((response) => {
        //         this.focus = response.data.focus
        //         this.hotdiss = response.data.hotdiss
        //         this.shoubomv = response.data.shoubomv
        //         this.toplist = response.data.toplist
        //         this.data = response.data
        //         console.log(response)
        //     })
        // }
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
       _getRecommends() {
            getRecommend().then(response => {
                this.recommends = response.data.data.slider
            })
            // this.setMusic_hall_refresh(recommends)
            // console.log(this.xxx)
            this.set(this.xxx)
        
        },
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
@import '~common/less/skin';
@div-height: 40px;
  @img-size: 70px;

#musci-hall {
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: hidden;
    top: 40px;
}

.slider-wrapper {
    width: 100%;
    position: relative;
    overflow: hidden;
}

.category {
    width: 100%;
    display: flex;
    justify-content: center;
    .category_items {
        margin-top: 10px;
        justify-content: center;
        flex: 1;
        flex-wrap: wrap;
        text-align: center;
        height: @div-height;
        vertical-align: middle;
        div {
            line-height: @div-height;
        }
        .span {
            line-height: @div-height; // width: 100px;
            text-align: left;
            span {
                margin-left: 10px;
            }
        }
        .i-icon {
            color: @skin-green;
            font-size: 25px;
        }
        .icon {
            margin-top: 5px;
            margin-left: 25px;
            width: 20px;
            float: left;
        }
    }
}

.space {
    width: 100%;
    height: 44px;
    background: green;
    z-index: 9999;
}

.song-sheet {
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
        display: flex; // justify-content: center;
        margin-top: 8px;
        div {
            flex: 1;
            img {
                width: 100%;
            }
        }
        div:nth-child(2n) {
            margin-left: 2px;
            margin-right: 2px;
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

.top-list {
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
            top: @musci-hall-icon-top;
            bottom: 0;
            position: absolute;

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
        margin-top: 2px;
        .albumm-pic {
            width: @img-size;
            height: @img-size;
            float: left;
            img {
                width: 100%;
            }
        }
        .song-desc {
            height: @img-size;
            position: relative;
            .content {
                width: 100%;
                text-align: left;
                padding-top: 18px;
                .song-name {
                    margin-left: 80px;
                    font-size: 15px;
                    font-weight: 100;
                    color: black;
                }
                .song-author {
                    margin-left: 80px;
                    font-size: 11px;
                }
            }
        }
    }
}

.new-song {
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
        display: flex; // justify-content: center;
        margin-top: 8px;
        div {
            flex: 1;
            img {
                width: 100%;
            }
        }
        div:nth-child(2n) {
            margin-left: 2px;
            margin-right: 2px;
        }
        .dissname {
            font-size: 12px;
            text-align: center;
            display: block;
            margin-right: 2px;
            margin-left: 2px;
        }
    }
}

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
