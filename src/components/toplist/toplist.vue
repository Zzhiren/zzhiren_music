<template>
    <div class="top-list">
        <div class="title">
            <span>每日为你推荐·30首歌</span>
            <div class="icon">
                <Icon type="ios-arrow-right" class="ios-arrow-right"></Icon>
            </div>
        </div>
        <!-- <span v-for="(item,index) in toplist" v-bind:key="item.ListName">12312{{item.ListName}}</span> -->
        <div class="list" v-for="(item, index) in datas.toplist.slice(0, 5)" v-bind:key="item.cur_count">
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
</template>
<script>
// import { getTopList } from 'api/music_hall_data'

export default {
    props: {
        datas: {
            type: Object,
            default: {}
        }
    },
    data() {
        return {
            // toplist: []
        }
    },
    mounted() {
        // this._getTopList()
        // console.log(this.toplist)
    },
    methods: {
        // _getTopList() {
        //     getTopList().then((response) => {
        //         this.toplist = response.songlist
        //     })
        // }
    }
}
</script>
<style lang="less" scoped>
@import '~common/less/skin';

@img-size: 70px;

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
</style>
