<template>
    <div  class="song-sheet">
        <div class="title">
            <span>歌单推荐</span>
            <div class="icon">
                <Icon type="ios-arrow-right" class="ios-arrow-right"></Icon>
            </div>
        </div>
        <div  class="list">
            <div v-for="(item, index) in datas.songsheet.slice(0, 3)" v-bind:key="item.dissid">
                <img v-bind:src="item.imgurl" alt="">
                <span class="dissname" v-html="item.dissname">{{ item.dissname }}</span>
            </div>
        </div>
        <div class="list">
            <div v-for="(item, index) in datas.songsheet.slice(3)" v-bind:key="item.dissid">
                <img v-bind:src="item.imgurl" alt="">
                <span class="dissname" v-html="item.dissname">{{ item.dissname }}</span>
            </div>
        </div>
    </div>
</template>
<script>
// import { getSongSheet } from 'api/music_hall_data'
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
        }
    },
    mounted() {
        this._scrollRefresh()
    },
    methods: {
        _scrollRefresh() {
            if(this.datas.songsheet.length > 0) {
                this.scrollRefresh('songsheet')
            }
            // setTimeout(() => {
            //     this.scrollRefresh('recommend')
            // }, 5000);
        },
        ...mapMutations({
            scrollRefresh: 'SCROLL_REFRESH'
        })
    }
}
</script>
<style lang="less" scoped>
@import '~common/less/skin';

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
</style>
