<template>
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
</template>
<script>
    import { getNewSongs } from 'api/music_hall_data'

    export default {
        data() {
            return {
                list: []
            }
        },
        mounted() {
            this._getNewSongs()
        },
        methods: {
            _getNewSongs() {
                getNewSongs().then((response) => {
                    this.list = response.songlist.slice(0, 3)
                })
            }
        }
    }
</script>
<style lang="less" scoped>
    @import '~common/less/skin';

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
</style>
