<template>
    <div class="top-list">
        <div class="title">
            <span>每日为你推荐·30首歌</span>
            <div class="icon">
                <Icon type="ios-arrow-right" class="ios-arrow-right"></Icon>
            </div>
        </div>
        <div class="list" v-for="(item, index) in toplist.slice(0, 5)" v-bind:key="item.cur_count">
            <div class="albumm-pic">
                <img v-bind:src="'//y.gtimg.cn/music/photo_new/T002R90x90M000' + item.data.albummid + '.jpg?' + '259200'" alt="">
            </div>
            <div class="song-desc">
                <p class="song-name">{{ item.data.songname }}</p>
                <span class="song-author" v-for="(singer, index) in item.data.singer" v-bind:key="singer.id">
                    {{ singer.name }}
                </span>
                <span class="albumdesc"></span>
            </div>
        </div>
    </div>
</template>
<script>
import { getTopList } from 'api/music_hall_data'

export default {
    data() {
        return {
            toplist: []
        }
    },
    mounted() {
        this._getTopList()
        //https://y.gtimg.cn/music/photo_new/T002R90x90M000004U936F0HXo1B.jpg?max_age=2592000
    },
    methods: {
        _getTopList() {
            getTopList().then((response) => {
                this.toplist = response.songlist
                console.log(this.toplist)
            })
        }
    }
 }
</script>
<style lang="less" scoped>
@import '~common/less/skin';

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
}

</style>
